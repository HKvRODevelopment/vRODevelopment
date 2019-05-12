/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage.sdrs {
export function getVmdkAntiAffinityRules(storagePod?: VC.StoragePod): Array<string> {var vmCfg = storagePod.podStorageDrsEntry.storageDrsConfig.vmConfig;
var ret = new Array();
for (var i in vmCfg) {
	if (vmCfg[i].intraVmAntiAffinity != null) {
		ret.push(vmCfg[i].intraVmAntiAffinity.name);
	}
}
return ret;
}
}
