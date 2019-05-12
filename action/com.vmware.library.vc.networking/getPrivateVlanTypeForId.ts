/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getPrivateVlanTypeForId(dvSwitch?: VC.DistributedVirtualPortgroup, vlanId?: number): string {var vlanType = "";
if (dvSwitch != null) {
	var pvlanConfigs = dvSwitch.config.pvlanConfig;
	// Create array of strings to return for use in workflow presentation:
	if(pvlanConfigs != null){
		//System.log(vlanIdg pVLAN Configs: vlanIdonfigs.length);
		for (var pvlanConfig of pvlanConfigs){
			//System.log(vlanType: vlanConfig.pvlanType);
			//System.log("primaryVlanId: "+pvlanConfig.primaryVlanId);
			//System.log("secondaryVlanId: "+pvlanConfig.secondaryVlanId);
			if (pvlanConfig.primaryVlanId == vlanId){
				vlanType = pvlanConfig.pvlanType;
				break;
			}
		}
	}else{
		System.log("pVLAN Config is null");
	}
}
return vlanType;
}
}
