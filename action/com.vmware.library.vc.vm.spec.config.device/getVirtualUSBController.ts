/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualUSBController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, autoConnectDevices?: boolean): any {var device = new VcVirtualUSBController();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualController(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber,busNumber);
if (autoConnectDevices != null) {
	device.autoConnectDevices = autoConnectDevices;
}
return device;
}
}
