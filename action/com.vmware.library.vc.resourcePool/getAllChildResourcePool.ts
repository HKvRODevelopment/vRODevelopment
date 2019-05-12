/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function getAllChildResourcePool(resourcePool?: VC.ResourcePool): Array<VC.ResourcePool> {var result = new Array();

getRPfromRP(resourcePool);
return result;


function getRPfromRP(rp) {
	result = result.concat(rp.resourcePool);
	for (var i in rp.resourcePool) {
		getRPfromRP(rp.resourcePool[i]);
	}
}
}
}
