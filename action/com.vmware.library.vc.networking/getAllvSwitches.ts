/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getAllvSwitches(host?: VC.HostSystem): Array<string> {var vSwitches = new Array();
if ( host != null ) {
	var temp = VcPlugin.toManagedObject(host, host.configManager.networkSystem).networkInfo.vswitch;
	if ( temp != null ) {
		for (var i in temp) {
			vSwitches.push(temp[i].name);
		}
	}
}
return vSwitches;
}
}
