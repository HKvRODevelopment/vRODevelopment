/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.snapshot {
export function createSnapshot(vm?: VC.VirtualMachine, name?: string, description?: string, memory?: boolean, quiesce?: boolean): VC.Task {if (vm == null) {
	throw "ReferenceError: VM cannot be null";
}
if (name == null || name == "") {
	throw "ReferenceError: Name cannot be null or empty string";
}
return vm.createSnapshot_Task(name, description, memory, quiesce);
}
}
