/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function getNetworkForCluster(host?: VC.HostSystem, pool?: VC.ResourcePool): Array<VC.Network> {if (pool != null) {
	var cluster = pool.parent;
	while ( ! (cluster instanceof VcClusterComputeResource) && ! (cluster instanceof VcComputeResource)) {
		cluster = cluster.parent;
	}
	return cluster.network;
}
else if (host != null)
	return host.network;
else
	return new Array();
}
}
