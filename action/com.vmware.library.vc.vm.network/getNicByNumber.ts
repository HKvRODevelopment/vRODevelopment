/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.network {
export function getNicByNumber(vm?: VC.VirtualMachine, nicPosition?: number): any {var devices = vm.config.hardware.device;
if (nicPosition <= 0 || nicPosition > 5) nicPosition = 1;
var actualPos = 1;
for (var i in devices) {
	if (com.vmware.library.vc.vm.network.isSupportedNic(devices[i])) {
		if (actualPos++ == nicPosition) {
			System.log("Found a Virtual Ethernet card at " + i + ". Key: " + devices[i].key);
			return devices[i];
		}
	}

}
return null
}
}
