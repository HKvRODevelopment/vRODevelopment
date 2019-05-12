/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function collectPostProvisioningActions(vm?: vCAC.VirtualMachine): Array<string> {return vm.collectPostProvisiningActions();
}
}
