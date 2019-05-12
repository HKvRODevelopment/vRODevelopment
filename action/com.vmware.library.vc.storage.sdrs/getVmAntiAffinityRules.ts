/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage.sdrs {
export function getVmAntiAffinityRules(storagePod?: VC.StoragePod): Array<string> {var rules = storagePod.podStorageDrsEntry.storageDrsConfig.podConfig.rule;
var ret = new Array();
for (var i in rules) {
	ret.push(rules[i].name);
}
return ret;
}
}
