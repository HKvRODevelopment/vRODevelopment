/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getVSwitchVMkernelPortgroups(host?: VC.HostSystem, vSwitchName?: string): Array<string> {var result = new Array();
if ( host != null ) {
	for (var portgroup of host.configManager.networkSystem.networkInfo.portgroup) {
		if ( portgroup.spec.vswitchName == vSwitchName && com.vmware.library.vc.networking.hasVnicAssociatedTo(host,portgroup.spec.name)) {
			result.push(portgroup.spec.name);
		}
	}
} 
return result;
}
}
