/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
export function getVirtualFloppyRemoteDeviceBackingInfo(deviceName?: string): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
var backing = new VcVirtualFloppyRemoteDeviceBackingInfo();
backing.deviceName = deviceName;

return backing;
}
}
