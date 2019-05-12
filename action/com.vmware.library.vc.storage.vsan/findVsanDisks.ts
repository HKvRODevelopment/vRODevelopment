/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage.vsan {
export function findVsanDisks(host?: VC.HostSystem, diskNames?: Array<string>): Array<any> {var disks = [];

var vsanDisks = host.configManager.vsanSystem.queryDisksForVsan();
for (var i in diskNames) {
	var diskName = diskNames[i];
	for (var j in vsanDisks) {
		var disk = vsanDisks[j].disk;
		if (diskName == disk.displayName) {
			disks.push(disk);
		}
	}
}

return disks;

}
}
