/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
export function getVirtualSerialPortFileBackingInfo(fileName?: string): any {if (fileName == null) throw "ReferenceError: fileName cannot be null";
var backing = new VcVirtualSerialPortFileBackingInfo();
backing.fileName = fileName;
// backing.datastore is not used for configuration. 
return backing;
}
}
