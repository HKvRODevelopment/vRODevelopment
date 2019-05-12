/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getvSwitchProperty(host?: VC.HostSystem, name?: string, propName?: string): string {if ( host != null ) {
	var temp = VcPlugin.toManagedObject(host, host.configManager.networkSystem).networkInfo.vswitch;
	if ( temp != null ) {
		for (var i in temp) {
			if (temp[i].name == name) {
				var spec = temp[i].spec;
				try {
					return eval("spec." + propName);
				} catch (e) {
					return "";
				}
			}			
		}
	}
}

}
}
