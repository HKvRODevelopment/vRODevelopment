/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.tools {
export function vim3WaitForPrincipalIP(vm?: VC.VirtualMachine, timeout?: number, interval?: number): string {if (vm == null) throw "ReferenceError: vm is not defined for waiting for the DNS name";
if (vm.name == null) throw "ReferenceError: vm is not initialized for waiting for the DNS name";
timeout = timeout * 60;
// wait the tools are up and Ok or Old
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
	System.sleep(interval*1000);
	// test timeout
	timeout -= interval;
	if (timeout <= 0) {
		throw "Timeout: Timout waiting for tools to be started on a running OS";
	}
}

System.log("VMware tools on VM " + vm.name + " are in state: " + vm.guest.toolsStatus + " and guest is " + vm.guest.guestState);

while(timeout >0){
	var primaryIpAddress;
	if (vm != null && vm.summary != null && vm.summary.guest != null)
		primaryIpAddress = vm.summary.guest.ipAddress;
	if ((primaryIpAddress != null) && (primaryIpAddress != "")) {
		System.log("Found '"+primaryIpAddress+"' as principal address");
		return primaryIpAddress;
		}
	else {
		System.log("Waiting on principal IP for vm '"+vm.name+"'");
	}
	System.sleep(interval*1000);
	// test timeout
	timeout -= interval;
	if (timeout <= 0) {
		throw "Timeout: Timout waiting for IP address on VM " + vm.name;
	}
}
}
}
