/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.host {
export function getAllHostSystemsMatchingRegexp(regexp?: string): Array<VC.HostSystem> {// Get all Hosts for all vCenter connections defined for this plugin
var allHosts = VcPlugin.getAllHostSystems();
var hosts = new Array();
// Check if the Host match the regexp
for (var i in allHosts) {
	if (allHosts[i].name.match(regexp)) {
		hosts.push(allHosts[i]);
	}
}	
return hosts;
}
}
