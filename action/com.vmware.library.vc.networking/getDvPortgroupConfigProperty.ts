/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getDvPortgroupConfigProperty(dvPortGroup?: VC.DistributedVirtualPortgroup, property?: string): any {if ( dvPortGroup != null ) {
	try {
		return eval("dvPortGroup.config." + property);
	} catch (e) {
		return "";
	}
} else {
	return "";
}
}
}
