/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function getAllVMsOfResourcePool(resourcePool?: VC.ResourcePool): Array<VC.VirtualMachine> {var vms = new Array();
getVMsOfPool(resourcePool);
return vms;


function getVMsOfPool(pool) {
	vms = vms.concat(pool.vm);
	var pools = pool.resourcePool;
	if (pools != null) {
		for (var index in pools) {
			if (pools[index] != null)
				getVMsOfPool(pools[index]);
		}
	}
}
}
}
