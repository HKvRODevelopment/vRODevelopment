/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore.files {
export function deleteFile(datastore?: VC.Datastore, filePath?: string): void {try {
	if (datastore == null) {
		throw "datastore parameter cannot be null";
	}
	if (filePath[0] != "[") {
		filePath = "[" + datastore.name + "] " + filePath;
	}
	datastore.browser.deleteFile(filePath);
}
catch (e) {
	System.error("Error when deleting file " + filePath + ": " + e);
	Server.error("Error when deleting file " + filePath, e);
	throw e;
}
}
}
