/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage {
export function isAPICompatible(host?: VC.HostSystem, requiredVersion?: string): boolean {var aboutInfo = host.sdkConnection.aboutInfo;

if(!aboutInfo) {
	// In case of vSphere API 4.0
	aboutInfo = host.sdkConnection.about;
}

var apiVersion = aboutInfo.apiVersion;
System.log("vCenter Server API version " + apiVersion);

var apiVersionArray = apiVersion.split('.');
var requiredVersionArray = requiredVersion.split('.');

for (var i = 0; i < requiredVersionArray.length; i++) {
	if( i < apiVersionArray.length ) {
		if (parseInt(requiredVersionArray[i], 10) > parseInt(apiVersionArray[i], 10) ) {
			return false;
		}
	} else {
		break;
	}
}

return true;
}
}
