/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.network {
export function getNetworksForHostSystem(host?: VC.HostSystem): Array<VC.Network> {return host.network_Network;
}
}
