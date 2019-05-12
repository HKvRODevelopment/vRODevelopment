/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd {
export function findVcObjectsByMoRefId(type?: string, moRefId?: string): Array<any> {var foundObjects = [];

if (moRefId) {
	var sdkConnections = VcPlugin.allSdkConnections;
	for (var i in sdkConnections) {
		var host = sdkConnections[i];
		var id = System.getObjectId(host) + '/' + moRefId;
		var object = Server.findForType(type, id);
		if (object) {
			foundObjects.push(object);
		}
	}
}

return foundObjects;
}
}
