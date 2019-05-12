/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getHostSystemPortGroups(host?: VC.HostSystem): Array<string> {var result = new Array();
if ( host != null ) {
	for (var pg of host.configManager.networkSystem.networkInfo.portgroup) {
		result.push(pg.spec.name);
	}
} 
return result;
}
}
