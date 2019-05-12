/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage.sdrs {
export function isRuleNameUnique(name?: string, storagePod?: VC.StoragePod): string {var rules = storagePod.podStorageDrsEntry.storageDrsConfig.podConfig.rule;

for (var i in rules) {
	if (rules[i].name == name) {
		return 'Rule with name ' + name + ' already exists';
	}
}

return null;
}
}
