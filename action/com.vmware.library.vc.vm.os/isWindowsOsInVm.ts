/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.os {
export function isWindowsOsInVm(vm?: VC.VirtualMachine): boolean {var guestId = vm.config.guestId;
System.log(guestId.substring(0,3))
return (guestId.substring(0,3) == "win");
}
}
