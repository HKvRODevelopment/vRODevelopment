/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getAssignedPublicIpAddressNameWithRGName(azureVm?: Azure.VirtualMachine): string {
var nic = AzureNetworkInterfaceManager.getPrimaryNetworkInterfaceByVirtualMachine(azureVm);
log("Found PublicIpAddress with ID '" + nic.publicIpAddressName + "'. \r\n Parsed PublicIPAddress name is '" + nic.publicIpAddressName + "' and ResourceGroupName is '" + nic.resourceGroupName + "'.");
if (nic.publicIpAddressName == "")
{
   return "None";
}

return "" + nic.publicIpAddressName + "@" + nic.resourceGroupName;


function log(message) {
    System.log("[getAssignedPublicIpAddressNameWithRGName] " + message);
}
}
}
