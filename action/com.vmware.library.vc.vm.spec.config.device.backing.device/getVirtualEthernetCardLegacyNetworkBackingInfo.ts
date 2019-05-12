/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
export function getVirtualEthernetCardLegacyNetworkBackingInfo(deviceName?: string): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
var backing = new VcVirtualEthernetCardLegacyNetworkBackingInfo();
backing.deviceName = deviceName;
return backing;
}
}
