/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
export function getVirtualPointingDeviceDeviceBackingInfo(deviceName?: string, hostPointingDevice?: VC.VirtualPointingDeviceHostChoice): any {if (deviceName == null) throw "ReferenceError: deviceName cannot be null";
var backing = new VcVirtualPointingDeviceDeviceBackingInfo();
backing.deviceName = deviceName;
if (hostPointingDevice != null) {
	backing.hostPointingDevice = hostPointingDevice.name;
}
return backing;


}
}
