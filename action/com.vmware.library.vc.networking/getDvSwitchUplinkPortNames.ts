/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvSwitchUplinkPortNames(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<string> {if ( dvSwitch != null ) {
	var uplinkPortPolicy = dvSwitch.config.uplinkPortPolicy;
	if (uplinkPortPolicy != null){
		return uplinkPortPolicy.uplinkPortName;
	}
}
return [];
}
}
