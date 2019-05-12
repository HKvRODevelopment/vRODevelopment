/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvPortgroupUplinkPortNames(dvPortgroup?: VC.DistributedVirtualPortgroup): Array<string> {var dvSwitch = dvPortgroup.config.distributedVirtualSwitch;
return com.vmware.library.vc.networking.getDvSwitchUplinkPortNames(dvSwitch);
}
}
