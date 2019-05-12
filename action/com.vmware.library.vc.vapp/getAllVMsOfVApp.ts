/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vapp {
export function getAllVMsOfVApp(vapp?: VC.VirtualApp): Array<VC.VirtualMachine> {if(!vapp){
	throw "UndefinedParameter: vapp mandatory input is not defined.";
}
return vapp.vm;
}
}
