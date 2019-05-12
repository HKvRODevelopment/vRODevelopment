/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.network {
export function getDatacenterForNetwork(network?: VC.Network): VC.Datacenter {var hosts = network.host;
for (var i in hosts){
	var parent = hosts[i].parent;
	while(!(parent instanceof VcDatacenter)){
		parent = parent.parent;
	}
	return parent;
}
}
}
