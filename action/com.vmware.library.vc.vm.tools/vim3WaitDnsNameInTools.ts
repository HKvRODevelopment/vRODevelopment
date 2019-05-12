/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.tools {
export function vim3WaitDnsNameInTools(vm?: VC.VirtualMachine, pollingRate?: number, dnsNameToWait?: string, timeout?: number, addNumberToName?: boolean): void {if (vm == null) throw "ReferenceError: vm is not defined for waiting for the DNS name";
if (vm.name == null) throw "ReferenceError: vm is not initialized for waiting for the DNS name";

timeout = timeout * 60;

while (true) {
	if (vm.guest != null) {
		if (vm.guest.toolsStatus == VcVirtualMachineToolsStatus.toolsOk || vm.guest.toolsStatus == VcVirtualMachineToolsStatus.toolsOld) {
			if (vm.guest.guestState == "running") {
				hostname = vm.guest.hostName;
				if (hostname.indexOf(".") > 0) {
					if (dnsNameToWait.indexOf(".") > 0 && hostname.toLowerCase() == dnsNameToWait.toLowerCase()) {
						break;
					}
					if (dnsNameToWait.indexOf(".") < 0) {
						if (hostname.substring(0, hostname.indexOf(".")).toLowerCase() == dnsNameToWait.toLowerCase()) {
							break;
						}
					}
				}
				else {
					if (dnsNameToWait.indexOf(".") > 0 ) {
						if (dnsNameToWait.substring(0, dnsNameToWait.indexOf(".")).toLowerCase() == hostname.toLowerCase()) {
							break;
						}
					}
					if (dnsNameToWait.indexOf(".") < 0 && hostname.toLowerCase() == dnsNameToWait.toLowerCase()) {
						break;
					}
				}
			}
		}
	}
	// wait the poolingRate
	System.sleep(pollingRate * 1000);
	// test timeout
	timeout -= pollingRate;
	if (timeout <= 0) {
		throw "Timeout: Unable to get a DNS name for the VM before reaching the Timeout";
	}
}

System.log("Found name '" + hostname + "' for VM '" + vm.name + "'");
}
}
