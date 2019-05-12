/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
export function getVirtualDiskFlatVer2BackingInfo(fileName?: string, diskMode?: string, split?: boolean, thinProvisioned?: boolean, writeThrough?: boolean): any {if (fileName == null) throw "ReferenceError: fileName cannot be null";
checkDiskMode(diskMode);
var backing = new VcVirtualDiskFlatVer2BackingInfo();
backing.fileName = fileName;
// backing.datastore is not used for configuration. 
backing.diskMode = diskMode;
if (split != null) {
	backing.split = split;
}
if (thinProvisioned != null) {
	backing.thinProvisioned = thinProvisioned;
}
if (writeThrough != null) {
	backing.writeThrough = writeThrough;
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
}
}
