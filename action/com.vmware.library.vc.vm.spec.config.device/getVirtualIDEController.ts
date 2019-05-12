/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualIDEController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any {var device = new VcVirtualIDEController();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualController(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber,busNumber);
return device;
}
}
