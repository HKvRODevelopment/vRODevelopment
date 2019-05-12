/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualSerialPort(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, yieldOnPoll?: boolean): any {var device = new VcVirtualSerialPort();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualDevice(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber);
if (yieldOnPoll == null) {
	throw "ReferenceError: yieldOnPoll cannot be null";
}
device.yieldOnPoll = yieldOnPoll;
return device;
}
}
