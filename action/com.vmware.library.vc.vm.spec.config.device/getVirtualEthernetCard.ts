/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualEthernetCard(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any {device = com.vmware.library.vc.vm.spec.config.device.getVirtualDevice(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber);
if (addressType != null) {
	if (addressType == "Manual" || addressType == "Generated" || addressType == "Assigned") {
		device.addressType = addressType;
	}
	else {
		throw "EvalError: addressType value must be 'Manual', 'Generated' or 'Assigned'";
	}	
}
if (macAddress != null) {
	device.macAddress = macAddress;
}
if (wakeOnLanEnabled != null) {
	device.wakeOnLanEnabled = wakeOnLanEnabled;
}
return device;
}
}
