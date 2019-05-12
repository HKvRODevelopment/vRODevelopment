/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualPCIController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any {var device = new VcVirtualPCIController();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualController(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber,busNumber);
return device;
}
}
