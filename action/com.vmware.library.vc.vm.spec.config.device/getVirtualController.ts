/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualController(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any {device = com.vmware.library.vc.vm.spec.config.device.getVirtualDevice(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber);
device.busNumber = busNumber;
return device;
}
}
