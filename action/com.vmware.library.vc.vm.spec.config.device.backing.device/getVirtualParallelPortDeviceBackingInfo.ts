/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
export function getVirtualParallelPortDeviceBackingInfo(deviceName?: string): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
var backing = new VcVirtualParallelPortDeviceBackingInfo();
backing.deviceName = deviceName;
return backing;
}
}
