/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function AllocateAzureVM(requestData?: Properties, reservations?: Array<Properties>, subtenant?: Properties, lastAllocatedData?: Properties): Properties {// Global keys in the reservation object
var RESERVATION_ID_KEY = "id";
var RESERVATION_NAME_KEY = "name";

// Keys in the reservation extension data
var RESERVATION_SUBSCRIPTION_ID_KEY = "subscriptionId";
var RESERVATION_LOCATION_KEY = "location";
var RESERVATION_RESOURCE_GROUPS_KEY = "resourceGroups";
var RESERVATION_STORAGE_ACCOUNTS_KEY = "storageAccounts";
var RESERVATION_LOAD_BALANCERS_KEY = "loadBalancers";
var RESERVATION_NETWORKS_KEY = "networks";
var RESERVATION_SECURITY_GROUPS_KEY = "securityGroups"
var RESERVATION_CUSTOM_PROPERTIES_KEY = "reservationCustomProperties";

// Keys in the request data matching the workflow inputs
var WORKFLOW_LOCATION_KEY = "locationId";
var WORKFLOW_RESOURCE_GROUP_REQUIRE_KEY = "requireResourceGroup";
var WORKFLOW_RESOURCE_GROUP_NAME_KEY = "resourceGroupName";

var WORKFLOW_LOADBALANCER_NAME_KEY = "loadBalancerName";
var WORKFLOW_LOADBALANCER_BAP_NAME_KEY = "backendAddressPoolName";
var WORKFLOW_LOADBALANCER_RG_NAME_KEY = "loadBalancerRGName";

var WORKFLOW_IMAGE_SIZE_KEY = "instanceSize";
var WORKFLOW_IMAGE_URN_KEY = "imageURN";
var WORKFLOW_IMAGE_TYPE_KEY = "imageType";
// Defined by "Create Azure Virtual Machine" WF Presentation. {{
var IMAGE_TYPE_STOCK = "Stock";
var IMAGE_TYPE_CUSTOM = "Custom";
//expected format of the provided value depending on the type
var IMAGE_TYPE_STOCK_FORMAT = "publisher:offer:sku:version";
var IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.windows.net/<container>/<image>.vhd";
// }}
// Resource group XaaS Blueprint constants
var RESOURCE_GROUP_CREATION_TYPE = "resourceGroupCreationType";
var RESOURCE_GROUP_CREATION_TYPE_NEW = "new";
var RESOURCE_GROUP_CREATION_TYPE_EXISTING = "existing";
// }}
// Availability set constants
var AVAILABILITY_SET_NAME_KEY = "availabilitySetName";
var AVAILABILITY_SET_CREATION_TYPE = "availabilitySetCreationType";
var AVAILABILITY_SET_CREATION_TYPE_NEW = "new";
var AVAILABILITY_SET_CREATION_TYPE_EXISTING = "existing";
var AVAILABILITY_SET_CREATION_TYPE_NONE = "none";
// }}
// Storage disk constants
var STORAGE_DISK_CONFIGURATION_TYPE_DDETAILS = "diskDetails";
var STORAGE_DISK_CONFIGURATION_TYPE_SACCOUNT_NAME = "storageAccount";
var STORAGE_DISK_TYPE_HDD = "HDD";
var STORAGE_DISK_TYPE_SSD = "SSD";
var STORAGE_DISK_CACHING_TYPE_NONE = "None";
var STORAGE_DISK_CACHING_TYPE_READ_ONLY = "ReadOnly";
var STORAGE_DISK_CACHING_TYPE_READ_WRITE = "ReadWrite";
// }}
var WORKFLOW_STORAGE_TYPE_KEY = "storageType";
var WORKFLOW_STORAGE_ACCOUNT_KEY = "storageAccountName";
var WORKFLOW_DIAGNOSTICS_STORAGE_ACCOUNT_KEY = "diagnosticsStorageAccountName";
var WORKFLOW_DIAGNOSTICS_STORAGE_ACCOUNT_ENABLED_KEY = "diagnosticsStorageAccountEnabled";

var IP_ADDRESS_TYPE_DYNAMIC = "Dynamic";
var IP_ADDRESS_TYPE_STATIC = "Static";

var NETWORK_CONFIGURATION_TYPE_NETS = "networks";
var NETWORK_CONFIGURATION_TYPE_NP = "networkProfile";


var FILTER_STORAGE_ACCOUNT_KEY = "filter." + WORKFLOW_STORAGE_ACCOUNT_KEY;

var IS_NEW_DEPLOYMENT_KEY = "isNewDeployment";

// Keys in the result of filterByXXX methods
var INSTANCE_KEY = "instance";
var ERROR_KEY = "error";

var WORKFLOW_VM_NAME_KEY = "vmName";
var MACHINE_PREFIX_TYPE_KEY = "machinePrefixType";
var MACHINE_PREFIX_TYPE_CUSTOM = "custom";
var MACHINE_PREFIX_KEY = "machinePrefix";

var IAAS_MACHINE_PREFIX_KEY = "iaas-machine-prefix";
var SUBTENANT_TENANT_KEY = "tenant";

var GENERATE_VM_NAME_WORKFLOW_ID = "8ccbc6a4-1549-4406-afb0-a8a683c0cdeb";

var AGGREGATED_ALLOCATION_DATA_KEY = "aggregatedAllocationData";

//---------------------------------------
if (reservations == null || reservations.length == 0) {
    throw "No reservation found in the system!";
}

// Map containing the allocation data for all requested resources (in case of scale out they can be more than one).
// Key - zero based index, Value = allocation data.
var aggregatedAllocationData = new Properties();

var clusterOriginal = requestData.get("__cluster_original");
if (clusterOriginal == null) {
    clusterOriginal = 0;
}

var cluster = requestData.get("_cluster");
if (cluster == null) {
    cluster = 1;
}

var numberOfInstances = cluster - clusterOriginal;
for (var var index = 0; index < numberOfInstances; index++) {
    var instanceAllocationData = getInstanceAllocationData(index);
    if (index == 0 && lastAllocatedData == null) {
        // If this is the very first allocation, then reuse the ResourceGroup and AvailabilitySet names in the upcoming allocations.
        var allocatedData = new Properties();
        allocatedData.put(WORKFLOW_RESOURCE_GROUP_NAME_KEY, instanceAllocationData.get(WORKFLOW_RESOURCE_GROUP_NAME_KEY));
        allocatedData.put(AVAILABILITY_SET_NAME_KEY, instanceAllocationData.get(AVAILABILITY_SET_NAME_KEY));
        allocatedData.put(IS_NEW_DEPLOYMENT_KEY, true);
        var fakeAggregatedAllocData = new Properties();
        fakeAggregatedAllocData.put(0, allocatedData);
        lastAllocatedData = new Properties();
        lastAllocatedData.put(AGGREGATED_ALLOCATION_DATA_KEY, fakeAggregatedAllocData);
    }
    aggregatedAllocationData.put(index, instanceAllocationData);
}

var result = new Properties();
// Wrap the aggregated allocation data in a map with single property so it is easily consumed by Create Azure VM workflow.
result.put(AGGREGATED_ALLOCATION_DATA_KEY, aggregatedAllocationData);

// Put the parameters from first allocation instance as top level elements to satisfy mandatory arguments of create WF.
for (var key of aggregatedAllocationData.get("0").keys) {
    result.put(key, aggregatedAllocationData.get("0").get(key));
}

return result;

function getInstanceAllocationData(index) {
    var errors = new Properties();

    for (var reservation of reservations) {
        // Used to pass filter/allocate data between different filter/allocate methods/steps.
        var reservationContext = new Properties();

        reservationContext.reservation = reservation;

        var reservationId = reservation.get(RESERVATION_ID_KEY);
        var reservationExtensionData = reservation.extensionData;

        reservationContext.reservationExtensionData = reservationExtensionData;

        var subscriptionId = reservationExtensionData.get(RESERVATION_SUBSCRIPTION_ID_KEY);
        var connection = com.vmware.vra.endpoint.azure.getConnectionBySubscriptionId(subscriptionId);
        if (connection == null) {
            errors.put(reservationId, "Endpoint with subscription id " + subscriptionId + " is not present in the system");
            continue;
        }
        reservationContext.subscriptionId = subscriptionId;
        reservationContext.connection = connection;

        System.log("===============================================");
        System.log("=== Reservation: " + reservationId + " : " + connection.displayName);
        System.log("===============================================");

        // first check if a location is found for the reservation
        var locationData = filterByLocation(reservationContext);
        if (locationData[ERROR_KEY]) {
            errors.put(reservationId, locationData[ERROR_KEY]);
            continue;
        }
        reservationContext.location = locationData[INSTANCE_KEY];

        // TODO: return all possible RGs not just the first one.
        var resourceGroupData = filterByResourceGroup(reservationContext);
        if (resourceGroupData[ERROR_KEY]) {
            errors.put(reservationId, resourceGroupData[ERROR_KEY]);
            continue;
        }
        reservationContext.resourceGroup = resourceGroupData[INSTANCE_KEY];

        // TODO: if AS is not found in currently allocated RG try with NEXT possible RG.
        var availabilitySetData = filterByAvailabilitySet(connection, resourceGroupData[INSTANCE_KEY]);
        if (availabilitySetData[ERROR_KEY]) {
            errors.put(reservationId, availabilitySetData[ERROR_KEY]);
            continue;
        }
        reservationContext.availabilitySet = availabilitySetData[INSTANCE_KEY];

        var loadBalancerData = filterByLoadBalancer(reservationContext);
        if (loadBalancerData[ERROR_KEY]) {
            errors.put(reservationId, loadBalancerData[ERROR_KEY]);
            continue;
        }
        reservationContext.loadBalancerDetails = loadBalancerData[INSTANCE_KEY];

        var nicsData = filterByNICs(reservationContext);
        if (nicsData[ERROR_KEY]) {
            errors.put(reservationId, nicsData[ERROR_KEY]);
            continue;
        }
        reservationContext.nics = nicsData[INSTANCE_KEY];

        var imageSizeData = filterByImageSize(reservationContext);
        if (imageSizeData[ERROR_KEY]) {
            errors.put(reservationId, imageSizeData[ERROR_KEY]);
            continue;
        }
        reservationContext.imageSize = imageSizeData[INSTANCE_KEY];

        var imageData = filterByImage(reservationContext);
        if (imageData[ERROR_KEY]) {
            errors.put(reservationId, imageData[ERROR_KEY]);
            continue;
        }
        reservationContext.image = imageData[INSTANCE_KEY];

        var storageAccountsData = filterStorageAccountsByLocation(reservationContext);
        if (storageAccountsData[ERROR_KEY]) {
            errors.put(reservationId, storageAccountsData[ERROR_KEY]);
            continue;
        }
        reservationContext.storageAccounts = storageAccountsData[INSTANCE_KEY];

        var diagnosticsStorageAccountData = filterByDiagnosticsStorageAccount(reservationContext);
        if (diagnosticsStorageAccountData[ERROR_KEY]) {
            errors.put(reservationId, diagnosticsStorageAccountData[ERROR_KEY]);
            continue;
        }
        reservationContext.diagnosticsStorageAccount = diagnosticsStorageAccountData[INSTANCE_KEY];

        //
        // Storage account related filters {{
        //
        var storageType = requestData.get(WORKFLOW_STORAGE_TYPE_KEY);
        var storageDisksData = null;
        var storageAccountData = null;

        reservationContext.storageType = storageType;
        if (storageType == "Storage Account")
		{

	        storageAccountData = filterByStorageAccount(reservationContext);
	        if (storageAccountData[ERROR_KEY]) {
	            errors.put(reservationId, storageAccountData[ERROR_KEY]);
	            continue;
	        }

	        storageDisksData = filterByStorageDisks(reservationContext);
	        if (storageDisksData[ERROR_KEY]) {
	           errors.put(reservationId, storageDisksData[ERROR_KEY]);
	           continue;
	        }

		} else {
		    var result = new Properties();
		    result.put(INSTANCE_KEY, null);
		    storageAccountData = result;

            var storageDiskPropertiesArray = toStorageDiskPropertiesArray();

            var storageDiskObjects = [];
            var storageDiskResult = new Properties();
		    storageDiskResult.put(INSTANCE_KEY, storageDiskPropertiesArray);
		    storageDisksData = storageDiskResult;

		}

		reservationContext.storageAccount = storageAccountData[INSTANCE_KEY];
		reservationContext.storageDisks = storageDisksData[INSTANCE_KEY];

        // }}

        //------------------------------------------------------------------------------------
        // Filtering is completed.
        // Allocate names for new objects that will be created upon provisioning.
        //------------------------------------------------------------------------------------

        var vmNameData = allocateNewVMName(connection, resourceGroupData[INSTANCE_KEY], index);
        if (vmNameData[ERROR_KEY]) {
            errors.put(reservationId, vmNameData[ERROR_KEY]);
            continue;
        }
        reservationContext.vmName = vmNameData[INSTANCE_KEY];

        // Overwrite previously defined resourceGroupData.
        resourceGroupData = allocateNewResourceGroup(reservationContext);
        if (resourceGroupData[ERROR_KEY]) {
            errors.put(reservationId, resourceGroupData[ERROR_KEY]);
            continue;
        }
        reservationContext.resourceGroup = resourceGroupData[INSTANCE_KEY];

        // overwrite existing availabilityData.
        availabilitySetData = allocateNewAvailabilitySet(reservationContext);
        if (availabilitySetData[ERROR_KEY]) {
            errors.put(reservationId, availabilitySetData[ERROR_KEY]);
            continue;
        }
        reservationContext.availabilitySet = availabilitySetData[INSTANCE_KEY];

        nicsData = allocateNewNICsNames(connection, vmNameData[INSTANCE_KEY], resourceGroupData[INSTANCE_KEY], nicsData[INSTANCE_KEY]);
        if (nicsData[ERROR_KEY]) {
            errors.put(reservationId, nicsData[ERROR_KEY]);
            continue;
        }
        reservationContext.nics = nicsData[INSTANCE_KEY];

        //Reservation Properties
        var customProperties = filterByCustomProperties(reservationContext);
        reservationContext.customProperties = customProperties[INSTANCE_KEY];

        return constructAllocationData(
            subscriptionId,
            locationData[INSTANCE_KEY],
            resourceGroupData[INSTANCE_KEY],
            storageType,
            storageAccountData[INSTANCE_KEY],
            diagnosticsStorageAccountData[INSTANCE_KEY],
            storageDisksData[INSTANCE_KEY],
            loadBalancerData[INSTANCE_KEY],
            nicsData[INSTANCE_KEY],
            vmNameData[INSTANCE_KEY],
            availabilitySetData[INSTANCE_KEY],
            customProperties[INSTANCE_KEY]);
    }

    // No reservation satisfied the last resource allocation.
    throwError(errors);
}

//-------------------------------FUNCTIONS-----------------------------------------------------

// Constructs an allocation result with Location dependant objects (subscription, location, RG)
// and VM dependant objects (name, storage, nets, LB).
function constructAllocationData(
    subscriptionId,
    location,
    resourceGroup,
    storageType,
    storageAccount,
    diagnosticsStorageAccount,
    storageDisksObjects,
    loadBalancerDetails,
    nicObjects,
    vmName,
    availabilitySet,
    customProperties) {

    var allocationData = new Properties();
    allocationData.put(RESERVATION_SUBSCRIPTION_ID_KEY, subscriptionId);
    allocationData.put(WORKFLOW_STORAGE_TYPE_KEY, storageType);
    allocationData.put(WORKFLOW_LOCATION_KEY, (location ? location.name : null));
    allocationData.put(WORKFLOW_RESOURCE_GROUP_NAME_KEY, (resourceGroup ? resourceGroup.name : null));
    allocationData.put(WORKFLOW_STORAGE_ACCOUNT_KEY, (storageAccount ? storageAccount.name : null));
    allocationData.put(WORKFLOW_DIAGNOSTICS_STORAGE_ACCOUNT_KEY, (diagnosticsStorageAccount ? diagnosticsStorageAccount.name : null));
    allocationData.put(WORKFLOW_VM_NAME_KEY, vmName);
    allocationData.put(AVAILABILITY_SET_NAME_KEY, (availabilitySet ? availabilitySet.name : null));
    allocationData.put(RESERVATION_CUSTOM_PROPERTIES_KEY,customProperties);

    appendLoadBalancerDetailsToAllocation(loadBalancerDetails, allocationData);
    appendStorageDisksObjectsToAllocation(storageDisksObjects, allocationData);
    appendNicObjectsToAllocation(nicObjects, allocationData);

    return allocationData;
}

// extractReservation Properties
function filterByCustomProperties(reservationContext) {
    var reservationExtensionData = reservationContext.reservationExtensionData;
    var customProperties = reservationExtensionData.get(RESERVATION_CUSTOM_PROPERTIES_KEY);
    var customPropertiesMap = new Properties();
    for (var customProperty of customProperties) {
        System.log ("[filterByCustomProperties] Reservation custom property - name: " + customProperty.name + " and value: " + customProperty.value);
        customPropertiesMap.put(customProperty.name,customProperty.value);
    }
    var result = new Properties();
    result.put(INSTANCE_KEY, customPropertiesMap);
    return result;
}

function appendLoadBalancerDetailsToAllocation(loadBalancerDetails, allocationData) {
    allocationData.put(WORKFLOW_LOADBALANCER_NAME_KEY, loadBalancerDetails.loadBalancer ? loadBalancerDetails.loadBalancer.name : null);
    allocationData.put(WORKFLOW_LOADBALANCER_BAP_NAME_KEY, loadBalancerDetails.backendAddressPool ? loadBalancerDetails.backendAddressPool : null);
    allocationData.put(WORKFLOW_LOADBALANCER_RG_NAME_KEY, loadBalancerDetails.resourceGroup ? loadBalancerDetails.resourceGroup.name : null);
}

// find an applicable location for the reservation
// returns the location from the reservation if the request location is empty
// or returns the location if the reservation and the request location are the same
// or return the location from the request if the reservation location is empty and the location exists in the subscription
// or returns null if the request and reservation location are empty
function filterByLocation(reservationContext) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var reservationExtensionData = reservationContext.reservationExtensionData;
    // }}

    var requestLocation = requestData.get(WORKFLOW_LOCATION_KEY);
    var reservationLocation = reservationExtensionData[RESERVATION_LOCATION_KEY];
    var isResLocEmpty = (reservationLocation == "" || reservationLocation == null);
    var isReqLocEmpty = (requestLocation == "" || requestLocation == null);

    var foundLocationName = null;

    //the location is taken from the reservation if the request location is empty
    if (!isResLocEmpty && isReqLocEmpty) {
        foundLocationName = reservationLocation;
        //the location is taken if both reservation and the request locations are populated and are the same
    } else if (!isResLocEmpty && !isReqLocEmpty && reservationLocation.toLowerCase() == requestLocation.toLowerCase()) {
        foundLocationName = requestLocation;
        //the location is taken from the request if the reservation location is empty and the location exists in the subscription
    } else if (isResLocEmpty && !isReqLocEmpty) {
        foundLocationName = requestLocation;
    } else { // BOTH locations are empty
        foundLocationName = null;
    }

    /*
    var foundLocation = (foundLocationName == null)
        ? null
        : connection.getLocationByName(foundLocationName); */

    var foundLocation = (foundLocationName == null)
        ? null
        : AzureRegionManager.getRegionByConnectionAndName(connection, foundLocationName);

    var result = new Properties();
    if (foundLocation != null) {
        result.put(INSTANCE_KEY, foundLocation);
    } else {
        if (foundLocationName == null) {
            result.put(ERROR_KEY, filterByLocationCriteria());
        } else {
            result.put(ERROR_KEY, "No location with name " + foundLocationName + " found for the selected subscription.");
        }
    }
    return result;
}

function filterByLocationCriteria() {
    var requestLocation = requestData.get(WORKFLOW_LOCATION_KEY);
    return "Location EQ " + requestLocation;
}

// returns true if the resource group exists in the subscription
// or when the resource group is not required in the subscription
// return false otherwise
function filterByResourceGroup(reservationContext) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var reservationExtensionData = reservationContext.reservationExtensionData;
    var location = reservationContext.location;
    // }}

    var result = new Properties();

    // Get RGs specified in Reservation and Sort them by priority
    var reservationRGs = reservationExtensionData.get(RESERVATION_RESOURCE_GROUPS_KEY);
    if (reservationRGs) {
        reservationRGs.sort(function(a, b) {
            return compare(a, b, "priority");
        });
        for (var reservationRG of reservationRGs) {
            System.log("[filterByResourceGroup] reservationRG: name = '" + reservationRG.name + "'; priority = " + reservationRG.priority);
        }
    } else {
        System.log("[filterByResourceGroup] reservationRGs: EMPTY");
    }

    // Create new RG is requested in the request -> return null here.
    // See allocateNewResourceGroup for actual allocation.
    if (requestData.get(RESOURCE_GROUP_CREATION_TYPE) == RESOURCE_GROUP_CREATION_TYPE_NEW) {

        storeResourceGroupsSorted(reservationContext, reservationRGs, null /* resourceGroup */);

        result.put(INSTANCE_KEY, null);
        System.log("[filterByResourceGroup] NEW resource group is requested. No resource group can be allocated at this moment.");
        return result;
    }

    // Get RG name specified in request
    var rgName = requestData.get(WORKFLOW_RESOURCE_GROUP_NAME_KEY);
    // Resolved Azure RG
    var resourceGroup = null;
    if (rgName != null && rgName != "") {
        System.log("[filterByResourceGroup] Resource group name is specified in the request: " + rgName);
        if (reservationRGs == null || reservationRGs.length == 0) {
            System.log("[filterByResourceGroup] Resource groups are not specified in Reservation: pick RG by name from Subscription.");
            resourceGroup = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, rgName);
        } else {
            System.log("[filterByResourceGroup] " + (reservationRGs.length) + " Resource groups are specified in Reservation: pick RG by name from Reservation and Subscription.");
            for (var reservationRG of reservationRGs) {
                if (rgName.toLowerCase() == reservationRG.name.toLowerCase()) {
                    resourceGroup = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, rgName);
                    break;
                }
            }
        }
    } else {
        System.log("[filterByResourceGroup] Resource group name is not specified in the request.");
        if (reservationRGs == null || reservationRGs.length == 0) {
            System.log("[filterByResourceGroup] Resource groups are not specified in Reservation: pick first RG from Subscription.");
            var connectionRGs = AzureResourceGroupManager.getResourceGroupByConnection(connection);
            if (connectionRGs != null && connectionRGs.length > 0) {
                resourceGroup = connectionRGs[0];
            }
        } else {
            System.log("[filterByResourceGroup] " + (reservationRGs.length) + " Resource groups are specified in Reservation: pick first RG from Reservation and Subscription.");
            for (var reservationRG of reservationRGs) {
                resourceGroup = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, reservationRG.name);
                if (resourceGroup != null) {
                    break;
                }
            }
        }
    }

    // Check if the picked ResourceGroup resides in the correct location.
    if (resourceGroup && resourceGroup.regionName.toLowerCase() != location.name.toLowerCase()) {
        System.warn("[filterByResourceGroup] The resolved ResourceGroup matches by name, but mismatch by location. Check your configuration so that the location for the selected ResourceGroup defined in the Reservation/Request is the same as the location defined in the Reservation/Request.");
        resourceGroup = null;
    }

    if (resourceGroup == null) {
        result.put(ERROR_KEY, filterByResourceGroupCriteria());
    } else {
        storeResourceGroupsSorted(reservationContext, reservationRGs, resourceGroup);

        result.put(INSTANCE_KEY, resourceGroup);
        System.log("[filterByResourceGroup] SUCCESS: " + resourceGroup.name);
    }
    return result;
}

function allocateNewVMName(connection, resourceGroup, index) {
    var vmName = requestData.get(WORKFLOW_VM_NAME_KEY);
    var machinePrefix = requestData.get(MACHINE_PREFIX_KEY);
    var WORKFLOW_VM_CUSTOM_HOST_NAME_KEY = "Azure.VirtualMachine.Instance" + index + ".Name";
    var vmHostName = requestData.get(WORKFLOW_VM_CUSTOM_HOST_NAME_KEY);

    var result = new Properties();

    var numberOfDigits = null;
    var lowestNumber = null;
    if (vmName != null && vmName.length > 0) {
        // VM name is comming from the request -> use this machine name.
        result.put(INSTANCE_KEY, vmName);
        System.log("[allocateNewVMName] Use VM name provided in the request: " + vmName);
        return result;
    } else if (vmHostName != null && vmHostName.length > 0) {
        result.put(INSTANCE_KEY, vmHostName);
        System.log("[allocateNewVMName] Use VM name provided in the request: " + vmHostName);
        return result;
    } else if (requestData.get(MACHINE_PREFIX_TYPE_KEY).toLowerCase() == MACHINE_PREFIX_TYPE_CUSTOM.toLowerCase()) {
        // custom machine prefix comes from the request -> generate machine name from it.
        if (machinePrefix == null || machinePrefix == "") {
            throw "Custom machine prefix is empty.";
        }
    } else {
        // Use the machine prefix from the business group data.
        var machinePrefixData = getMachinePrefix();
        machinePrefix = machinePrefixData.name;
        numberOfDigits = machinePrefixData.numberOfDigits;
        lowestNumber = machinePrefixData.nextNumber;
    }

    var generateMachineNameWorkflow = Server.findForType("Workflow", GENERATE_VM_NAME_WORKFLOW_ID);

    var inputProperties = new Properties();
    inputProperties.put("connection", connection);
    inputProperties.put("resourceGroupName", resourceGroup != null ? resourceGroup.name : null);
    inputProperties.put("machineNamingFormat", machinePrefix);
    inputProperties.put("numberOfDigits", numberOfDigits);
    inputProperties.put("lowestNumber", lowestNumber);

    var workflowToken = generateMachineNameWorkflow.execute(inputProperties);

    do {
        System.log("[allocateNewVMName] Sleeping 5 secs while Generate Azure Machine Name workflow is executing. Workflow state: " + workflowToken.state);
        System.sleep(5000);
    } while (workflowToken.state == "running")

    System.log("[allocateNewVMName] Generate Machine Name Workflow completed with state: " + workflowToken.state);

    if (workflowToken.state == "completed") {
        var output = workflowToken.getOutputParameters();
        var machineName = output.get("machineName");

        result.put(INSTANCE_KEY, machineName);
        System.log("[allocateNewVMName] Generated VM name : " + machineName);
    } else {
        result.put(ERROR_KEY, "Unable to find available machine name");
    }

    return result;
}

function filterByResourceGroupCriteria() {
    var rgName = requestData.get(WORKFLOW_RESOURCE_GROUP_NAME_KEY);
    return "ResourceGroup EQ " + rgName;
}

// compare function used in sorting arrays.
// 'key' is the NUMERIC property that is used as compare criteria.
// null values come LAST.
function compare(a, b, key) {
    if (a[key] == b[key]) {
        return 0;
    }
    if (a[key] == null) {
        // null value comes last, i.e. 'b < a'
        return 1;
    }
    if (b[key] == null) {
        // null value comes last, i.e. 'a < b'
        return -1;
    }
    return a[key] - b[key];
}

// Compare function used in sorting arrays based on ordering of another array.
// - 'key' is the STRING property that is used as compare criteria.
// - 'specificOrder' is an array of strings that predefines the ordering.
// Values without specific order come LAST.
function compareSpecificOrder(a, b, key, specificOrder) {

    var predefinedOrder_a = specificOrder.indexOf(key ? a[key] : a);
    predefinedOrder_a = (predefinedOrder_a == -1) ? Number.MAX_VALUE : predefinedOrder_a;

    var predefinedOrder_b = specificOrder.indexOf(key ? b[key] : b);
    predefinedOrder_b = (predefinedOrder_b == -1) ? Number.MAX_VALUE : predefinedOrder_b;

    return predefinedOrder_a - predefinedOrder_b;
}

// Sort RGs from subscription based on predefined order of allocated RG and RGs from reservation
// and store them in reservationContext under 'connectionRGs' properyt.
// NOTE: any code that needs access to connection.resourceGroups MUST use sorted list.
function storeResourceGroupsSorted(reservationContext, reservationRGs, allocatedRG) {

    var orderedRGsNames = [];

    if (reservationRGs) {
        // Get the names of ordered RGs from reservation.
        orderedRGsNames = reservationRGs.map(function(reservationRG) {
            return reservationRG.name;
        });

        // If RG is already allocated then use it with highest priority.
        if (allocatedRG) {
            orderedRGsNames.sort(function(a, b) {
                return compareSpecificOrder(a, b, null, [ allocatedRG.name ]);
            });
        }
    } else {
        // Even if reservation RGs are not specified use allocated RG with highest priority.
        if (allocatedRG) {
            orderedRGsNames = [ allocatedRG.name ];
        }
    }

    // Get RGs from connection.
    var connectionRGs = AzureResourceGroupManager.getResourceGroupByConnection(reservationContext.connection);

    if (orderedRGsNames.length > 0) {
        // Clone original array with RGs.
        connectionRGs = connectionRGs.slice(0);

        // TODO: Replace with sorting algorithm finding first K elements in N-element array
        System.log("[getResourceGroupsSorted] Sort connection RGs according to: " + orderedRGsNames);
        connectionRGs.sort(function(a, b) {
            return compareSpecificOrder(a, b, "name", orderedRGsNames);
        });
    }

    // Store sorted list of RG from connection.
    reservationContext.connectionRGs = connectionRGs;
}

function filterByLoadBalancer(reservationContext) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var reservationExtensionData = reservationContext.reservationExtensionData;
    var location = reservationContext.location;
    // }}

    // Get all LBs specified in Reservation
    var reservationLBs = reservationExtensionData.get(RESERVATION_LOAD_BALANCERS_KEY);
    if (reservationLBs) {
        reservationLBs.sort(function(a, b) {
            return compare(a, b, "priority");
        });
        for (var reservationLB of reservationLBs) {
            System.log("[filterByLoadBalancer] reservationLB: name = '" + reservationLB.name + "'; backendPool = '" + reservationLB.backendPool + "'; priority = " + reservationLB.priority);
        }
    } else {
        System.log("[filterByLoadBalancer] reservationLBs: EMPTY");
    }

    // Get LB name and BAP name specified in request
    var loadBalancerName = requestData.get(WORKFLOW_LOADBALANCER_NAME_KEY);
    var backendAddressPoolName = requestData.get(WORKFLOW_LOADBALANCER_BAP_NAME_KEY);

    var lbBapFinder = {

        loadBalancer: null,
        backendAddressPool: null,
        resourceGroup: null,

        find: function(resourceGroup) {

            if (this.isFound()) {
                // LB-BAP pair is already resolved
                return;
            }

            // loadBalancerName != null && loadBalancerName != ""
            System.log("[filterByLoadBalancer] LB name is specified in the request: " + loadBalancerName);
            if (reservationLBs == null || reservationLBs.length == 0) {
                System.log("[filterByLoadBalancer] LBs are not specified in Reservation: pick LB by '" + loadBalancerName + "' name from Subscription.");
                this.loadBalancer = this.filterLoadBalancerByLocationInternal(
                    AzureLoadBalancerManager.getLoadBalancerByResourceGroupAndName(resourceGroup, loadBalancerName)
                );
                this.findBackendAddressPoolInternal(resourceGroup, null);
            } else {
                System.log("[filterByLoadBalancer] " + (reservationLBs.length) + " LBs are specified in Reservation: pick LB by '" + loadBalancerName + "' name from Reservation and Subscription.");
                var rIndex = 0;
                for (var reservationLB of reservationLBs) {
                    // LB from request matches LB from reservation
                    if (reservationLB.name != null &&
                        reservationLB.name.toLowerCase() == loadBalancerName.toLowerCase()) {

                        this.loadBalancer = this.filterLoadBalancerByLocationInternal(
                            AzureLoadBalancerManager.getLoadBalancerByResourceGroupAndName(resourceGroup, loadBalancerName)
                        );
                        if (this.findBackendAddressPoolInternal(resourceGroup, reservationLB) != null) {
                            System.log("[filterByLoadBalancer] " + (reservationLBs.length) + " LBs are specified in Reservation: pick Reservation #" + rIndex + ".");
                            break;
                        }
                    }
                    rIndex++;
                }
            }
        },

        findBackendAddressPoolInternal: function(resourceGroup, reservationLB) {
            if (this.loadBalancer == null) {
                return null;
            }

            if (backendAddressPoolName != null && backendAddressPoolName != "") {
                System.log("[filterByLoadBalancer] BAP name is specified in the request: " + backendAddressPoolName);
                if (reservationLB == null || reservationLB.backendPool == null || reservationLB.backendPool == "") {
                    System.log("[filterByLoadBalancer] BAP name is NOT specified in Reservation: pick BAP by '" + backendAddressPoolName + "' name from Subscription.");
                    this.backendAddressPool = this.findBackendAddressPoolByNameInternal(backendAddressPoolName);
                } else {
                    System.log("[filterByLoadBalancer] BAP name is specified in Reservation: pick BAP by '" + backendAddressPoolName + "' name from Reservation and Subscription.");
                    if (backendAddressPoolName.toLowerCase() == reservationLB.backendPool.toLowerCase()) {
                        this.backendAddressPool = this.findBackendAddressPoolByNameInternal(backendAddressPoolName);
                    }
                }
            } else {
                System.log("[filterByLoadBalancer] BAP name is NOT specified in the request.");
                if (reservationLB == null || reservationLB.backendPool == null || reservationLB.backendPool == "") {
                    System.log("[filterByLoadBalancer] BAP name is NOT specified in Reservation: pick first BAP from LB.");
                    var baps = this.loadBalancer.backendAddressPools;
                    if (baps != null && baps.length > 0) {
                        this.backendAddressPool = baps[0];
                    }
                } else {
                    System.log("[filterByLoadBalancer] BAP name is specified in Reservation: pick BAP by '" + reservationLB.backendPool + "' name from Reservation and Subscription.");
                    this.backendAddressPool = this.findBackendAddressPoolByNameInternal(reservationLB.backendPool);
                }
            }

            if (this.backendAddressPool != null) {
                this.resourceGroup = resourceGroup;
                System.log("[filterByLoadBalancer] SUCCESS: found '" + this.loadBalancer.name + "' LB and '" + this.backendAddressPool + "' BAP within '" + this.resourceGroup.name + "' RG.");
            }

            return this.backendAddressPool;
        },

        findBackendAddressPoolByNameInternal: function(bapName) {
            var backendAddressPools = AzureLoadBalancerManager.getLoadBalancerBackendPool(this.loadBalancer);
            for (var bap of backendAddressPools) {
                if (bap.toLowerCase() == bapName.toLowerCase()) {
                    return bap;
                }
            }
            return null;
        },

        filterLoadBalancerByLocationInternal: function(loadBalancer) {
            return (loadBalancer != null && loadBalancer.region.toLowerCase() == location.name.toLowerCase()) ? loadBalancer : null;
        },

        isFound: function() {
            if (loadBalancerName == null || loadBalancerName == "") {
                // loadBalancerName name is NOT specified at all in request
                return true;
            }
            return this.backendAddressPool != null;
        },

        getLoadBalancer: function() {
            return this.loadBalancer;
        },

        getBackendAddressPool: function() {
            return this.backendAddressPool;
        },

        getResourceGroup: function() {
            return this.resourceGroup;
        }
    };

    // Iterate all RGs trying to find LB-BAP pair
    for (var i = 0; i < reservationContext.connectionRGs.length && !lbBapFinder.isFound(); i++) {
        var rgContext = reservationContext.connectionRGs[i];
        System.log("[filterByLoadBalancer] ::: Traversing RG '" + rgContext.name + "' in '" + connection.displayName + "'");

        lbBapFinder.find(rgContext);
    }

    var lbBapAllocation = new Properties();
    if (lbBapFinder.isFound()) {
        lbBapAllocation.put(INSTANCE_KEY, {
            "loadBalancer": lbBapFinder.getLoadBalancer(),
            "backendAddressPool": lbBapFinder.getBackendAddressPool(),
            "resourceGroup": lbBapFinder.getResourceGroup()
        });
    } else {
        lbBapAllocation.put(ERROR_KEY, filterByLoadBalancerCriteria());
        System.log("[filterByLoadBalancer] FAILED");
    }
    return lbBapAllocation;
}

function filterByLoadBalancerCriteria() {
    var lbName = requestData.get(WORKFLOW_LOADBALANCER_NAME_KEY);
    var bapName = requestData.get(WORKFLOW_LOADBALANCER_BAP_NAME_KEY);
    return "LoadBalancer name EQ " + lbName + " and BackendAddressPool name EQ " + bapName;
}

// returns true if the image size exists in the given location
// return false otherwise
function filterByImageSize(reservationContext) {

    // Extract required props from current reservation context. {{
    var location = reservationContext.location;
    // }}

    var imageSizeName = requestData.get(WORKFLOW_IMAGE_SIZE_KEY);

    var imageSize = AzureVirtualMachineManager.getAzureVMSizeByRegionAndSizeName(location.name, imageSizeName, reservationContext.connection);

    var result = new Properties();
    if (imageSize != null) {
        result.put(INSTANCE_KEY, imageSize);
    } else {
        result.put(ERROR_KEY, filterByImageSizeCriteria());
    }
    return result;
}

function filterByImageSizeCriteria() {
    var imageSizeName = requestData.get(WORKFLOW_IMAGE_SIZE_KEY);
    return "ImageSize EQ " + imageSizeName;
}

// returns true if the image exists in the given subscription and location
// return false otherwise
function filterByImage(reservationContext) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var location = reservationContext.location;
    // }}

    var imageType = requestData.get(WORKFLOW_IMAGE_TYPE_KEY);
    var imageURN = requestData.get(WORKFLOW_IMAGE_URN_KEY);

    if (imageType == null || imageType == "") {
        imageType = IMAGE_TYPE_STOCK;
        System.log("VM image URN type provided is empty, defaulting to " + IMAGE_TYPE_STOCK);
    }

    if (imageURN == null) {
        throw "VM image URN of type '" + imageType + "' should comply to '" + (imageType == IMAGE_TYPE_STOCK ? IMAGE_TYPE_STOCK_FORMAT : IMAGE_TYPE_CUSTOM_FORMAT) + "' format. Passed value is: " + imageURN;
    }

    var image = null;
    if (imageType == IMAGE_TYPE_STOCK) {
        var imagePOSV = imageURN.split(":");
        if (imagePOSV.length != 4) {
            throw "VM image URN of type '" + IMAGE_TYPE_STOCK + "' should comply to '" + IMAGE_TYPE_STOCK_FORMAT + "' format. Passed value is: " + imageURN;
        }

        try {
            image = AzureVirtualMachineManager.getAzureVirtualMachineImage(location, imagePOSV[0].trim(), imagePOSV[1].trim(), imagePOSV[2].trim(), imagePOSV[3].trim());
        } catch (e) {
            //empty catch for safety as azure sdk can trow if resource is not found
        }
    } else if (imageType == IMAGE_TYPE_CUSTOM) {
        if (isManagedDisk()) {
           var imagePOSV = imageURN.split(":");
           if (imagePOSV.length != 2) {
              throw "Custom VM image URN should comply to 'resourceGroupName:customImageName' format. Passed value is: " + imageURN;
           }

           var imageRg = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, imagePOSV[0].trim());
           image = AzureVirtualMachineManager.getCustomImageByName(imageRg, imagePOSV[1].trim());

        } else {
            var match;
            if (location.name == "chinaeast" || location.name == "chinanorth") {
               match = imageURN.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.chinacloudapi\.cn\/([^\/]+\/)+[^\/]+\.vhd$/i);
               IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.chinacloudapi.cn/<container>/<image>.vhd";
            } else if (location.name == "germanycentral" || location.name == "germanynortheast") {
               match = imageURN.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.cloudapi\.de\/([^\/]+\/)+[^\/]+\.vhd$/i);
               IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.cloudapi.de/<container>/<image>.vhd";
            } else if (location.name == "usgovvirginia" || location.name == "usgovtexas" || location.name == "usgovarizona" || location.name == "usgoviowa" || location.name == "usdodeast" || location.name == "usdodcentral") {
               match = imageURN.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.usgovcloudapi\.net\/([^\/]+\/)+[^\/]+\.vhd$/i);
               IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.usgovcloudapi.net/<container>/<image>.vhd";
            } else {
               match = imageURN.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.windows\.net\/([^\/]+\/)+[^\/]+\.vhd$/i);
            }

            if (!match || match.length == 0) {
                throw "VM image URN of type '" + IMAGE_TYPE_CUSTOM + "' should comply to '" + IMAGE_TYPE_CUSTOM_FORMAT + "'. Passed value is: " + imageURN + " match " + match;
            } else {
                // NOTE: The Custom VM image need to reside in the same storage account as your virtual machine at creation time
                // See http://www.codeisahighway.com/how-to-create-a-virtual-machine-from-a-custom-image-using-an-arm-template
                // Use the storageaccount of the Custom image as additional filter with highest precedence to filterByStorageAccount
                var storageAccount = match[3];
                reservationContext.put(FILTER_STORAGE_ACCOUNT_KEY, storageAccount);

                image = imageURN;
            }
        }
    } else {
        throw "Supported VM image URN types are '" + IMAGE_TYPE_STOCK + "' and '" + IMAGE_TYPE_CUSTOM + "'. Passed value: '" + imageType + "' is not supported.";
    }

    var result = new Properties();
    if (image == null) {
        result.put(ERROR_KEY, filterByImageCriteria());
    } else {
        result.put(INSTANCE_KEY, image);
    }
    return result;
}

function filterByImageCriteria() {
    var imageURN = requestData.get(WORKFLOW_IMAGE_URN_KEY);

    return "Image EQ " + imageURN;
}

function isManagedDisk() {
    var storageType = requestData.get(WORKFLOW_STORAGE_TYPE_KEY);
    if (storageType == "Managed Disk") {
       return true;
    } else {
       return false;
    }
}

function filterStorageAccountsByLocation(reservationContext) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var location = reservationContext.location;
    // }}

    var storageAccounts = [];
    var storageAccountList = AzureStorageManager.listAllStorageAccount(connection)
    if (storageAccountList) {
        for (var connectionSA of storageAccountList) {
            if (connectionSA.region.toLowerCase() == location.name.toLowerCase()) {
                storageAccounts.push(connectionSA);
                System.log("[filterStorageAccountsByLocation] SA in selected Subscription and location '" + location.name + "': " + connectionSA.name);
            }
        }
    }

    var result = new Properties();
    if (storageAccounts.length > 0) {
        result.put(INSTANCE_KEY, storageAccounts);
    } else {
        result.put(ERROR_KEY, "There are no Storage Accounts in the selected subscription and location '" + location.name + "'.");
    }
    return result;
}

// returns true if the storage account exists in the reservation
// or if the storage account exists in the Subscription
// in case no storage account name is provided in the request
// returns true if there is at least one storage account in the reservation
// or at least one storage account in the subscription
// return false otherwise
function filterByStorageAccount(reservationContext) {

    // Extract required props from current reservation context. {{
    var reservationExtensionData = reservationContext.reservationExtensionData;
    var storageAccounts = reservationContext.storageAccounts;
    // }}

    // Get SAs specified in Reservation and Sort them by priority
    var reservationSAs = reservationExtensionData.get(RESERVATION_STORAGE_ACCOUNTS_KEY);
    if (reservationSAs) {
        reservationSAs.sort(function(a, b) {
            return compare(a, b, "priority");
        });
        for (var reservationSA of reservationSAs) {
            System.log("[filterByStorageAccount] reservationSA: name = '" + reservationSA.name + "'; priority = " + reservationSA.priority);
        }
    } else {
        System.log("[filterByStorageAccount] reservationSAs: EMPTY");
    }

    var saName = reservationContext.get(FILTER_STORAGE_ACCOUNT_KEY);
    saName = saName != null ? saName : requestData.get(WORKFLOW_STORAGE_ACCOUNT_KEY);

    var storageAccount = null;

    if (saName != null && saName != "") {
        System.log("[filterByStorageAccount] Storage account name is specified in the request: " + saName);
        if (reservationSAs == null || reservationSAs.length == 0) {
            System.log("[filterByStorageAccount] Storage accounts are not specified in Reservation: pick SA by '" + saName + "' name from Subscription.");
            for (var connectionSA of storageAccounts) {
                if (connectionSA.name.toLowerCase() == saName.toLowerCase()) {
                    storageAccount = connectionSA;
                    break;
                }
            }
        } else {
            System.log("[filterByStorageAccount] " + (reservationSAs.length) + " Storage accounts are specified in Reservation: pick SA by '" + saName + "' name from Reservation and Subscription.");
            var rIndex = 0;
            for (var reservationSA of reservationSAs) {
                if (reservationSA.name != null && (reservationSA.name.toLowerCase() == saName.toLowerCase())) {
                    for (var connectionSA of storageAccounts) {
                        if (connectionSA.name.toLowerCase() == saName.toLowerCase()) {
                            storageAccount = connectionSA;
                            break;
                        }
                    }
                }
                if (storageAccount != null) {
                    System.log("[filterByStorageAccount] " + (reservationSAs.length) + " Storage accounts are specified in Reservation: pick Reservation #" + rIndex + ".");
                    break;
                }
                rIndex++;
            }
        }
    } else {
        System.log("[filterByStorageAccount] Storage account name is not specified in the request.");
        if (reservationSAs == null || reservationSAs.length == 0) {
            if (storageAccounts.length > 0) {
                System.log("[filterByStorageAccount] Storage accounts are not specified in Reservation: pick first SA from Subscription.");
                storageAccount = storageAccounts[0];
            } else {
                System.log("[filterByStorageAccount] There are no Storage accounts in Subscription.");
            }
        } else {
            System.log("[filterByStorageAccount] " + (reservationSAs.length) + " Storage accounts are specified in Reservation: pick first SA from Reservation and Subscription.");
            var rIndex = 0;
            for (var reservationSA of reservationSAs) {
                if (reservationSA.name == null) {
                    continue;
                }
                for (var connectionSA of storageAccounts) {
                    if (connectionSA.name.toLowerCase() == reservationSA.name.toLowerCase()) {
                        storageAccount = connectionSA;
                        break;
                    }
                }
                if (storageAccount != null) {
                    System.log("[filterByStorageAccount] " + (reservationSAs.length) + " Storage accounts are specified in Reservation: pick Reservation #" + rIndex + ".");
                    break;
                }
                rIndex++;
            }
        }
    }

    var result = new Properties();
    if (storageAccount == null) {
        result.put(ERROR_KEY, filterByStorageAccountCriteria());
    } else {
        result.put(INSTANCE_KEY, storageAccount);
        System.log("[filterByStorageAccount] SUCCESS: " + storageAccount.name);
    }
    return result;
}

function filterByStorageAccountCriteria() {
    var saName = requestData.get(WORKFLOW_STORAGE_ACCOUNT_KEY);
    return "StorageAccount EQ " + saName;
}

// returns true if the diagnostics storage account exists in the subscription
// in case no diagnostics storage account provided in the request
// returns true in case at least one storage account exists for the subscription
// return false otherwise
function filterByDiagnosticsStorageAccount(reservationContext) {

    // Extract required props from current reservation context. {{
    var storageAccounts = reservationContext.storageAccounts;
    // }}

    var result = new Properties();

    var dStorageAccountEnabled = requestData.get(WORKFLOW_DIAGNOSTICS_STORAGE_ACCOUNT_ENABLED_KEY);
    if (dStorageAccountEnabled) {
        // Get SA name specified in request
        var dsaName = requestData.get(WORKFLOW_DIAGNOSTICS_STORAGE_ACCOUNT_KEY);
        // Resolved Azure SA
        var diagnosticsStorageAccount = null;
        // SAs from Subscription
        var diagnosticsSAs = storageAccounts;
        if (diagnosticsSAs != null && diagnosticsSAs.length != 0) {
            System.log("[filterByDiagnosticsStorageAccount] Diagnostics Storage Accounts are specified in Subscription: pick SA from Subscription.");
            if (dsaName != null && dsaName != "") {
                System.log("[filterByDiagnosticsStorageAccount] Diagnostics Storage Account name is specified in the request: " + dsaName + " pick DSA by Name");
                for (var saObj of diagnosticsSAs) {
                    if (saObj.name.toLowerCase() == dsaName.toLowerCase()) {
                        diagnosticsStorageAccount = saObj;
                        break;
                    }
                }
            } else {
                System.log("[filterByDiagnosticsStorageAccount] Diagnostics Storage Account name is NOT specified in the request: pick first SA");
                diagnosticsStorageAccount = diagnosticsSAs[0];
            }
        } else {
            System.log("[filterByDiagnosticsStorageAccount] There are no available SAs in Subscription");
        }
        if (diagnosticsStorageAccount == null) {
            result.put(ERROR_KEY, filterByDiagnosticsStorageAccountCriteria());
        } else {
            result.put(INSTANCE_KEY, diagnosticsStorageAccount);
            System.log("[filterByDiagnosticsStorageAccount] SUCCESS: " + diagnosticsStorageAccount.name);
        }
    } else {
        result.put(INSTANCE_KEY, null);
        System.log("[filterByDiagnosticsStorageAccount] Diagnostics storage account is not enabled.");
    }

    return result;
}

function filterByDiagnosticsStorageAccountCriteria() {
    var dsaName = requestData.get(WORKFLOW_DIAGNOSTICS_STORAGE_ACCOUNT_KEY);
    return "DiagnosticsStorageAccount EQ " + dsaName;
}

function filterByAvailabilitySet(connection, resourceGroup) {
    // Note: Azure mandates that the availability set is in the same resource group as the VM.
    var result = new Properties();

    var creationType = requestData.get(AVAILABILITY_SET_CREATION_TYPE);
    if (creationType == null) {
        creationType = AVAILABILITY_SET_CREATION_TYPE_NONE;
    }
    System.log("[filterByAvailabilitySet] Availability set creation type is '" + creationType + "'.");

    var name = requestData.get(AVAILABILITY_SET_NAME_KEY);

    if (creationType == AVAILABILITY_SET_CREATION_TYPE_NONE) {
        // Availability set not needed.
        result.put(INSTANCE_KEY, null);
    } else if (creationType == AVAILABILITY_SET_CREATION_TYPE_NEW) {
        // Availability set will be created later on.
        result.put(INSTANCE_KEY, null);
    } else if (creationType == AVAILABILITY_SET_CREATION_TYPE_EXISTING) {
        if (resourceGroup != null && name != null) {
            // Validate that availability set exists in the resource group.
            var availabilitySet = AzureAvailabilitySetManager.getAvailabilitySetByResourceGroupAndName(resourceGroup,name);
            if (availabilitySet != null) {
                System.log("[filterByAvailabilitySet] SUCCES: Found the expected existing availability set with name '" + name +
                    "' in resourceGroup '" + resourceGroup.name + "' in connection '" + connection.displayName + "'.");
                result.put(INSTANCE_KEY, availabilitySet);
            } else {
                result.put(ERROR_KEY, "Unable to find the requested availability set '" + name + "' in connection '" + connection.displayName + "'.");
            }
        } else if (resourceGroup != null && name == null) {
            result.put(ERROR_KEY, "Availability set name is mandatory when requesting existing availability set.");
        } else {
            result.put(ERROR_KEY, "Resource group is new. Cannot use existing availability set");
        }
    }
    return result;
}

function filterByStorageDisks(reservationContext) {

    // Extract required props from current reservation context. {{
    var reservationExtensionData = reservationContext.reservationExtensionData;
    // }}

    // Array of AzureVmStorageDisk composite type(represented as Properties)
    var storageDiskPropertiesArray = toStorageDiskPropertiesArray();
    // Array of StorageDiskObject
    var storageDiskObjects = [];

    // Get all Networks specified in Reservation
    var reservationSAs = reservationExtensionData.get(RESERVATION_STORAGE_ACCOUNTS_KEY);
    if (reservationSAs) {
        reservationSAs.sort(function(a, b) {
            return compare(a, b, "priority");
        });
        for (var reservationSA of reservationSAs) {
            System.log("[filterByStorageDisks] reservationSA: name = '" + reservationSA.name + "'; priority = " + reservationSA.priority);
        }
    } else {
        System.log("[filterByStorageDisks] reservationSAs: EMPTY");
    }

    var result = new Properties();

    for (var storageDiskProperties of storageDiskPropertiesArray) {
        var storageDiskData = filterByStorageDisk(reservationContext, reservationSAs, storageDiskProperties);
        if (storageDiskData[INSTANCE_KEY]) {
            storageDiskObjects.push(storageDiskData[INSTANCE_KEY]);
        } else {
            // Fail fast on first storage disk!
            result.put(ERROR_KEY, filterByStorageDisksCriteria());
            return result;
        }
    }
    result.put(INSTANCE_KEY, storageDiskObjects);
    return result;
}

function filterByStorageDisksCriteria() {
    // Array of AzureVmStorageDisk composite type(represented as Properties)
    var storageDiskPropertiesArray = toStorageDiskPropertiesArray();
    if (!storageDiskPropertiesArray || storageDiskPropertiesArray.length == 0) {
        return "StorageDisks EQ null";
    }
    var result = [];
    for (var i in storageDiskPropertiesArray) {
        result.push("StorageDisk" + i + " EQ " + storageDiskPropertiesArray[i].storageDiskName);
    }
    return result.join(" AND ");
}


// Return:
//  {INSTANCE_KEY, AzureVmDataDisk} on success
//  {ERROR_KEY, null} on failure
function filterByStorageDisk(reservationContext, reservationSAs, storageDiskProperties) {

    // Extract required props from current reservation context. {{
    var storageAccounts = reservationContext.storageAccounts;
    // }}

    var storageAccountFinder = {

        storageAccount: null,

        find: function() {
            var saName = storageDiskProperties.storageStorageAccount;
            if (saName != null && saName != "") {
                System.log("[filterByStorageDisk] Storage account name IS specified in the request: " + saName);
                if (reservationSAs == null || reservationSAs.length == 0) {
                    System.log("[filterByStorageDisk] Storage Accounts are not specified in Reservation: pick Storage Account by name from Subscription.");
                    this.storageAccount = this.findSAByNameInternal(storageAccounts, saName);
                } else {
                    System.log("[filterByStorageDisk] " + (reservationSAs.length) + " Storage Accounts are specified in Reservation: pick Storage Account by name from Reservation and Subscription.");
                    for (var reservationSA of reservationSAs) {
                        // Storage account from request matches storage account from reservation
                        if (saName.toLowerCase() == reservationSA.name.toLowerCase()) {
                            this.storageAccount = this.findSAByNameInternal(storageAccounts, saName);
                            if (this.storageAccount != null) {
                                break;
                            }
                        }
                    }
                }
            } else {
                System.log("[filterByStorageDisk] Storage account name is NOT specified in the request.");
                if (reservationSAs == null || reservationSAs.length == 0) {
                    System.log("[filterByStorageDisk] Storage accounts are not specified in Reservation: pick storage account from Subscription based SKU.");
                    this.storageAccount = this.findSABySkuInternal(storageAccounts, storageDiskProperties.sku);
                } else {
                    System.log("[filterByStorageDisk] " + (reservationSAs.length) + " Storage accounts are specified in Reservation: pick storage account from Reservation based on SKU.");
                    for (var reservationSA of reservationSAs) {
                        var tempStorageAccount = this.findSAByNameInternal(storageAccounts, reservationSA.name);
                        if (tempStorageAccount != null && tempStorageAccount.accountType == storageDiskProperties.sku) {
                            this.storageAccount = tempStorageAccount;
                            break;
                        }
                    }
                }
            }

            return this.storageAccount;
        },

        findSAByNameInternal: function(storageAccounts, name) {
            var lowercaseName = name.toLowerCase();
            for (var storageAccount of storageAccounts) {
                if (storageAccount.name.toLowerCase() == lowercaseName) {
                    System.log("[filterByStorageDisk] Found storage account with name '" + name + "'.");
                    return storageAccount;
                }
            }
            System.log("[filterByStorageDisk] Unable to find storage account with name '" + name + "'.");
            return null;
        },

        findSABySkuInternal: function(storageAccounts, sku) {
            for (var storageAccount of storageAccounts) {
                if (storageAccount.accountType == sku) {
                    System.log("[filterByStorageDisk] Found storage account with name '" + storageAccount.name + "' and sku '" + sku + "'.");
                    return storageAccount;
                }
            }
            System.log("[filterByStorageDisk] Unable to find storage account with sku '" + sku + "'.");
            return null;
        }
    };

    var storageAccount = storageAccountFinder.find();
    var storageDiskAllocation = new Properties();
    if (storageAccount != null) {
        storageDiskProperties.storageStorageAccount = storageAccount.name;
        storageDiskAllocation.put(INSTANCE_KEY, storageDiskProperties);
        System.log("[filterByStorageDisk] SUCCESS");
    } else {
        storageDiskAllocation.put(ERROR_KEY, null);
        System.log("[filterByStorageDisk] FAILED");
    }
    return storageDiskAllocation;
}

function allocateNewResourceGroup(reservationContext) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var namePattern = reservationContext.vmName;
    var allocatedResourceGroup = reservationContext.resourceGroup;
    // }}

    var result = new Properties();

    if (requestData.get(RESOURCE_GROUP_CREATION_TYPE) == RESOURCE_GROUP_CREATION_TYPE_EXISTING) {
        // Return as it is.
        result[INSTANCE_KEY] = allocatedResourceGroup;
        return result;
    }

    if (lastAllocatedData) {
        var resourceGroupName = getLastAllocatedDataMap().get(WORKFLOW_RESOURCE_GROUP_NAME_KEY);
        if (!resourceGroupName) {
            throw "Invalid allocation data: '" + WORKFLOW_RESOURCE_GROUP_NAME_KEY + "' is missing.";
        }

        if (getLastAllocatedDataMap().get(IS_NEW_DEPLOYMENT_KEY)) {
            System.log("[allocateNewResourceGroup][createNewDeployment] SUCCESS: previously allocated '" + resourceGroupName + "' RG name in " + connection.displayName);
            result[INSTANCE_KEY] = newAzureResourceGroupInstance(resourceGroupName);
        } else { // scale out existing deployment
            var resourceGroup = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, resourceGroupName);
            if (resourceGroup == null) {
                var msg = "Unable to find already created RG with '" + resourceGroupName + "' name in '" + connection.displayName + "'.";
                System.log("[allocateNewResourceGroup][scaleOutDeployment] FAILED: " + msg);
                result[ERROR_KEY] = msg;
            } else {
                System.log("[allocateNewResourceGroup][scaleOutDeployment] SUCCESS: previously created '" + resourceGroupName + "' RG name in " + connection.displayName);
                result[INSTANCE_KEY] = resourceGroup;
            }
        }
    } else {
        var resourceGroupName = namePattern + "-RG";

        var resourceGroup = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, resourceGroupName);

        if (resourceGroup != null) {
            var msg = "Unable to allocate RG with '" + resourceGroupName + "' name in '" + connection.displayName + "' cause it already exists.";
            System.log("[allocateNewResourceGroup][createNewDeployment] FAILED: " + msg);
            result[ERROR_KEY] = msg;
        } else {
            System.log("[allocateNewResourceGroup][createNewDeployment] SUCCESS: allocated '" + resourceGroupName + "' RG name in " + connection.displayName);
            result[INSTANCE_KEY] = newAzureResourceGroupInstance(resourceGroupName);
        }
    }

    return result;
}

function newAzureResourceGroupInstance(rgName) {
    //var resourceGroup = new AzureResourceGroupExtended();
    var resourceGroup = new AzureResourceGroup();
    resourceGroup.name = rgName;
    return resourceGroup;
}

function throwError(errors) {
    // a more descriptive message is logged in the vRO logs
    var reservationMismatchMessages = [];
    // user friendly message is thrown to the vRA
    var reservationMismatchErrors = [];

    for (var resId of errors.keys) {
        var errorMessage = errors.get(resId);

        reservationMismatchMessages.push("Reservation '" + resId + "' mismatch '(" + errorMessage + ")' sub-criteria");

        for (var reservation of reservations) {
            if (reservation.get(RESERVATION_ID_KEY) == resId) {
                reservationMismatchErrors.push("Reservation '" + reservation.get(RESERVATION_NAME_KEY) + "' mismatch '(" + errorMessage + ")'");
                break;
            }
        }
    }
    var errorMessage = "No reservation matches criteria '(" + [
         filterByLocationCriteria()
         , filterByResourceGroupCriteria()
         , filterByLoadBalancerCriteria()
         , filterByNICsCriteria()
         , filterByImageSizeCriteria()
         , filterByImageCriteria()
         , filterByStorageDisksCriteria()
         , filterByStorageAccountCriteria()
         , filterByDiagnosticsStorageAccountCriteria()].join(") AND (") + ")'." + reservationMismatchMessages.join(";");
    System.error(errorMessage);

    throw reservationMismatchErrors.join("; ");
}

function allocateNewAvailabilitySet(reservationContext) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var namePattern = reservationContext.vmName;
    var resourceGroup = reservationContext.resourceGroup;
    var allocatedAvailabilitySet = reservationContext.availabilitySet;
    // }}

    if (resourceGroup == null) {
        throw "The passed ResourceGroup in 'allocateNewAvailabilitySet' method is null.";
    }

    var result = new Properties();

    if (requestData.get(AVAILABILITY_SET_CREATION_TYPE) != AVAILABILITY_SET_CREATION_TYPE_NEW) {
        // Return as it is.
        result[INSTANCE_KEY] = allocatedAvailabilitySet;
        return result;
    }

    if (lastAllocatedData) {
        var availabilitySetName = getLastAllocatedDataMap().get(AVAILABILITY_SET_NAME_KEY);
        if (!availabilitySetName) {
            throw "Invalid allocation data: '" + AVAILABILITY_SET_NAME_KEY + "' is missing.";
        }

        if (getLastAllocatedDataMap().get(IS_NEW_DEPLOYMENT_KEY)) {
            System.log("[allocateNewAvailabilitySet][createNewDeployment] SUCCESS: previously allocated '" + availabilitySetName + "' AS name in '" + resourceGroup.name + "' resource group.");
            result[INSTANCE_KEY] = newAvailabilitySetInstance(availabilitySetName);
        } else { // scale out existing deployment

            var availabilitySet = AzureAvailabilitySetManager.getAvailabilitySetByResourceGroupAndName(resourceGroup, availabilitySetName);
            if (availabilitySet == null) {
                var msg = "Unable to find already created AS with '" + availabilitySetName + "' name in '" + resourceGroup.name + "' resource group.";
                System.log("[allocateNewAvailabilitySet][scaleOutDeployment] FAILED: " + msg);
                result[ERROR_KEY] = msg;
            } else {
                System.log("[allocateNewAvailabilitySet][scaleOutDeployment] SUCCESS: previously created '" + availabilitySetName + "' AS name in '" + resourceGroup.name + "' resource group.");
                result[INSTANCE_KEY] = availabilitySet;
            }
        }
    } else { // first time provisioning on the very first allocation
        var availabilitySetName = namePattern + "-AvailSet";
        var availabilitySet;

        // If the request contains existing ResourceGroup, check that such AvSet does not exist in it.
        if (requestData.get(RESOURCE_GROUP_CREATION_TYPE) == RESOURCE_GROUP_CREATION_TYPE_EXISTING) {
            var availabilitySet = AzureAvailabilitySetManager.getAvailabilitySetByResourceGroupAndName(resourceGroup, availabilitySetName);

            if (availabilitySet != null) {
                var msg = "Unable to allocate AS with '" + availabilitySetName + "' name in '" + resourceGroup.name + "' resource group cause it already exists.";
                System.log("[allocateNewAvailabilitySet][createNewDeployment] FAILED: " + msg);
                result[ERROR_KEY] = msg;
            } else {
                System.log("[allocateNewAvailabilitySet][createNewDeployment] SUCCESS: allocated '" + availabilitySetName + "' AS name in '" + resourceGroup.name + "' resource group.");
                result[INSTANCE_KEY] = newAvailabilitySetInstance(availabilitySetName);
            }
        } else { // new AvSet in a new ResGroup - the very first allocation
            System.log("[allocateNewAvailabilitySet][createNewDeployment] SUCCESS: allocated '" + availabilitySetName + "' AS name in '" + resourceGroup.name + "' resource group.");
            result[INSTANCE_KEY] = newAvailabilitySetInstance(availabilitySetName);
        }
    }

    return result;
}

function newAvailabilitySetInstance(avSetName) {
    var availabilitySet = new AzureAvailabilitySet();
    availabilitySet.name = avSetName;
    return availabilitySet;
}

function getLastAllocatedDataMap() {
    return lastAllocatedData.get(AGGREGATED_ALLOCATION_DATA_KEY).get(0);
}

// Iterate all NICs trying to resolve thier dependencies through current Subscription.
// Return:
//  {INSTANCE_KEY, Array of NicObject} on success
//  {ERROR_KEY, filterByNICsCriteria()} on failure
function filterByNICs(reservationContext) {
    // Extract required props from current reservation context. {{
    var reservationExtensionData = reservationContext.reservationExtensionData;
    // }}

    // Get vNet-Subnet specified in Reservations
    var reservationNWs = reservationExtensionData.get(RESERVATION_NETWORKS_KEY);
    if (reservationNWs) {
        reservationNWs.sort(function(a, b) {
            return compare(a, b, "priority");
        });
        for (var reservationNW of reservationNWs) {
            System.log("[filterByNICs] reservationNW: vNet = '" + reservationNW.vNet + "'; subnet = '" + reservationNW.subnet + "'; networkProfile = '" + reservationNW.networkProfile + "'; priority = " + reservationNW.priority);
        }
    } else {
        System.log("[filterByNICs] reservationNWs: EMPTY");
    }

    // Get NSG specified in Reservations
    var reservationNSGs = reservationExtensionData.get(RESERVATION_SECURITY_GROUPS_KEY);
    if (reservationNSGs) {
        reservationNSGs.sort(function(a, b) {
            return compare(a, b, "priority");
        });
        for (var reservationNSG of reservationNSGs) {
            System.log("[filterByNICs] reservationNSG: name = '" + reservationNSG.name + "'; priority = " + reservationNSG.priority);
        }
    } else {
        System.log("[filterByNICs] reservationNSGs: EMPTY");
    }

    // Array of AzureVmNic composite type(represented as Properties)
    var nicPropertiesArray = toNicPropertiesArray();
    // Array of NicObject
    var nicObjects = [];

    var result = new Properties();

    var nicIndex = 0;
    for (var nicProperties of nicPropertiesArray) {
        System.log("[filterByNICs] Start filtering of NIC_" + (++nicIndex) + " by " + nicProperties.networkConfigurationType);
        var nicData = filterByNIC(reservationContext, reservationNWs, reservationNSGs, nicProperties, nicIndex);
        if (nicData[INSTANCE_KEY] != null) {
            nicObjects.push(nicData[INSTANCE_KEY]);
        } else {
            // Fail fast on first NIC!
            result.put(ERROR_KEY, filterByNICsCriteria());
            return result;
        }
    }
    result.put(INSTANCE_KEY, nicObjects);
    return result;
}

function filterByNICsCriteria() {
    // Array of AzureVmNic composite type(represented as Properties)
    var nicPropertiesArray = toNicPropertiesArray();
    if (!nicPropertiesArray || nicPropertiesArray.length == 0) {
        return "NicProperties EQ null";
    }
    var result = [];
    for (var i in nicPropertiesArray) {
        result.push("NIC" + i + " EQ " + nicPropertiesArray[i].nicName);
    }
    return result.join(" AND ");
}

// Iterates all RGs trying to find vNet-Subnet pair, public IP and security group as specified by nicProperties.
// Return:
//  {INSTANCE_KEY, NicObject} on success
//  {ERROR_KEY, null} on failure
function filterByNIC(reservationContext, reservationNWs, reservationNSGs, nicProperties, nicIndex) {

    // Extract required props from current reservation context. {{
    var connection = reservationContext.connection;
    var location = reservationContext.location;
    // }}

    var vNetSubnetFinder = {

        vNet: null,
        subnet: null,

        find: function(resourceGroup) {

            if (this.isFound()) {
                // vNet-Subnet pair is already resolved
                return;
            }

            if (nicProperties.networkConfigurationType == NETWORK_CONFIGURATION_TYPE_NETS) {
                this.findByNetworksInternal(resourceGroup);
            } else if (nicProperties.networkConfigurationType == NETWORK_CONFIGURATION_TYPE_NP) {
                this.findByNetworkProfileInternal(resourceGroup);
            }
        },

        // Strategy to resolve vNet-Subnet by vNet-Subnet info from request and reservation
        findByNetworksInternal: function(resourceGroup) {

            if (hasText(nicProperties.vNetName)) {
                System.log("[filterByNIC_" + nicIndex + "] vNet name IS specified in the request: " + nicProperties.vNetName);
                if (reservationNWs == null || reservationNWs.length == 0) {
                    System.log("[filterByNIC_" + nicIndex + "] vNets are not specified in Reservation: pick vNet by name from Subscription.");
                    this.vNet = this.filtervNetByLocationInternal(
                        AzureVirtualNetworkManager.getVirtualNetworkByResourceGroupAndName(resourceGroup, nicProperties.vNetName)
                    );
                    this.findSubnetInternal(resourceGroup, null);
                } else {
                    System.log("[filterByNIC_" + nicIndex + "] " + (reservationNWs.length) + " vNets are specified in Reservation: pick vNet by name from Reservation and Subscription.");
                    var rIndex = 0;
                    for (var reservationNW of reservationNWs) {
                        // vNet from request matches vNet from reservation
                        if (reservationNW.vNet != null &&
                            nicProperties.vNetName.toLowerCase() == reservationNW.vNet.toLowerCase()) {

                            this.vNet = this.filtervNetByLocationInternal(
                                  AzureVirtualNetworkManager.getVirtualNetworkByResourceGroupAndName(resourceGroup, nicProperties.vNetName)
                            );
                            if (this.findSubnetInternal(resourceGroup, reservationNW) != null) {
                                System.log("[filterByNIC_" + nicIndex + "] " + (reservationNWs.length) + " vNets are specified in Reservation: pick Reservation #" + rIndex + ".");
                                break;
                            }
                        }
                        rIndex++;
                    }
                }
            } else {
                System.log("[filterByNIC_" + nicIndex + "] vNet name is NOT specified in the request.");
                if (reservationNWs == null || reservationNWs.length == 0) {
                    System.log("[filterByNIC_" + nicIndex + "] vNets are not specified in Reservation: pick first vNet from Subscription.");
                    var vNets = AzureVirtualNetworkManager.getVirtualNetworkByResourceGroup(resourceGroup);
                    for (var vNet of vNets) {
                        this.vNet = this.filtervNetByLocationInternal(vNet);
                        if (this.findSubnetInternal(resourceGroup, null) != null) {
                            break;
                        }
                    }
                } else {
                    System.log("[filterByNIC_" + nicIndex + "] " + (reservationNWs.length) + " vNets are specified in Reservation: pick first vNet from Reservation and Subscription.");
                    var rIndex = 0;
                    for (var reservationNW of reservationNWs) {
                        if (hasText(reservationNW.vNet)) {
                            this.vNet = this.filtervNetByLocationInternal(
                                AzureVirtualNetworkManager.getVirtualNetworkByResourceGroupAndName(resourceGroup, reservationNW.vNet)
                            );
                            if (this.findSubnetInternal(resourceGroup, reservationNW) != null) {
                                System.log("[filterByNIC_" + nicIndex + "] " + (reservationNWs.length) + " vNets are specified in Reservation: pick Reservation #" + rIndex + ".");
                                break;
                            }
                        }
                        rIndex++;
                    }
                }
            }
        },

        // Strategy to resolve vNet-Subnet by Network profile from request and reservation
        findByNetworkProfileInternal: function(resourceGroup) {

            if (hasText(nicProperties.networkProfileName)) {
                System.log("[filterByNIC_" + nicIndex + "] Network Profile name is specified in the request: " + nicProperties.networkProfileName);
                if (reservationNWs == null || reservationNWs.length == 0) {
                    System.log("[filterByNIC_" + nicIndex + "] Network profiles are NOT specified in Reservation: trying to pick subnet from specified '" + nicProperties.networkProfileName + "' profile.");
                    // Use Network Profile as a source of Subnet
                    var subnetName = nicProperties.subnetNameFromNetworkProfile;
                    if (isNullOrEmpty(subnetName)) {
                        System.log("[filterByNIC_" + nicIndex + "] Subnet name is NOT resolved from '" + nicProperties.networkProfileName + "' Network profile: unable to pick vNet-Subnet.");
                    } else {
                        System.log("[filterByNIC_" + nicIndex + "] Subnet name is resolved from '" + nicProperties.networkProfileName + "' Network profile: pick '" + subnetName + "' Subnet from first vNet from Subscription.");
                        this.findSubnetByNameInternal(resourceGroup, subnetName);
                    }
                } else {
                    System.log("[filterByNIC_" + nicIndex + "] " + (reservationNWs.length) + " Network Profiles are specified in Reservation: pick vNet by name from Reservation and Subscription.");
                    for (var reservationNW of reservationNWs) {
                        if (reservationNW.networkProfile != null &&
                            nicProperties.networkProfileName.toLowerCase() == reservationNW.networkProfile.toLowerCase()) {

                            if (hasText(reservationNW.vNet)) {
                                this.vNet = this.filtervNetByLocationInternal(
                                    AzureVirtualNetworkManager.getVirtualNetworkByResourceGroupAndName(resourceGroup, reservationNW.vNet)
                                );
                                if (this.findSubnetInternal(resourceGroup, reservationNW) != null) {
                                    break;
                                }
                            } else {
                                var subnetName = hasText(reservationNW.subnet)
                                    // Use subnet from reservation
                                    ? reservationNW.subnet
                                    // Use Network Profile from request as a source of Subnet
                                    : nicProperties.subnetNameFromNetworkProfile;
                                if (isNullOrEmpty(subnetName)) {
                                    System.log("[filterByNIC_" + nicIndex + "] Subnet name is NOT resolved from '" + nicProperties.networkProfileName + "' Network profile: unable to pick vNet-Subnet.");
                                } else {
                                    System.log("[filterByNIC_" + nicIndex + "] Subnet name is resolved from '" + nicProperties.networkProfileName + "' Network profile: pick '" + subnetName + "' Subnet from first vNet from Subscription.");
                                    if (this.findSubnetByNameInternal(resourceGroup, subnetName) != null) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                System.log("[filterByNIC_" + nicIndex + "] Network Profile name is NOT specified in the request.");
                if (reservationNWs == null || reservationNWs.length == 0) {
                    System.log("[filterByNIC_" + nicIndex + "] Network Profiles are NOT specified in Reservation: pick first vNet from Subscription.");
                    var vNets = AzureVirtualNetworkManager.getVirtualNetworkByResourceGroup(resourceGroup);
                    for (var vNet of vNets) {
                        this.vNet = this.filtervNetByLocationInternal(vNet);
                        if (this.findSubnetInternal(resourceGroup, null) != null) {
                            break;
                        }
                    }
                } else {
                    System.log("[filterByNIC_" + nicIndex + "] " + (reservationNWs.length) + " Network Profiles are specified in Reservation: pick first vNet from Reservation and Subscription.");
                    for (var reservationNW of reservationNWs) {
                        // Traverse only reservations with NP specified
                        if (isNullOrEmpty(reservationNW.networkProfile)) {
                            continue;
                        }
                        if (hasText(reservationNW.vNet)) {
                            // If vNet is specified use it.
                            this.vNet = this.filtervNetByLocationInternal(
                                AzureVirtualNetworkManager.getVirtualNetworkByResourceGroupAndName(resourceGroup, reservationNW.vNet)
                            );
                            if (this.findSubnetInternal(resourceGroup, reservationNW) != null) {
                                break;
                            }
                        } else {
                            var subnetName = hasText(reservationNW.subnet)
                                // Use subnet from reservation
                                ? reservationNW.subnet
                                // Use Network Profile from reservation as a source of Subnet
                                : this.resolveSubnetNameFromNetworkProfile(reservationNW);
                            if (isNullOrEmpty(subnetName)) {
                                System.log("[filterByNIC_" + nicIndex + "] Subnet name is NOT resolved from Network profile from reservation: unable to pick vNet-Subnet.");
                            } else {
                                System.log("[filterByNIC_" + nicIndex + "] Subnet name is resolved from '" + reservationNW.networkProfile + "' Network profile from reservation: pick '" + subnetName + "' Subnet from first vNet from Subscription.");
                                if (this.findSubnetByNameInternal(resourceGroup, subnetName) != null) {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        },

        findSubnetInternal: function(resourceGroup, reservationNW) {
            if (this.vNet == null) {
                return null;
            }

            var subnetName = nicProperties.subnetName;

            if (hasText(subnetName)) {
                System.log("[filterByNIC_" + nicIndex + "] Subnet name is specified in the request: " + subnetName);

                // Do a NOR check on the subnet name and networkProfile name presence in the reservation. If both are missing, take the subnet from the defined in the request vNet.
                if (reservationNW == null || !(isNullOrEmpty(reservationNW.subnet) || isNullOrEmpty(reservationNW.networkProfile))) {
                    System.log("[filterByNIC_" + nicIndex + "] Both Subnet and Network Profile are NOT specified in Reservation: pick Subnet by name from Subscription.");
                    this.subnet = AzureSubnetManager.getSubnetByVirtualNetworkAndName(subnetName, this.vNet);
                } else {
                    if (hasText(reservationNW.subnet)) {
                        System.log("[filterByNIC_" + nicIndex + "] Subnet is specified in Reservation: pick Subnet by name from Reservation and Subscription.");
                        if (subnetName.toLowerCase() == reservationNW.subnet.toLowerCase()) {
                            this.subnet = AzureSubnetManager.getSubnetByVirtualNetworkAndName(subnetName, this.vNet);
                        }
                    } else if (hasText(reservationNW.networkProfile)) {
                        // Get network profile from vRA and try to map the subnet name there with the one from request.
                        System.log("[filterByNIC_" + nicIndex + "] Network Profile name is specified in Reservation: pick Subnet by name from Reservation and Subscription.");
                        var profileSubnetName = this.resolveSubnetNameFromNetworkProfile(reservationNW);
                        if (hasText(profileSubnetName) && (subnetName.toLowerCase() == profileSubnetName.toLowerCase())) {
                            this.subnet = AzureSubnetManager.getSubnetByVirtualNetworkAndName(subnetName, this.vNet);
                        }
                    }
                }
            } else {
                System.log("[filterByNIC_" + nicIndex + "] Subnet name is NOT specified in the request.");
                if (reservationNW == null || isNullOrEmpty(reservationNW.subnet)) {
                    System.log("[filterByNIC_" + nicIndex + "] Subnet is NOT specified in Reservation.");

                    if (reservationNW && hasText(reservationNW.networkProfile)) {
                        subnetName = this.resolveSubnetNameFromNetworkProfile(reservationNW);
                    }

                    if (hasText(subnetName)) {
                        System.log("[filterByNIC_" + nicIndex + "] Subnet name is resolved from Network profile: pick '" + subnetName + "' Subnet from Subscription.");
                        this.subnet = AzureSubnetManager.getSubnetByVirtualNetworkAndName(subnetName, this.vNet);
                    } else {
                        System.log("[filterByNIC_" + nicIndex + "] Subnet name is NOT resolved from Network profile: pick first Subnet from Subscription.");

                        var subnets = AzureSubnetManager.getSubnetByVirtualNetwork(this.vNet);
                        if (subnets != null && subnets.length > 0) {
                            this.subnet = subnets[0];
                        }
                    }
                } else {
                    System.log("[filterByNIC_" + nicIndex + "] Subnet is specified in Reservation: pick '" + reservationNW.subnet + "' Subnet from Reservation and Subscription.");
                    this.subnet = AzureSubnetManager.getSubnetByVirtualNetworkAndName(reservationNW.subnet, this.vNet);
                }
            }

            if (this.subnet != null) {
                System.log("[filterByNIC_" + nicIndex + "] FOUND '" + this.vNet.name + "' vNet and '" + this.subnet.name + "' subnet within '" + resourceGroup.name + "' RG.");
            }

            return this.subnet;
        },

        // Look for the first vNet that has a Subnet with the name specified.
        findSubnetByNameInternal: function(resourceGroup, subnetName) {
            var vNets = AzureVirtualNetworkManager.getVirtualNetworkByResourceGroup(resourceGroup);
            for (var vNet of vNets) {
                this.vNet = this.filtervNetByLocationInternal(vNet);
                if (this.vNet == null) {
                    continue;
                }
                this.subnet = AzureSubnetManager.getSubnetByVirtualNetworkAndName(subnetName, vNet);
                if (this.subnet != null) {
                    break;
                }
            }
            return this.subnet;
        },

        filtervNetByLocationInternal: function(virtualNetwork) {
            return (virtualNetwork != null && virtualNetwork.region.toLowerCase() == location.name.toLowerCase()) ? virtualNetwork : null;
        },

        // Resolve subnet name for passed NW reservation and cache it.
        resolveSubnetNameFromNetworkProfile: function(reservationNW) {
            if (reservationNW == null || isNullOrEmpty(reservationNW.networkProfile)) {
                return null;
            }

            if (!reservationNW.hasOwnProperty("subnetNameFromNetworkProfile")) {

                reservationNW.subnetNameFromNetworkProfile = getSubnetNameByNetworkProfileName(reservationNW.networkProfile);
                if (isNullOrEmpty(reservationNW.subnetNameFromNetworkProfile)) {
                    return null;
                }

                System.log("[resolveSubnetNameFromNetworkProfile] CACHE the resolution of '" + reservationNW.subnetNameFromNetworkProfile + "' subnet for '" + reservationNW.networkProfile + "' Network profile specified in reservation.");
            }

            return reservationNW.subnetNameFromNetworkProfile;
        },

        isFound: function() {
            return this.subnet != null;
        },

        getSubnet: function() {
            return this.subnet;
        },

        getVirtualNetwork: function() {
            return this.vNet;
        }
    };

    var securityGroupFinder = {

        securityGroup: null,

        find: function(resourceGroup) {

            if (this.isFound()) {
                // securityGroup is ALREADY resolved
                return;
            }

            // Get NSG name specified in request
            var nsgName = nicProperties.securityGroupName;

            // Resolved Azure NSG
            if (hasText(nsgName)) {
                System.log("[filterByNIC_" + nicIndex + "] Security group name is specified in the request: " + nsgName);
                if (reservationNSGs == null || reservationNSGs.length == 0) {
                    System.log("[filterByNIC_" + nicIndex + "] Security  groups are not specified in Reservation: pick NSG by name from Subscription.");
                    this.securityGroup = this.filterSecurityGroupByLocationInternal(
                        AzureNetworkSecurityGroupManager.getNetworkSecurityGroupByResourceGroupAndName(resourceGroup, nsgName)
                    );
                } else {
                    System.log("[filterByNIC_" + nicIndex + "] " + (reservationNSGs.length) + " Security groups are specified in Reservation: pick NSG by name from Reservation and Subscription.");
                    var rIndex = 0;
                    for (var reservationNSG of reservationNSGs) {
                        if (nsgName.toLowerCase() == reservationNSG.name.toLowerCase()) {
                            this.securityGroup = this.filterSecurityGroupByLocationInternal(
                                AzureNetworkSecurityGroupManager.getNetworkSecurityGroupByResourceGroupAndName(resourceGroup, nsgName)
                            );
                            if (this.securityGroup != null) {
                                System.log("[filterByNIC_" + nicIndex + "] " + (reservationNSGs.length) + " Security groups are specified in Reservation: pick Reservation #" + rIndex + ".");
                                break;
                            }
                        }
                        rIndex++;
                    }
                }
            } else {
                System.log("[filterByNIC_" + nicIndex + "] Security group name is not specified in the request.");
                if (reservationNSGs == null || reservationNSGs.length == 0) {
                    System.warn("[filterByNIC_" + nicIndex + "] Security groups are not specified in Reservation: SG is not auto-allocated from Subscription.");
                    // NOTE: This behaviour differs from other existing allocation logics, which pick the "first" object from Azure.
                } else {
                    System.log("[filterByNIC_" + nicIndex + "] " + (reservationNSGs.length) + " Security groups are specified in Reservation: pick first NSG from Reservation and Subscription.");
                    var rIndex = 0;
                    for (var reservationNSG of reservationNSGs) {
                        this.securityGroup = this.filterSecurityGroupByLocationInternal(
                            AzureNetworkSecurityGroupManager.getNetworkSecurityGroupByResourceGroupAndName(resourceGroup, reservationNSG.name)
                        );
                        if (this.securityGroup != null) {
                            System.log("[filterByNIC_" + nicIndex + "] " + (reservationNSGs.length) + " Security groups are specified in Reservation: pick Reservation #" + rIndex + ".");
                            break;
                        }
                        rIndex++;
                    }
                }
            }

            if (this.securityGroup != null) {
                System.log("[filterByNIC_" + nicIndex + "] FOUND '" + this.securityGroup.name + "' SG for '" + nicProperties.securityGroupName + "' name within '" + resourceGroup.name + "' RG.");
            }
        },

        isFound: function() {
            if (nicProperties.securityGroupEnabled == false) {
                // securityGroup name is NOT specified
                return true;
            }
            return this.securityGroup != null;
        },

        getSecurityGroup: function() {
            return this.securityGroup;
        },

        filterSecurityGroupByLocationInternal: function(securityGroup) {
            return (securityGroup != null && securityGroup.region.toLowerCase() == location.name.toLowerCase()) ? securityGroup : null;
        }
    };

    //
    // Iterate all RGs trying to find vNet-Subnet and security group
    //
    for (var i = 0; i < reservationContext.connectionRGs.length && (!vNetSubnetFinder.isFound() || !securityGroupFinder.isFound()); i++) {
        var rgContext = reservationContext.connectionRGs[i];
        System.log("[filterByNIC_" + nicIndex + "] ::: Traversing RG '" + rgContext.name + "' in '" + connection.displayName + "'");

        vNetSubnetFinder.find(rgContext);
        securityGroupFinder.find(rgContext);
    }

    var nicAllocation = new Properties();
    if (vNetSubnetFinder.isFound() && securityGroupFinder.isFound()) {
        // Create NicObject
        nicAllocation.put(INSTANCE_KEY, {
            nicName: nicProperties.nicName,
            ipAddressType: nicProperties.ipAddressType,
            vNet: vNetSubnetFinder.getVirtualNetwork(),
            subnet: vNetSubnetFinder.getSubnet(),
            securityGroup: securityGroupFinder.getSecurityGroup()
        });
        System.log("[filterByNIC_" + nicIndex + "] SUCCESS");
    } else {
        nicAllocation.put(ERROR_KEY, null);
        System.log("[filterByNIC_" + nicIndex + "] FAILED");
    }
    return nicAllocation;
}

// Allocate NIC names using following format: <nic prefix>-<vmName>-<nic_i>
// Passed nicObjects[i].nicName are directly modified.
function allocateNewNICsNames(connection, vmName, resourceGroup, nicObjects) {

    var rgExists = (requestData.get(RESOURCE_GROUP_CREATION_TYPE) == RESOURCE_GROUP_CREATION_TYPE_EXISTING);

    var result = new Properties();

    for (var i in nicObjects) {
        var nicObject = nicObjects[i];
        var nicName = (nicObject.nicName == null || nicObject.nicName == "" ? "" : nicObject.nicName + "-") + vmName + "-nic" + (new Number(i) + 1);

        if (rgExists && (AzureNetworkInterfaceManager.getNetworkInterfaceByResourceGroupAndName(resourceGroup, nicName) != null)) {
            var msg = "Failed to allocate NIC name '" + nicName + "' in '" + resourceGroup.name + "' RG cause it already exists.";
            System.log("[allocateNewNICsNames] " + msg);
            result[ERROR_KEY] = msg;
            // And fail fast.
            return result;
        } else {
            System.log("[allocateNewNICsNames] Successfully allocated NIC name '" + nicName + "' in '" + resourceGroup.name + "' RG.");
            // OVERRIDE existing nic name with allocated one
            nicObject.nicName = nicName;
        }
    }

    result[INSTANCE_KEY] = nicObjects;

    return result;
}

// Convert NIC_i related props from request to Array of AzureVmNic composite type(represented as Properties)
// TODO: cache the NICs array cause it's request specific.
function toNicPropertiesArray() {
    var nicPropertiesArray = [];
    for (var var index = 1; index <= requestData.numberOfNics; index++) {
        var azureVmNic = new Properties();
        if (index == 1) {
            azureVmNic.isPrimary = true;
        } else {
            azureVmNic.isPrimary = false;
        }
        azureVmNic.nicName = requestData["nic" + index + "Name"];
        azureVmNic.networkConfigurationType = requestData["nic" + index + "NetworkConfigurationType"];
        azureVmNic.vNetName = requestData["nic" + index + "vNetName"];
        azureVmNic.subnetName = requestData["nic" + index + "SubnetName"];
        azureVmNic.networkProfileName = requestData["nic" + index + "NetworkProfileName"];
        azureVmNic.ipAddressType = requestData["nic" + index + "IpAddressType"];
        azureVmNic.securityGroupName = requestData["nic" + index + "SecurityGroupName"];
        azureVmNic.securityGroupEnabled = requestData["nic" + index + "SecurityGroupEnabled"];

        nicPropertiesArray.push(canonizeAzureVmNic(azureVmNic, index));
    }
    return nicPropertiesArray;
}

function canonizeAzureVmNic(azureVmNic, nicIndex) {
    // Canonize network configuration type to valid networks/networkProfile value.
    if (azureVmNic.networkConfigurationType == null ||
        azureVmNic.networkConfigurationType == "" ||
        azureVmNic.networkConfigurationType.toLowerCase() == NETWORK_CONFIGURATION_TYPE_NETS.toLowerCase()) {

        azureVmNic.networkConfigurationType = NETWORK_CONFIGURATION_TYPE_NETS;
        azureVmNic.networkProfileName = null;

    } else if (azureVmNic.networkConfigurationType.toLowerCase() == NETWORK_CONFIGURATION_TYPE_NP.toLowerCase()) {
        azureVmNic.networkConfigurationType = NETWORK_CONFIGURATION_TYPE_NP;
        azureVmNic.vNetName = null;
        azureVmNic.subnetName = null;

        if (azureVmNic.networkProfileName != null && azureVmNic.networkProfileName != "") {
            var networkProfile = getNetworkProfileByName(azureVmNic.networkProfileName);
            if (networkProfile == null) {
                throw "No Network profile with name '" + azureVmNic.networkProfileName + "' and type EXTERNAL of NIC_" + nicIndex + " was found. Make sure the requested Network Profile is of type EXTERNAL.";
            }
            azureVmNic.subnetNameFromNetworkProfile = getSubnetNameFromNetworkProfile(networkProfile);
            System.log("[canonizeAzureVmNic_" + nicIndex + "] Cache '" + azureVmNic.subnetNameFromNetworkProfile + "' subnet name from '" + azureVmNic.networkProfileName + "' network profile");
        }
    } else {
        throw "Network configuration type of NIC_" + nicIndex + " should be any of [" +
            NETWORK_CONFIGURATION_TYPE_NETS + ", " + NETWORK_CONFIGURATION_TYPE_NP + "]. Actual: " + azureVmNic.networkConfigurationType;
    }

    // Canonize IP address type to valid Dynamic/Static value as accepted by Azure SDK.
    if (azureVmNic.ipAddressType == null || azureVmNic.ipAddressType == "") {
        azureVmNic.ipAddressType = IP_ADDRESS_TYPE_DYNAMIC;
    } else if (azureVmNic.ipAddressType.toLowerCase() == IP_ADDRESS_TYPE_DYNAMIC.toLowerCase()) {
        azureVmNic.ipAddressType = IP_ADDRESS_TYPE_DYNAMIC;
    } else if (azureVmNic.ipAddressType.toLowerCase() == IP_ADDRESS_TYPE_STATIC.toLowerCase()) {
        azureVmNic.ipAddressType = IP_ADDRESS_TYPE_STATIC;
    } else {
        throw "IP address type of '" + azureVmNic.nicName + "' NIC should be any of [" +
            IP_ADDRESS_TYPE_STATIC + ", " + IP_ADDRESS_TYPE_DYNAMIC + "]. Actual: " + azureVmNic.ipAddressType;
    }

    // Canonize undefined to false
    if (azureVmNic.securityGroupEnabled == null) {
        azureVmNic.securityGroupEnabled = false;
    }

    return azureVmNic;
}
// Append resolved storage disks objects (Array of AzureVmStorageDisk) to allocation data
function appendStorageDisksObjectsToAllocation(storageDisksObjects, allocation) {
    if (storageDisksObjects == null)
	{
	   return;
	}
    if (storageDisksObjects.length >= 1) {
        allocation.storage1DiskName = storageDisksObjects[0].storageDiskName;
        allocation.storage1DiskType = storageDisksObjects[0].storageDiskType;
        allocation.storage1DiskSize = storageDisksObjects[0].storageDiskSize;
        allocation.storage1Replication = storageDisksObjects[0].storageReplication;
        allocation.storage1HostCaching = storageDisksObjects[0].storageHostCaching;
        allocation.storage1StorageAccount = storageDisksObjects[0].storageStorageAccount;
    }
    if (storageDisksObjects.length >= 2) {
        allocation.storage2DiskName = storageDisksObjects[1].storageDiskName;
        allocation.storage2DiskType = storageDisksObjects[1].storageDiskType;
        allocation.storage2DiskSize = storageDisksObjects[1].storageDiskSize;
        allocation.storage2Replication = storageDisksObjects[1].storageReplication;
        allocation.storage2HostCaching = storageDisksObjects[1].storageHostCaching;
        allocation.storage2StorageAccount = storageDisksObjects[1].storageStorageAccount;
    }
    if (storageDisksObjects.length >= 3) {
        allocation.storage3DiskName = storageDisksObjects[2].storageDiskName;
        allocation.storage3DiskType = storageDisksObjects[2].storageDiskType;
        allocation.storage3DiskSize = storageDisksObjects[2].storageDiskSize;
        allocation.storage3Replication = storageDisksObjects[2].storageReplication;
        allocation.storage3HostCaching = storageDisksObjects[2].storageHostCaching;
        allocation.storage3StorageAccount = storageDisksObjects[2].storageStorageAccount;
    }
    if (storageDisksObjects.length >= 4) {
        allocation.storage4DiskName = storageDisksObjects[3].storageDiskName;
        allocation.storage4DiskType = storageDisksObjects[3].storageDiskType;
        allocation.storage4DiskSize = storageDisksObjects[3].storageDiskSize;
        allocation.storage4Replication = storageDisksObjects[3].storageReplication;
        allocation.storage4HostCaching = storageDisksObjects[3].storageHostCaching;
        allocation.storage4StorageAccount = storageDisksObjects[3].storageStorageAccount;
    }
}

// Append resolved NIC objects (Array of NicObject) to allocation data
function appendNicObjectsToAllocation(nicObjects, allocation) {
    if (nicObjects.length >= 1) {
        allocation.nic1Name = nicObjects[0].nicName;
        allocation.nic1IpAddressType = nicObjects[0].ipAddressType;

        allocation.nic1vNetName = nicObjects[0].vNet.name;
        allocation.nic1SubnetName = nicObjects[0].subnet.name;
        allocation.nic1vNetSubnetRGName = nicObjects[0].subnet.resourceGroup.name;

        allocation.nic1SecurityGroupName = nicObjects[0].securityGroup != null ? nicObjects[0].securityGroup.name : null;
        allocation.nic1SecurityGroupRGName = nicObjects[0].securityGroup != null ? nicObjects[0].securityGroup.resourceGroup.name : null;
    }
    if (nicObjects.length >= 2) {
        allocation.nic2Name = nicObjects[1].nicName;
        allocation.nic2IpAddressType = nicObjects[1].ipAddressType;

        allocation.nic2vNetName = nicObjects[1].vNet.name;
        allocation.nic2SubnetName = nicObjects[1].subnet.name;
        allocation.nic2vNetSubnetRGName = nicObjects[1].subnet.resourceGroup.name;

        allocation.nic2SecurityGroupName = nicObjects[1].securityGroup != null ? nicObjects[1].securityGroup.name : null;
        allocation.nic2SecurityGroupRGName = nicObjects[1].securityGroup != null ? nicObjects[1].securityGroup.resourceGroup.name : null;
    }
    if (nicObjects.length >= 3) {
        allocation.nic3Name = nicObjects[2].nicName;
        allocation.nic3IpAddressType = nicObjects[2].ipAddressType;

        allocation.nic3vNetName = nicObjects[2].vNet.name;
        allocation.nic3SubnetName = nicObjects[2].subnet.name;
        allocation.nic3vNetSubnetRGName = nicObjects[2].subnet.resourceGroup.name;

        allocation.nic3SecurityGroupName = nicObjects[2].securityGroup != null ? nicObjects[2].securityGroup.name : null;
        allocation.nic3SecurityGroupRGName = nicObjects[2].securityGroup != null ? nicObjects[2].securityGroup.resourceGroup.name : null;
    }
    if (nicObjects.length >= 4) {
        allocation.nic4Name = nicObjects[3].nicName;
        allocation.nic4IpAddressType = nicObjects[3].ipAddressType;

        allocation.nic4vNetName = nicObjects[3].vNet.name;
        allocation.nic4SubnetName = nicObjects[3].subnet.name;
        allocation.nic4vNetSubnetRGName = nicObjects[3].subnet.resourceGroup.name;

        allocation.nic4SecurityGroupName = nicObjects[3].securityGroup != null ? nicObjects[3].securityGroup.name : null;
        allocation.nic4SecurityGroupRGName = nicObjects[3].securityGroup != null ? nicObjects[3].securityGroup.resourceGroup.name : null;
    }
}

// Convert StorageDisk_i related props from request to Array of AzureVmStorageDisk composite type(represented as Properties)
// TODO: cache the DISCs array cause it's request specific.
function toStorageDiskPropertiesArray() {
    var DISK_NAME = "Disk";
    var nameIndex = 1;
    var storageDiskPropertiesArray = [];

    for (var var indx = 1; indx <= requestData.numberOfStorages; indx++) {
        var azureVmStorageDisk = new Properties();
        azureVmStorageDisk.storageDiskSize = requestData["storage" + indx + "DiskSize"];
        azureVmStorageDisk.storageHostCaching = requestData["storage" + indx + "HostCaching"];
        azureVmStorageDisk.storageConfigurationType = requestData["storage" + indx + "DiskConfigurationType"];
        azureVmStorageDisk.storageReplicationHDD = requestData["storage" + indx + "Replication"];
        azureVmStorageDisk.storageReplicationSSD = requestData["storage" + indx + "ReplicationSSD"];
        azureVmStorageDisk.storageStorageAccount = requestData["storage" + indx + "StorageAccount"];
        azureVmStorageDisk.storageDiskType = requestData["storage" + indx + "DiskType"];

        azureVmStorageDisk.storageDiskName = requestData["storage" + indx + "DiskName"];
        if (azureVmStorageDisk.storageDiskName == null || azureVmStorageDisk.storageDiskName == "") {
            azureVmStorageDisk.storageDiskName = DISK_NAME + nameIndex;
            nameIndex++;
        }

        canonizeAzureVMStorageDisk(azureVmStorageDisk);
        storageDiskPropertiesArray.push(azureVmStorageDisk);

    }

    return storageDiskPropertiesArray;
}

function canonizeAzureVMStorageDisk(storageDiskProperties) {

    if (storageDiskProperties.storageConfigurationType == null ||
        storageDiskProperties.storageConfigurationType == "") {
        storageDiskProperties.storageConfigurationType = STORAGE_DISK_CONFIGURATION_TYPE_DDETAILS;
    }

    if (storageDiskProperties.storageConfigurationType == STORAGE_DISK_CONFIGURATION_TYPE_DDETAILS) {

        storageDiskProperties.storageStorageAccount = null;

        if (storageDiskProperties.storageDiskType == null ||
            storageDiskProperties.storageDiskType == "" ||
            storageDiskProperties.storageDiskType.toLowerCase() == STORAGE_DISK_TYPE_HDD.toLowerCase()) {

            storageDiskProperties.isSSD = false;
        } else if (storageDiskProperties.storageDiskType.toLowerCase() == STORAGE_DISK_TYPE_SSD.toLowerCase()) {
            storageDiskProperties.isSSD = true;
        } else {
            throw "StorageDisk with name '" + storageDiskProperties.storageDiskName + "' has invalid disk type specified. Disk type: '" + storageDiskName.storageDiskType + "'.";
        }

        if (storageDiskProperties.isSSD) {
            // SSD case
            storageDiskProperties.storageReplication = storageDiskProperties.storageReplicationSSD;
            if (storageDiskProperties.storageReplication == null ||
                storageDiskProperties.storageReplication == "" ||
                storageDiskProperties.storageReplication.toLowerCase() == "LRS".toLowerCase()) {
                storageDiskProperties.sku = "PREMIUM_LRS";
            } else {
                throw "SSD storage account supports only LRS replication. Requested replication type: '" + storageDiskProperties.storageReplication + "'.";
            }
        } else {
            // HDD case
            storageDiskProperties.storageReplication = storageDiskProperties.storageReplicationHDD;
            if (storageDiskProperties.storageReplication == null ||
                storageDiskProperties.storageReplication == "" ||
                storageDiskProperties.storageReplication.toLowerCase() == "LRS".toLowerCase()) {
                storageDiskProperties.sku = "PREMIUM_LRS";
            } else if (storageDiskProperties.storageReplication.toLowerCase() == "GRS".toLowerCase()) {
                storageDiskProperties.sku = "Standard_GRS";
            } else if (storageDiskProperties.storageReplication.toLowerCase() == "RA-GRS".toLowerCase()) {
                storageDiskProperties.sku = "Standard_RAGRS";
            } else if (storageDiskProperties.storageReplication.toLowerCase() == "ZRS".toLowerCase()) {
                storageDiskProperties.sku = "Standard_ZRS";
            } else {
                throw "HHD storage account doesn't support the requested '" + storageDiskProperties.storageReplication + "' replication.";
            }
        }

    }

    if (storageDiskProperties.storageHostCaching == null ||
        storageDiskProperties.storageHostCaching == "" ||
        storageDiskProperties.storageHostCaching.toLowerCase() == STORAGE_DISK_CACHING_TYPE_NONE.toLowerCase()) {
        storageDiskProperties.storageHostCaching = "NONE";
    } else if (storageDiskProperties.storageHostCaching.toLowerCase() == STORAGE_DISK_CACHING_TYPE_READ_ONLY.toLowerCase()) {
        storageDiskProperties.storageHostCaching = "READ_ONLY";
    } else if (storageDiskProperties.storageHostCaching.toLowerCase() == STORAGE_DISK_CACHING_TYPE_READ_WRITE.toLowerCase()) {
        storageDiskProperties.storageHostCaching = "READ_WRITE";
    } else {
        throw "Host caching doesn't support the requested '" + storageDiskProperties.storageHostCaching + "' caching.";
    }
}

function getMachinePrefix() {
    var tenantId = getTenantId();

    if (subtenant == null) {
        throw "No business group provided to the allocation logic.";
    }

    if (subtenant.extensionData == null) {
        System.log("The provided business group does not have extension data.");
        var subtenantName = subtenant.name;
        // Remove whitespaces.
        subtenantName = subtenantName.replace(/\s+/g, '');
        return {name:subtenantName};
    }

    var machinePrefixId = subtenant.extensionData.get(IAAS_MACHINE_PREFIX_KEY);

    if (machinePrefixId == null || machinePrefixId == "") {
        System.log("The provided business group does not have a machine prefix defined.");
        var subtenantName = subtenant.name;
        // Remove whitespaces.
        subtenantName = subtenantName.replace(/\s+/g, '');
        return {name:subtenantName};
    }

    // Fetch machine prefixes data from vRA.
    var host = vCACCAFEHostManager.getDefaultHostForTenant(tenantId , true);

    var infrastructureClient = host.createInfrastructureClient();
    var machinePrefixesService = infrastructureClient.getInfrastructureMachinePrefixesService();
    var machinePrefixes = machinePrefixesService.getAll();

    if (machinePrefixes != null) {
        System.log("[getMachinePrefix] Found '" + machinePrefixes.length + "' machine prefixes.");
    }

    for (var mach inePrefix of machinePrefixes) {
        System.log("[getMachinePrefix] Processing machine prefix with id '" + machinePrefix.id + "'.");
        if (machinePrefixId == machinePrefix.id.toString()) {
            System.log("[getMachinePrefix] Found matching machine prefix. machinePrefix.id: '" + machinePrefix.id + "' machinePrefix.name '" + machinePrefix.name + "'.");
            return machinePrefix;
        }
    }

    throw "Invalid machine prefix id provided in the business group. Machine prefix id: '" + machinePrefixId + "'.";
}

// Returns network profiles by name or null if not found.
function getNetworkProfileByName(name) {
    var tenantId = getTenantId();

    var host = vCACCAFEHostManager.getDefaultHostForTenant(tenantId , true);
    var cafeResponse = null;

    try {
       cafeResponse = vCACCAFEEntitiesFinder.getNetworkProfile(host, name);
    } catch (e) {
       System.log("Error while making API call to fetch the Network Profile of Name -" + name + " .Status Message: " + e.message);
       return null;
    }

    System.log("[getNetworkProfileByName] GET Network Profile with name: '" + name + "' returned status: '" + cafeResponse.getStatus() + "'.");
    System.log("[getNetworkProfileByName] GET Network Profile response body: '" + cafeResponse.getBodyAsString() + "'.");

    if (cafeResponse.getStatus() == "200") { // OK
        System.log("[getNetworkProfileByName] GET Network Profile returned successfully.");
        var networkProfile = JSON.parse(cafeResponse.getBodyAsString());

        if (networkProfile["profileType"] != "EXTERNAL") {
            System.warn("[getNetworkProfileByName] The Network Profile with name '" + name + "' specified in the Reservation is not of type EXTERNAL. Only EXTERNAL types are supported.");
            return null;
        }

        System.log("[getNetworkProfileByName] Retrieved NetworkProfile id: '" + networkProfile["id"] + "' name: '" + networkProfile["name"] + "'.");
        return networkProfile;
    }

    return null;
}

function getSubnetNameFromNetworkProfile(networkProfile) {

    if (networkProfile == null) {
        System.log("[getSubnetNameFromNetworkProfile] Network profile is null: return null");
        return null;
    }

    if (networkProfile["definedRanges"] == null || networkProfile["definedRanges"].length == 0) {
        System.log("[getSubnetNameFromNetworkProfile] '" + networkProfile.name + "' Network profile does not contain any network ranges.");
        return null;
    }

    var networkRange = networkProfile["definedRanges"][0];
    var networkRangeName = networkRange["name"];

    return networkRangeName;
}

// Shortcut to getNetworkProfileByName-and-getSubnetNameFromNetworkProfile
function getSubnetNameByNetworkProfileName(networkProfileName) {

    var networkProfile = getNetworkProfileByName(networkProfileName);

    if (networkProfile == null) {
        // No Network Profile was found - either because it's missing, or it's of type different from EXTERNAL. Just return here.
        return null;
    }

    return getSubnetNameFromNetworkProfile(networkProfile);
}

function getTenantId() {
    if (subtenant == null || subtenant.get(SUBTENANT_TENANT_KEY) == null) {
        throw "Unable to find the tenant id in the business group.";
    }
    return subtenant.get(SUBTENANT_TENANT_KEY);
}

function isNullOrEmpty(parameter) {
    return parameter == null || parameter == "";
}

function hasText(parameter) {
    return parameter != null && parameter != "";
}
}
}
