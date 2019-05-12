/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function getSubnetByVirtualNetwork(virtualNetwork?: Azure.VirtualNetwork): Array<Azure.Subnet> {return AzureSubnetManager.getSubnetByVirtualNetwork(virtualNetwork);

}
}
