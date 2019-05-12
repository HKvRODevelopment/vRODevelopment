/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvSwitchConfigProperty(dvSwitch?: VC.VmwareDistributedVirtualSwitch, property?: string): any {if ( dvSwitch != null ) {
	try {
		return eval("dvSwitch.config."+property);
	} catch(e) {
		return "";
	}
} else {
	return "";
}	

}
}
