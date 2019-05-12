/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.power {
export function suspendVM(vm?: VC.VirtualMachine): VC.Task {return vm.suspendVM_Task();
}
}
