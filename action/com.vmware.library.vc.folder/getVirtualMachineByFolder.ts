/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.folder {
export function getVirtualMachineByFolder(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine> {if(!vmFolder){
	throw "UndefinedParameter: vmFolder mandatory input is not defined.";
}
return System.filterAuthorized(vmFolder.vm);
}
}
