/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createOrUpdateLoadBalancer(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, lbName?: string, bapsNames?: Array<string>, publicIpAddressName?: string): Azure.LoadBalancer {System.log("Entering CreateOrUpdateLoadBalancer action.");

var loadBalancerOperations = connection.networkClient.loadBalancersOperations;

var loadBalancer = resourceGroup.getLoadBalancer(lbName);

if (loadBalancer == null) {
    System.log("No LoadBalancer found in Subscription with name '" + lbName + "' and resourceGroup '" + resourceGroup.name + "'. Creating new one.");
    loadBalancer = new AzureLoadBalancer(location.name);
    loadBalancer.name = lbName;
}

var lbBaps = new Array();

for (var bapName of bapsNames) {
    var bap = new AzureBackendAddressPool();
    bap.name = bapName;
    lbBaps.push(bap);
}

loadBalancer.backendAddressPools = lbBaps;
System.log("Assigned " + lbBaps.length + " BackendAddressPools to the LoadBalancer");

var publicIPAddress = com.vmware.library.azure.createPublicIpAddress(connection, location, resourceGroup, publicIpAddressName);

var publicIpAddressId = new AzureResourceId();
publicIpAddressId.id = publicIPAddress.id;

var frontendIPConfig = new AzureFrontendIpConfiguration();
frontendIPConfig.name = lbName + "frontendIpConfig";
frontendIPConfig.publicIpAddress = publicIpAddressId;

loadBalancer.frontendIpConfigurations = [frontendIPConfig];
System.log("Assigned frontend IP configurations to the LoadBalancer");

loadBalancerOperations.createOrUpdate(resourceGroup.name, lbName, loadBalancer);
System.log("Created/updated successfully.");

return resourceGroup.getLoadBalancer(lbName);
}
}
