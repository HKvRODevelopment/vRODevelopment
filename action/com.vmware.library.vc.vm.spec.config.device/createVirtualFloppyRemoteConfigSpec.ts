/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function createVirtualFloppyRemoteConfigSpec(): any {// Connectable info for floppy
var connectInfo = new VcVirtualDeviceConnectInfo();
connectInfo.allowGuestControl = true;
connectInfo.connected = false;
connectInfo.startConnected = false;
// Create floppy BackingInfo
var backingInfo = new VcVirtualFloppyRemoteDeviceBackingInfo();
backingInfo.deviceName = "/dev/fd0";
var floppy = new VcVirtualFloppy();
floppy.backing = backingInfo;
floppy.unitNumber = 0;
floppy.connectable = connectInfo;
// Create floppy ConfigSpec
var deviceConfigSpec = new VcVirtualDeviceConfigSpec();
deviceConfigSpec.device = floppy;
deviceConfigSpec.operation = VcVirtualDeviceConfigSpecOperation.add;

return deviceConfigSpec;

}
}
