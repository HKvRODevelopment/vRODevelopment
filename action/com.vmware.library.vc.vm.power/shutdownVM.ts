/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.power {
export function shutdownVM(vm?: VC.VirtualMachine, timeout?: number, polling?: number): void {if (timeout == null) {
	timeout = 0;
}
timeout *= 60;

vm.shutdownGuest();
while(true){
	var status = vm.runtime.powerState.value;
	if(status == "poweredOff") {
		break;
	}
	if (timeout <= 0) {
		throw "Timeout: VM '" + vm.name + "' is still powered on";
	}
	timeout -= polling;
	System.sleep(polling * 1000);
}

}
}
