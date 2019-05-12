/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function findVcConnectionById(id?: string): VC.SdkConnection {var sdkConnections = VcPlugin.allSdkConnections;
for (var sdkConnection of sdkConnections) {
	var uuid = sdkConnection.aboutInfo.instanceUuid;
	if (uuid == id) {
		return sdkConnection;
	}
}
}
}
