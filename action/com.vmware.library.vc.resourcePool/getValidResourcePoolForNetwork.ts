/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function getValidResourcePoolForNetwork(network?: VC.Network): Array<VC.ResourcePool> {var hosts = network.host;
var resourcePools = new Array();
for (var i in hosts){
	var parent = hosts[i].parent;
	while(! (parent instanceof VcComputeResource || parent instanceof VcClusterComputeResource)){
		parent = parent.parent;
	}
	
	var pool = parent.resourcePool;
	resourcePools.push(pool);
	var childs = com.vmware.library.vc.resourcePool.getAllChildResourcePool(pool);
	for (var j in childs){
		resourcePools.push(childs[j]);
	}
	
}

return resourcePools;

}
}
