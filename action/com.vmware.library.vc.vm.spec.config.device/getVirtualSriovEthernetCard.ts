/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualSriovEthernetCard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any {var device = new VcVirtualSriovEthernetCard();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualEthernetCard(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber,addressType,macAddress,wakeOnLanEnabled);
return device;
}
}
