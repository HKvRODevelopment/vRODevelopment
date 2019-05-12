/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createOrUpdateVirtualNetwork(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, location?: Azure.Location, virtualNetworkName?: string, subnetName?: string, addressPrefix?: string, dnsServer?: string, subnetPrefix?: string, tags?: Properties): Azure.VirtualNetwork {if (!connection) {
	throw "Connection cannot be null.";
}
if (!resourceGroup) {
	throw "Resource group cannot be null.";
}

var vnet = new AzureVirtualNetwork(location.name);

//Set address space
var asp = new AzureAddressSpace();
asp.addressPrefixes = [addressPrefix];
vnet.addressSpace = asp;

//Set DHCP options
var dop = new AzureDhcpOptions();
dop.dnsServers = [dnsServer];
vnet.dhcpOptions = dop;

//Set sub-net
var subnet = new AzureSubnet(subnetPrefix);
subnet.name = subnetName;
vnet.subnets = [subnet];

//Set tags
vnet.tags = tags;

connection.networkClient.virtualNetworksOperations.createOrUpdate(resourceGroup.name, virtualNetworkName, vnet);

return resourceGroup.getVirtualNetworkByName(virtualNetworkName);
}
}
