/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function getAllResourcePool(): Array<VC.ResourcePool> {var vimHosts = VcPlugin.vimHosts;
var pools = new Array();

for (var i in vimHosts) {
	var computeResource = new Array();
	computeResource = computeResource.concat(com.vmware.library.vc.cluster.getAllClusterComputeResourceForVimHost(vimHosts[i]));
	computeResource = computeResource.concat(com.vmware.library.vc.cluster.getAllComputeResourceForVimHost(vimHosts[i]));
	
	for (var j in computeResource) {
		getAllRP(computeResource[j].resourcePool);
	}
}

return pools;

function getAllRP(rp) {
	pools.push(rp);
	for (var k in rp.resourcePool) {
		getAllRP(rp.resourcePool[k]);
	}
}
}
}
