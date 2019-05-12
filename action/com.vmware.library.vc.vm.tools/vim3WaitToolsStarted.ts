/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.tools {
export function vim3WaitToolsStarted(vm?: VC.VirtualMachine, pollingRate?: number, timeout?: number): void {if (vm == null) throw "ReferenceError: vm is not defined for waiting for the DNS name";
if (vm.name == null) throw "ReferenceError: vm is not initialized for waiting for the DNS name";

timeout = timeout * 60;

while (true) {
	if (vm.guest != null) {
		if (vm.guest.toolsStatus != null && vm.guest.toolsStatus == VcVirtualMachineToolsStatus.toolsOk) {
			System.log("toolsOK");
		}
		if (vm.guest.toolsStatus != null && vm.guest.toolsStatus == VcVirtualMachineToolsStatus.toolsOld) {
			System.log("toolsOld");
		}
		if (vm.guest.toolsStatus != null && (vm.guest.toolsStatus == VcVirtualMachineToolsStatus.toolsOk || vm.guest.toolsStatus == VcVirtualMachineToolsStatus.toolsOld)) {
			if (vm.guest.guestState == "running") {
				break;
			}
		}
	}
	else {
		System.log("vm.guest is null");
	}	

	// wait the poolingRate
	System.sleep(pollingRate*1000);
	// test timeout
	timeout -= pollingRate;
	if (timeout <= 0) {
		throw "Timeout: Timout waiting for tools to be started on a running OS";
	}
}

System.log("VMware tools on VM " + vm.name + " are in state: " + vm.guest.toolsStatus.value + " and guest is " + vm.guest.guestState);
}
}
