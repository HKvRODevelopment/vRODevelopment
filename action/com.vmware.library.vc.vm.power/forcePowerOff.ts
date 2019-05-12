/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.power {
export function forcePowerOff(vm?: VC.VirtualMachine): VC.Task {System.log("Force stop of '"+vm.name+"'");
return vm.powerOffVM_Task();
}
}
