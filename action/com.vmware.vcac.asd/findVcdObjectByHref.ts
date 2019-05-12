/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd {
export function findVcdObjectByHref(type?: string, vcdObjectHref?: string): any {var VCD_DELIMETER = '////';

if (vcdObjectHref && type) {	
	var hosts = VclHostManager.getHostList();
	for (var i in hosts) {
		var host = hosts[i];
		var hostId = System.getObjectId(host);
		var idx = hostId.indexOf(VCD_DELIMETER);
		if (idx > -1) {
			hostId = hostId.substring(0, idx);
		}
		var vcdObjectId = hostId + VCD_DELIMETER + vcdObjectHref;
		
		var vcdObject = Server.findForType(type, vcdObjectId);
		if (vcdObject) {
			return vcdObject;
		}
	}
}

return null;

}
}
