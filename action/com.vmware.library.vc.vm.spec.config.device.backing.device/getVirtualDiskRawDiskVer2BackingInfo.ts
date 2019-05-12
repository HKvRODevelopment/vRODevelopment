/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
export function getVirtualDiskRawDiskVer2BackingInfo(deviceName?: string, descriptorFileName?: string): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
if (descriptorFileName == null) throw "ReferenceError: descriptorFileName cannot be null";
var backing = new VcVirtualDiskRawDiskVer2BackingInfo();
backing.deviceName = deviceName;
backing.descriptorFileName = descriptorFileName;
return backing;
}
}
