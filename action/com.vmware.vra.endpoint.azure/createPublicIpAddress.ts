/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createPublicIpAddress(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, publicIpName?: string, tags?: Properties): Azure.PublicIpAddress {if (!connection) {
	throw new "Connection cannot be null.";
}
if (!location) {
	throw new "Location cannot be null.";
}
if (!resourceGroup) {
	throw new "Resource group cannot be null.";
}

var ip = new AzurePublicIpAddress("Dynamic", location.name);
ip.tags = tags;

connection.networkClient.publicIpAddressesOperations.createOrUpdate(resourceGroup.name, publicIpName, ip);

return resourceGroup.getPublicIpAddressByName(publicIpName);
}
}
