/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function isMultiMachine(host?: vCAC.VCACHost, vm?: vCAC.VirtualMachine): boolean {if (vm == null) {
	return false;
}
var entityVm  = vm.getEntity();
var childEntities = entityVm.getLink(host , "ChildVirtualMachines");
return childEntities != null && childEntities.length > 0;
}
}
