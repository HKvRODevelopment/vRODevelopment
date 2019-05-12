/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
export function getVirtualCdromPassthroughBackingInfo(deviceName?: string, exclusive?: boolean): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
if (exclusive == null) throw "ReferenceError: exclusive cannot be null";
var backing = new VcVirtualCdromPassthroughBackingInfo();
backing.deviceName = deviceName;
backing.exclusive = exclusive;
return backing;
}
}
