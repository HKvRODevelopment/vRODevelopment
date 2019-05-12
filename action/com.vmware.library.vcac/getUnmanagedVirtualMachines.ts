/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getUnmanagedVirtualMachines(host?: vCAC.VCACHost): Array<vCAC.VirtualMachine> {if (host == null) return null;

var virtualMachines = Server.findAllForType("vCAC:VirtualMachine");

var unmanagedVirtualMachines = new Array();

for (var virtualMach ine of virtualMachines) {
	if (virtualMachine.isManaged == false) unmanagedVirtualMachines.push(virtualMachine);
}

return unmanagedVirtualMachines;
}
}
