/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualSCSIController(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any {device = com.vmware.library.vc.vm.spec.config.device.getVirtualController(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber,busNumber);
if (hotAddRemove != null) {
	device.hotAddRemove = hotAddRemove;
}
if (scsiCtlrUnitNumber != null) {
	device.scsiCtlrUnitNumber = scsiCtlrUnitNumber;
}
device.sharedBus = VcVirtualSCSISharing.fromString(sharedBus.name);
return device;
}
}
