/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function destroyResourcePoolAndWait(resourcePool?: VC.ResourcePool): void {var task = com.vmware.library.vc.resourcePool.destroyResourcePool(resourcePool);
com.vmware.library.vc.basic.vim3WaitTaskEnd(task,false,1);
}
}
