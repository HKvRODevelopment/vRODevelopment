/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvSwitchSecondaryPvlanIdsForPrimaryId(dvSwitch?: VC.VmwareDistributedVirtualSwitch, primaryVlanId?: string): Array<number> {var pvlanInfos = new Array();
if (dvSwitch != null) {
	var pvlanConfigs = dvSwitch.config.pvlanConfig;
	// Create array of strings to return for use in workflow presentation:
	if(pvlanConfigs != null){
		//System.log("Checking pVLAN Configs: "+pvlanConfigs.length);
		for (var pvlanConfig of pvlanConfigs){
			//System.log("pvlanType: "+pvlanConfig.pvlanType);
			//System.log("primaryVlanId: "+pvlanConfig.primaryVlanId);
			//System.log("secondaryVlanId: "+pvlanConfig.secondaryVlanId);
			if ( pvlanConfig.primaryVlanId == primaryVlanId ) {
				pvlanInfos.push(pvlanConfig.secondaryVlanId);
			}
		}
	}else{
		System.log("pVLAN Config is null");
	}
}
return pvlanInfos;
}
}
