/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.pipe {
export function getVirtualSerialPortPipeBackingInfo(pipeName?: string, endpoint?: string, noRxLoss?: boolean): any {if (pipeName == null) throw "ReferenceError: pipeName cannot be null";
if (endpoint == null) throw "ReferenceError: endpoint cannot be null";
var backing = new VcVirtualSerialPortPipeBackingInfo();
backing.pipeName = pipeName;
backing.endpoint = endpoint;
if (noRxLoss != null)
	backing.noRxLoss = noRxLoss;
return backing;
}
}
