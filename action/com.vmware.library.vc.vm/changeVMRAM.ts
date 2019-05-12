/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function changeVMRAM(vm?: VC.VirtualMachine, memory?: number): VC.Task {var configSpec = new VcVirtualMachineConfigSpec();
configSpec.memoryMB = memory;
var task = vm.reconfigVM_Task( configSpec );
return task;

}
}
