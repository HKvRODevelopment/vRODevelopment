/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function haEnabledCluster(cluster?: VC.ClusterComputeResource): boolean {return cluster.configurationEx.dasConfig.enabled;
}
}
