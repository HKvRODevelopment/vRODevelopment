/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getAllAvailableHostForVM(vm?: VC.VirtualMachine): Array<VC.HostSystem> {return vm.vimHost.getAllHostSystems();
}
}
