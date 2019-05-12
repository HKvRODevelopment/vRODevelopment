/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function getAllVMsOfCluster(cluster?: VC.ClusterComputeResource): Array<VC.VirtualMachine> {var vms = new Array();
getVMsOfPool(cluster.resourcePool);
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
