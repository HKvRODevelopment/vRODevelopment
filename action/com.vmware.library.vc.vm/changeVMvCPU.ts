/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function changeVMvCPU(vm?: VC.VirtualMachine, vcpu?: number): VC.Task {var configSpec = new VcVirtualMachineConfigSpec();
configSpec.numCPUs = vcpu;
var task = vm.reconfigVM_Task( configSpec );
return task;

}
}
