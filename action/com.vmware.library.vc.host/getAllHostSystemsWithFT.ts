/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.host {
export function getAllHostSystemsWithFT(): Array<VC.HostSystem> {var hosts = VcPlugin.getAllHostSystems();
var hostsWithFT = new Array();
for (var i in hosts){
	var host = hosts[i];
	if(host.summary.config.faultToleranceEnabled){
		hostsWithFT.push(host);
	}
}
return hostsWithFT;
}
}
