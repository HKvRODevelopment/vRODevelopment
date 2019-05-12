/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function createResourcePoolForCluster(cluster?: any, name?: string): VC.ResourcePool {return com.vmware.library.vc.resourcePool.createResourcePool(cluster.resourcePool,name);
}
}
