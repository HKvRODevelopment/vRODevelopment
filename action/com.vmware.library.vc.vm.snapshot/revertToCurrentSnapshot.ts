/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.snapshot {
export function revertToCurrentSnapshot(vm?: VC.VirtualMachine, host?: VC.HostSystem): VC.Task {if (vm == null) {
	throw "ReferenceError: VM cannot be null";
}
return vm.revertToCurrentSnapshot_Task(host);
}
}
