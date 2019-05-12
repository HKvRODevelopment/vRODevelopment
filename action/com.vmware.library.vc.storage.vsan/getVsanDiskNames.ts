/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage.vsan {
export function getVsanDiskNames(host?: VC.HostSystem, state?: string, ssd?: boolean): Array<string> {var diskNames = [];

var vsanDisks = host.configManager.vsanSystem.queryDisksForVsan();
for (var i in vsanDisks) {
	var vsanDisk = vsanDisks[i];
	if (state == undefined || state == null || vsanDisk.state == state) {
		var disk = vsanDisk.disk;
		if (ssd == undefined || ssd == null || disk.ssd == ssd) {
			diskNames.push(disk.displayName);
		}
	}
}

return diskNames;

}
}
