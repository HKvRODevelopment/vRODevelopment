/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.host {
export function rescanHostHBAs(host?: VC.HostSystem): void {System.log("rescanning HBAs on host '" + host.name + "'... please wait...");
try {
	var myStorageSystem = VcPlugin.convertToVimManagedObject(host,host.configManager.storageSystem);
	task = myStorageSystem.rescanAllHba();
	task = myStorageSystem.rescanVmfs();
	task = myStorageSystem.refreshStorageSystem();
}
catch (ex) {
	System.error("Error when rescanning VMFS. Reason: " + ex);
	throw("Error when rescanning VMFS. Reason: " + ex);
}
}
}
