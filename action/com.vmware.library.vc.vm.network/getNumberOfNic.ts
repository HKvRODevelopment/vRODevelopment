/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.network {
export function getNumberOfNic(vm?: VC.VirtualMachine): number {var devices = vm.config.hardware.device;
var result = 0;
for (var i in devices) {
    if (com.vmware.library.vc.vm.network.isSupportedNic(devices[i])) {
		result++;
	}

}
return result;
}
}
