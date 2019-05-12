/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvPortgroupPvlanIds(dvPortgroup?: VC.DistributedVirtualPortgroup): Array<number> {if (dvPortgroup != null) {
	var dvSwitch = dvPortgroup.config.distributedVirtualSwitch;
	return com.vmware.library.vc.networking.getDvSwitchPvlanIds(dvSwitch);
} else {
	return [];
}
}
}
