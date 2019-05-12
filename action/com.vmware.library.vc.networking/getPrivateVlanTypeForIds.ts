/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getPrivateVlanTypeForIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch, primaryVlanId?: number, secondaryVlanId?: number): string {var vlanType = "";
if (dvSwitch != null) {
	var pvlanConfigs = dvSwitch.config.pvlanConfig;
	if(pvlanConfigs != null){
		for (var pvlanConfig of pvlanConfigs){
			if (pvlanConfig.primaryVlanId == primaryVlanId && pvlanConfig.secondaryVlanId == secondaryVlanId){
				vlanType = pvlanConfig.pvlanType;
				break;
			}
		}
	}else{
		System.log("pVLAN Config is null");
	}
} else {
	System.log("dvSwitch is null is null");
}
return vlanType;
}
}
