/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function destroyResourcePool(resourcePool?: VC.ResourcePool): VC.Task {return resourcePool.destroy_Task();
}
}
