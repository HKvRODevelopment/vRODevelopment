/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.power {
export function startVM(vm?: VC.VirtualMachine, host?: VC.HostSystem): VC.Task {return vm.powerOnVM_Task(host);
}
}
