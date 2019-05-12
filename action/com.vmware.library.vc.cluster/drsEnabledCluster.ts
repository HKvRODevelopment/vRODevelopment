/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function drsEnabledCluster(cluster?: VC.ClusterComputeResource): boolean {return cluster.configuration.drsConfig.enabled;
}
}
