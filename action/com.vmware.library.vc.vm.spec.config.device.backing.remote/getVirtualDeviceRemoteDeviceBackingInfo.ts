/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
export function getVirtualDeviceRemoteDeviceBackingInfo(deviceName?: string): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
var backing = new VcVirtualDeviceRemoteDeviceBackingInfo();
backing.deviceName = deviceName;

return backing;
}
}
