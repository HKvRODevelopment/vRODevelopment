/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvSwitchSecondaryPvlanIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<number> {var pvlanInfos = new Array();
if ( dvSwitch != null ) {
	var pvlanConfigs = dvSwitch.config.pvlanConfig;
	if(pvlanConfigs != null){
		for (var pvlanConfig of pvlanConfigs){
			pvlanInfos.push(pvlanConfig.secondaryVlanId);
		}
	}else{
		System.log("pVLAN Config is null");
	}
}
return pvlanInfos;
}
}
