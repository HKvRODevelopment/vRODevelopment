/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config {
export function getVirtualDeviceConnectInfo(allowGuestControl?: boolean, connected?: boolean, startConnected?: boolean): any {if (allowGuestControl == null) throw "ReferenceError: Creating VirtualDeviceConnectInfo, [allowGuestControl cannot be null]";
if (connected == null) throw "ReferenceError: Creating VirtualDeviceConnectInfo, [connected cannot be null]";
if (startConnected == null) throw "ReferenceError: Creating VirtualDeviceConnectInfo, [startConnected cannot be null]";
var info = new VcVirtualDeviceConnectInfo();
info.allowGuestControl = allowGuestControl;
info.connected = connected;
info.startConnected = startConnected;
return info;
}
}
