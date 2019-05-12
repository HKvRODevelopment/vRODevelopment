/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function getComputeResourceOfVm(vm?: VC.VirtualMachine): any {var parent = vm.resourcePool;
while (parent != null && ! (parent instanceof VcClusterComputeResource) && ! (parent instanceof VcComputeResource)) {
	parent = parent.parent;
}
return parent;
}
}
