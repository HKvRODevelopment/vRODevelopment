/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore.files {
export function uploadFileToDatastore(datacenter?: VC.Datacenter, datastore?: VC.Datastore, srcFilePath?: string, destFilePath?: string): void {System.log("Uploading file: " + srcFilePath + " to datastore: " + datastore.name);

var vcHost = datastore.sdkConnection;
var fileManager = vcHost.fileManager;
try {
	var isUploaded = fileManager.uploadFileToDatastore(datacenter, datastore, srcFilePath, destFilePath);
	if (isUploaded) {
		System.log("Uploading finished successfully.");
	} else {
		System.log("Uploading failed.");
		throw "Failed to upload the file: " + srcFilePath;
	}
} catch (err) {
	System.log("Uploading failed. Reason: " + err);
	throw "Failed to upload the file: " + srcFilePath + " Reason: " + err;
}



}
}
