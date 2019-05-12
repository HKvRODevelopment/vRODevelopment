/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function DeleteAzureResources(requestData?: Properties, apiVersion?: string, vm?: Azure.VirtualMachine): void {var REQUEST_ALLOCATION_DATA_KEY = "_allocation";
var REQUEST_RESOURCE_GROUP_KEY = "resourceGroupName";
var REQUEST_TAG_KEY = "tag";
var REQUEST_VM_NAME_KEY = "vmName";
var REQUEST_VM_LOCATION = "vmLocation"
var REQUEST_SUBSCRIPTION_ID_KEY = "subscriptionId";

var VIRTUAL_MACHINE_TYPE = "Microsoft.Compute/virtualMachines";
var VIRTUAL_NETWORK_INTERFACE_TYPE = "Microsoft.Network/networkInterfaces";

System.log("[DeleteAzureResources] Starting a delete process of Azure Virtual Machine together with related resources where applicable.");

var storageBlobSuffix = ""
var location = requestData.get(REQUEST_VM_LOCATION);

if (location == "chinaeast" || location == "chinanorth") {
   storageBlobSuffix = ".blob.core.chinacloudapi.cn";
} else if (location == "germanycentral" || location == "germanynortheast") {
   storageBlobSuffix = ".blob.core.cloudapi.de";
} else {
   storageBlobSuffix = ".blob.core.windows.net";
}

var connection = com.vmware.vra.endpoint.azure.getConnectionBySubscriptionId(requestData.get(REQUEST_SUBSCRIPTION_ID_KEY));
var tag = requestData.get(REQUEST_TAG_KEY);
System.log("[DeleteAzureResources] Received tag is: " + tag);
if (tag == null) {
    var allocationData = requestData.get(REQUEST_ALLOCATION_DATA_KEY);
    var vmName = requestData.get(REQUEST_VM_NAME_KEY);
    tag = com.vmware.vra.endpoint.azure.generateTag(allocationData, vmName);
    System.log("[DeleteAzureResources] Tag was not passed as part of the request data, so it was generated based on the allocation data. The result is: " + tag);
}


var resourceGroupName = requestData.get(REQUEST_RESOURCE_GROUP_KEY);
var RG = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, resourceGroupName);
var nics = AzureNetworkInterfaceManager.getAllVirtualNetworkByTag(RG, tag, tag);
var avSet = AzureVirtualMachineManager.getAvailabilitySetOfVm(vm);
var RGs = AzureResourceGroupManager.getAllResourceGroupByTag(connection, tag, tag);
var managedDiskUris = [];
var unManagedDiskUris = [];
var ismanaged = vm.managedDiskEnabled;

if (vm.managedDiskEnabled) {
   managedDiskUris.push(AzureVirtualMachineManager.getVmDiskForOs(vm));
   for (var disk of AzureVirtualMachineManager.getVmDiskDiskForData(vm)) {
      managedDiskUris.push(disk);
   }
} else {
   unManagedDiskUris.push(AzureVirtualMachineManager.getVmVhdUriForOs(vm));
   for (var disk of AzureVirtualMachineManager.getVmVhdUriForData(vm)) {
      unManagedDiskUris.push(disk);
   }
}

try {
   AzureVirtualMachineManager.delete(vm);
} catch (error) {
   System.error("[DeleteAzureResources] Could not delete virtual machine with name '" + vm.name + "' because of the error: " + error);
   System.error("[DeleteAzureResources] Delete Azure Resources cannot continue!");
   throw error;
}

for (var nic of nics) {
   System.log("[DeleteAzureResources] NetowrkInterface with name '" + nic.name + "'will be deleted from subscription.");
   AzureNetworkInterfaceManager.delete(nic);
}

if (avSet != null) {
   var avSetUsage = com.vmware.vra.endpoint.azure.updateAvailabilitySetReferenceCountTag(connection, resourceGroupName, avSet.name, -1);

   if (avSetUsage == 0) {
      System.log("[DeleteAzureResources] AvailabilitySet with name '" + avSet.name + "' is no more used so will be deleted from subscription.");
      AzureAvailabilitySetManager.delete(avSet);
      System.log("[DeleteAzureResources] AvailabilitySet with name '" + avSet.name + "' was successfully deleted from subscription.");
   }
}

// Deleting the Disks associated to the VM.
if (ismanaged) {
   for (var uri of managedDiskUris) {
      System.log("[DeleteAzureResources] Deleting the Disks associated to the VM - " + uri);
      var disk = AzureDiskManager.getDiskById(connection, uri);
      AzureDiskManager.delete(disk);
   }
} else {
   for (var uri of unManagedDiskUris) {
      System.log("[DeleteAzureResources]  Deleting the Disks associated to the VM - " + uri);
      AzureStorageManager.deleteVhdByUri(RG, uri);
   }
}

try {
    var remainedVMs = com.vmware.vra.endpoint.azure.updateResourceGroupReferenceCountTag(connection, resourceGroupName, -1, apiVersion);
    if (remainedVMs == 0) {
       // If none vRA specific tags are left, this means that the resource group is no more used and can be deleted from Azure Subscription.
       AzureResourceGroupManager.delete(RG);
       System.log("[DeleteAzureResources] ResourceGroup with name '" + resourceGroupName + "' is no more used, thus was deleted from the subscription.");
    }
} catch (error) {
    System.warn("[DeleteAzureResources] Could not process resource group with name '" + resourceGroupName + "' because of the error: " + error);
}

}
}
