/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function renameResourcePoolAndWait(resourcePool?: VC.ResourcePool, newName?: string): void {var task = com.vmware.library.vc.resourcePool.renameResourcePool(resourcePool,newName);
com.vmware.library.vc.basic.vim3WaitTaskEnd(task,false,1);
}
}
