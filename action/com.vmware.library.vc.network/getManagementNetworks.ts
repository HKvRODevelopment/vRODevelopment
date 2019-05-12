/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.network {
export function getManagementNetworks(vimObject?: any): Array<string> {var host = null;

if (vimObject instanceof VcHostSystem) {
	host = vimObject;
} else if (vimObject instanceof VcClusterComputeResource) {
	var hosts = vimObject.host;
	if (hosts.length < 1) {
		return [];
	}
	host = hosts[0];
} else {
	throw "invalid parameter type";
}

var networks = [];

portgroupLoop:
for (var pg in host.config.network.portgroup) {
	var portgroup = host.config.network.portgroup[pg];
	for (var p in portgroup.port) {
		var port = portgroup.port[p];
		if (port.type == "host") {
			networks.push(portgroup.spec.name);
			continue portgroupLoop;
		}
	}
}

return networks;

}
}
