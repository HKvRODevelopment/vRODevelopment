/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function vsanEnabledCluster(cluster?: VC.ClusterComputeResource): boolean {return cluster.configurationEx.vsanConfigInfo.enabled;
}
}
