/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function hasVnicAssociatedTo(host?: VC.HostSystem, portgroupName?: string): boolean {if ( host != null && host.configManager.networkSystem.networkInfo.vnic != null ) {
	for (var vnic of host.configManager.networkSystem.networkInfo.vnic) {
		System.log("Checking vnic [key: " + vnic.key + "; device: " + vnic.device + "]");
		if ( vnic.portgroup == portgroupName ) {
			return true;
		}
	}
}
return false;
}
}
