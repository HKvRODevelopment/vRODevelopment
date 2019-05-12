/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.snapshot {
export function removeAllSnapshot(vm?: VC.VirtualMachine): VC.Task {if (vm == null) {
	throw "ReferenceError: VM cannot be null";
}
return vm.removeAllSnapshots_Task();
}
}
