/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createOrUpdateNetworkInterface(connection?: Azure.Connection, location?: Azure.Location, virtualNetwork?: Azure.VirtualNetwork, publicIp?: Azure.PublicIpAddress, resourceGroup?: Azure.ResourceGroupExtended, nicName?: string, ipConfigName?: string, tags?: Properties): Azure.NetworkInterface {if (!connection) {
	throw "Connection cannot be null.";
}
if (!location) {
	throw "Location cannot be null.";
}

var nic = new AzureNetworkInterface(location.name);
nic.name = nicName;

//set ipconfiguration
var nicConfig = new AzureNetworkInterfaceIpConfiguration();
nicConfig.name = ipConfigName;
nicConfig.privateIpAllocationMethod = "Dynamic";
nicConfig.subnet = virtualNetwork.subnets[0];

nic.ipConfigurations = [nicConfig];

if (publicIp) {
	var publicIpAddressId = new AzureResourceId();
	publicIpAddressId.id = publicIp.id;
	nic.ipConfigurations[0].publicIpAddress = publicIpAddressId;
}

//set tags
nic.tags = tags;

connection.networkClient.networkInterfacesOperations.createOrUpdate(resourceGroup.name, nicName, nic);

return resourceGroup.getNetworkInterfaceByName(nicName);
}
}
