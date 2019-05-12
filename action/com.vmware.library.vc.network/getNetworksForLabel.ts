/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.network {
export function getNetworksForLabel(label?: string): Array<VC.Network> {var hosts = VcPlugin.vimHosts;
var networks = new Array();

for (var i in hosts) {
	var hostSystems = hosts[i].getAllHostSystems(["network"], null);
	for (var j in hostSystems) {
		var hostSystemNetworks = hostSystems[j].network;
		hosts[i].preloadFinderProperties(hostSystemNetworks, null);
		for (var k in hostSystemNetworks) {
			if (hostSystemNetworks[k].name == label) {
				if (networks.indexOf(hostSystemNetworks[k]) == -1) {
					networks.push(hostSystemNetworks[k]);
				}
			}
		}
	}
}

return networks;

}
}
