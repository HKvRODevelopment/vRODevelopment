/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.network {
export function getNetworksForVimHost(vimHost?: VC.SdkConnection): Array<VC.Network> {var result = new Properties();
var hosts = vimHost.getAllHostSystems();
for (var i in hosts) {
	var networks = hosts[i].network;
	for (var j in networks) {
		result.put(networks[j].sdkId , networks[j]);
	}
}
var arr = new Array();
var keys = result.keys;
for (var i in keys) {
	arr.push(result.get(keys[i]));
}
return arr;
}
}
