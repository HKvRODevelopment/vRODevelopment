/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getVmIpDetails(vm?: Azure.VirtualMachine): string {var ipsString = "";

if (vm == null) {
    return ipsString;
}

var columnLength = 28;

var primaryNic = AzureNetworkInterfaceManager.getPrimaryNetworkInterfaceByVirtualMachine(vm);
ipsString += "Network Interface: " + primaryNic.name + "\n";
ipsString += "Public IP Address: " + primaryNic.publicIpAddress + "\n";
ipsString += "Private IP Address: " + primaryNic.privateIpAddress + "\n";

ipsString += "\n===============================================\n";

var secondaryNics = AzureNetworkInterfaceManager.getAllSecondaryNetworkInterfaceByVirtualMachine(vm);

for (var nicRef of secondaryNics) {
   ipsString += "Network Interface: " + nicRef.name + "\n";
   ipsString += "Public IP Address: " + nicRef.publicIpAddress + "\n";
   ipsString += "Private IP Address: " + nicRef.privateIpAddress + "\n";

   ipsString += "\n===============================================\n";
}

return ipsString;
}
}
