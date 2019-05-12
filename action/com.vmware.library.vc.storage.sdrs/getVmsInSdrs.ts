/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage.sdrs {
export function getVmsInSdrs(dc?: VC.StoragePod, all?: boolean): Array<VC.VirtualMachine> {var ret = new Array();

if (all) {
	var vmCfgArray = dc.podStorageDrsEntry.storageDrsConfig.vmConfig;
	for (var i in vmCfgArray) {
		ret[i] = VcPlugin.toManagedObject(dc, vmCfgArray[i].vm);
	}
}

var datastoreArray = dc.childEntity;
for (var i in datastoreArray) {
	var vmArray = datastoreArray[i].vm;
	if (vmArray == null) {
		continue;
	}
	for (var k in vmArray) {
		var found = false;
		for (var j in ret) {
			if (ret[j] == vmArray[k]) {
				found = true;
				break;
			}
		}
		if (!found) {
			ret.push(VcPlugin.toManagedObject(dc, vmArray[k]));
		}
	}
}

return ret;
}
}
