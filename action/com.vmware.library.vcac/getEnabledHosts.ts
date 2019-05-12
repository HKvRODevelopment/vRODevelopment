/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getEnabledHosts(): Array<vCloud.Host> {var allHosts = VclHostManager.getHostList();

var enabledHosts = new Array();

for (var host of allHosts) {
	if 	(host.enabled == true) {
		enabledHosts.push(host);
		host.login();
	}
}

return enabledHosts;
}
}
