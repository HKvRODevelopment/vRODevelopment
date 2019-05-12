/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualMachineVideoCard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, videoRamSizeInKB?: number): any {var device = new VcVirtualMachineVideoCard();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualDevice(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber);
if (videoRamSizeInKB != null) {
	device.videoRamSizeInKB = videoRamSizeInKB;
}
return device;
}
}
