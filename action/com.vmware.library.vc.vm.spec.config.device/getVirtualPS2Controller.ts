/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualPS2Controller(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any {var device = new VcVirtualPS2Controller();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualController(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber,busNumber);
return device;
}
}
