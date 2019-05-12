/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function describeVirtualMachine(vm?: VC.VirtualMachine): string {var text = "VM '" + vm.name + " is '" + vm.runtime.powerState.value + "'" ;
return text;
}
}
