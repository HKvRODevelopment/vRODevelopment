/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function getAllVMs(): Array<VC.VirtualMachine> {return VcPlugin.getAllVirtualMachines();
}
}
