/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function destroyVm(vm?: VC.VirtualMachine): VC.Task {if (vm.summary.runtime.powerState.value != "poweredOff") {
	throw "VmStateError: The VM must be powered off before deletion";
}
return vm.destroy_Task();

}
}
