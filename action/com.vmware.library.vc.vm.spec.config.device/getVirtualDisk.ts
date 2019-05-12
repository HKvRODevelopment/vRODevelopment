/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualDisk(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, capacityInKB?: number, shares?: any): any {var device = new VcVirtualDisk();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualDevice(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber);
if (capacityInKB == null) throw "ReferenceError: capacityInKB cannot be null";
device.capacityInKB = capacityInKB;
if (shares != null){
	if (shares instanceof VcSharesInfo) {
		device.shares = shares;
	}
	else {
		throw "TypeError: shares must be of type 'VcSharesInfo'";
	}
}
return device;
}
}
