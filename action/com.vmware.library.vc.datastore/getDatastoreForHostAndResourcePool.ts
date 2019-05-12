/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getDatastoreForHostAndResourcePool(host?: VC.HostSystem, pool?: VC.ResourcePool, vm?: VC.VirtualMachine): Array<VC.Datastore> {var result = new Array();
var keys = new Properties();
if (host == null && pool == null) {
	result = com.vmware.library.vc.datastore.getAllDatastoreOnVimHost(vm.sdkConnection);
}
else {
	if (host != null) {
		addDatastore(host.datastore);
	}
	if (pool != null) {
		computeResource = pool.parent;
		while ( ! ((computeResource instanceof VcClusterComputeResource) || (computeResource instanceof VcComputeResource))) {
			computeResource = computeResource.parent;
		}
		addDatastore(computeResource.datastore);
	}
}
return result;



function addDatastore(datastores) {
	for (var i in datastores) {
		if (keys.get(datastores[i].sdkId) == null) {
			keys.put(datastores[i].sdkId, datastores[i].sdkId);
			result.push(datastores[i]);
		}
	}
}
}
}
