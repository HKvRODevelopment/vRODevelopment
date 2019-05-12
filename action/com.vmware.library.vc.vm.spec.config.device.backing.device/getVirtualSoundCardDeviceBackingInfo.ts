/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
export function getVirtualSoundCardDeviceBackingInfo(deviceName?: string): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
var backing = new VcVirtualSoundCardDeviceBackingInfo();
backing.deviceName = deviceName;
return backing;
}
}
