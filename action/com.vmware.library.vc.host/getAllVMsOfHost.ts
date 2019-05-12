/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.host {
export function getAllVMsOfHost(host?: VC.HostSystem): Array<VC.VirtualMachine> {if(!host){
	throw "UndefinedParameter: host mandatory input is not defined.";
}
return host.vm;
}
}
