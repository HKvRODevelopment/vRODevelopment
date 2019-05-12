/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.power {
export function shutdownVMAndForce(vm?: VC.VirtualMachine, timeout?: number, polling?: number): void {try {
	com.vmware.library.vc.vm.power.shutdownVM(vm, timeout, polling);
}
catch (ex) {
	System.log(ex);
	var task = com.vmware.library.vc.vm.power.forcePowerOff(vm);
	com.vmware.library.vc.basic.vim3WaitTaskEnd(task, false, 1);
}

}
}
