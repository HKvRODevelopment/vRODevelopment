/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvSwitchPvlanIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<number> {var pvlanInfos = new Array();
var uniqs = {};
if ( dvSwitch != null ) {
	var pvlanConfigs = dvSwitch.config.pvlanConfig;
	// Create array of strings to return for use in workflow presentation:
	if(pvlanConfigs != null){
		for (var pvlanConfig of pvlanConfigs){
			uniqs[pvlanConfig.primaryVlanId] = pvlanConfig.primaryVlanId;
		}
		for (var cfg of pvlanConfigs){
			var y = uniqs[cfg.primaryVlanId];
		    if (y != null) {
				pvlanInfos.push(y);	
			}
			uniqs[y] = null;
		}
	}else{
		System.log("pVLAN Config is null");
	}
}

return pvlanInfos;
}
}
