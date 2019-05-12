/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function getAllHostSystemsOfCluster(cluster?: VC.ClusterComputeResource): Array<VC.HostSystem> {if(!cluster){
	throw "UndefinedParameter: cluster mandatory input is not defined.";
}
return cluster.host;
}
}
