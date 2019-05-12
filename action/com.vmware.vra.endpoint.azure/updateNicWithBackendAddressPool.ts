/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function updateNicWithBackendAddressPool(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, loadBalancerName?: string, backendAddressPoolName?: string, nic?: Azure.NetworkInterface): void {if (!connection) {
	throw "Connection cannot be null.";
}
if (!location) {
	throw "Location cannot be null.";
}
if (!resourceGroup) {
	throw "Resource group cannot be null.";
}
if (!backendAddressPoolName) {
	throw "Backend address pool name cannot be null.";
}
if (!nic) {
	throw "Network interface cannot be null.";
}


// Get the Load Balancer by name
var loadBalancer = null;
var loadBalancersResponse = connection.networkClient.loadBalancersOperations.list(resourceGroup.name);

if (loadBalancersResponse != null) {
	var loadBalancers = loadBalancersResponse.loadBalancers;
	for (var lb of loadBalancers) {
		System.log("Load Balancer with name " + loadBalancerName + " found");
		if (lb.name == loadBalancerName) {
			loadBalancer = lb;
			break;
		}
	}
}

if (loadBalancer == null) {
	System.warn("No Load Balancer with name " + loadBalancerName + " found");
	return;
}


// Get the BAP by name
var backendAddressPool = null;
for (var bap of loadBalancer.backendAddressPools) {
	if (bap.name = backendAddressPoolName) {
		System.log("Backend Address Pool with name " + backendAddressPoolName + " found");
		backendAddressPool = bap;
		break;
	}
}

if (backendAddressPool == null) {
	System.warn("No Backend Address Pool with name " + backendAddressPoolName + " found");
	return;
}

// Update the VM NIC 
System.log("Updating NIC");
nic.ipConfigurations[0].loadBalancerBackendAddressPools = [backendAddressPool];
var updatedNic = connection.networkClient.networkInterfacesOperations.createOrUpdate(resourceGroup.name, nic.name, nic);
if (updatedNic != null) {
	System.log("Backend Address Pool successfully added to NIC");
}

return;
}
}
