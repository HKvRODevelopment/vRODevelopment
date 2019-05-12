/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
export function getVirtualDiskRawDiskMappingVer1BackingInfo(fileName?: string, compatibilityMode?: string, deviceName?: string, diskMode?: string, lunUuid?: string): any {if (fileName == null) throw "ReferenceError: fileName cannot be null";
var backing = new VcVirtualDiskRawDiskMappingVer1BackingInfo();
backing.fileName = fileName;
// backing.datastore is not used for configuration. 
if (compatibilityMode != null) {
	compatibilityMode = compatibilityMode.toLowerCase();
	checkCompatibilityMode(compatibilityMode);
	backing.compatibilityMode = compatibilityMode;
}
if (deviceName != null) {
	backing.deviceName = deviceName;
}
if (diskMode != null) {
	diskMode = diskMode.toLowerCase();
	checkDiskMode(diskMode);
	backing.diskMode = diskMode;
}
if (lunUuid != null) {
	backing.lunUuid = lunUuid;
}
return backing;


function checkDiskMode(diskMode) {
	if (diskMode == "persistent") return true;
	if (diskMode == "independent_persistent") return true;
	if (diskMode == "independent_nonpersistent") return true;
	if (diskMode == "nonpersistent") return true;
	if (diskMode == "undoable") return true;
	if (diskMode == "append") return true;
	throw "EvalError: diskMode can only be set to persistent, independent_persistent, independent_nonpersistent, nonpersistent, undoable or append";
}

function checkCompatibilityMode(compatibilityMode) {
	if (compatibilityMode == "virtual") return true;
	if (compatibilityMode == "physical") return true;
	throw "EvalError: compatibilityMode can only be set to virtual or physical";	
}
}
}
