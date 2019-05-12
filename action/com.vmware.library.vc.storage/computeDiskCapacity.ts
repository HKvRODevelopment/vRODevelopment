/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage {
export function computeDiskCapacity(host?: VC.HostSystem, diskName?: string): number {if (host != null && diskName != null) {
	var hostDatastoreSystem = VcPlugin.toManagedObject( host, host.configManager.datastoreSystem );
	var hostScsiDisks = hostDatastoreSystem.queryAvailableDisksForVmfs(null);

	for (var disk of hostScsiDisks){
		if (diskName == disk.displayName){
			var capacity = disk.capacity;
			return capacity.block * capacity.blockSize / 1073741824;
			break;
		}
	}
}
return 0;
}
}
