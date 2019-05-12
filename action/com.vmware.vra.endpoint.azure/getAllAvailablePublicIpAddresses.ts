/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getAllAvailablePublicIpAddresses(vm?: Azure.VirtualMachine): Array<string> {if (!vm) {
    return null;
}

var sid = vm.internalIdString.split(",")[0];
var connection = AzureConnectionManager.getConnectionBySid(sid);

var publicAddress = AzurePublicIPAddressManager.getAllAvailablePublicIpAddresses(connection);
var result = [];

for (var publicIp of publicAddress) {
   result.push(publicIp.name + " @ " + publicIp.resourceGroupName);
   System.log("[getAllAvailablePublicIpAddresses] Found available PublicIpAddress with name '" + publicIp.name + "' in resource group '" + publicIp.resourceGroupName + "'.");
}

return result;
}
}
