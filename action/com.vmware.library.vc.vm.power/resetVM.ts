/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.power {
export function resetVM(vm?: VC.VirtualMachine): VC.Task {return vm.resetVM_Task();
}
}
