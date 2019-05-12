/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function renameResourcePool(resourcePool?: VC.ResourcePool, newName?: string): VC.Task {return resourcePool.rename_Task(newName);
}
}
