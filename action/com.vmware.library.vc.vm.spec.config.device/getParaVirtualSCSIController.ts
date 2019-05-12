/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getParaVirtualSCSIController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any {device = new VcParaVirtualSCSIController();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualSCSIController(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber,busNumber,hotAddRemove,scsiCtlrUnitNumber,sharedBus)
return device;
}
}
