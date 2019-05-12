/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.network {
export function getAllVSwitchesMatchingRegexp(regexp?: string): Array<any> {var hosts = VcPlugin.getAllHostSystems();
var vswitches = new Array();
for (var i in hosts){
	var host = hosts[i];
	vswitches = vswitches.concat(host.config.network.vswitch);
}

var switchesMatchRegexp = new Array();
for (var j in vswitches) {
	if (vswitches[j].name.match(regexp)) {
		switchesMatchRegexp.push(vswitches[j]);
	}
}	
return switchesMatchRegexp;
}
}
