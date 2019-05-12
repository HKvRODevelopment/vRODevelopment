/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage {
export function listAvailableDisksForVMFS(host?: VC.HostSystem): Array<string> {var diskNames = [];

if (host != null) {
	var hostDatastoreSystem = VcPlugin.toManagedObject( host, host.configManager.datastoreSystem );
	var hostScsiDisks = hostDatastoreSystem.queryAvailableDisksForVmfs(null);

	for (var disk of hostScsiDisks){
		diskNames.push(disk.displayName);
	}
}
return diskNames;
}
}
