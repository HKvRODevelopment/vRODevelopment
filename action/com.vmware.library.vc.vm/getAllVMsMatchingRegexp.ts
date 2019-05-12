/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function getAllVMsMatchingRegexp(regexp?: string): Array<VC.VirtualMachine> {// Get all Virtual Machines for all vCenter connections defined for this plugin
var allVms = VcPlugin.getAllVirtualMachines();
var vms = new Array();
// Check if the VM match the regexp
for (var i in allVms) {
	if (allVms[i].name.match(regexp)) {
		vms.push(allVms[i]);
	}
}	
return vms;
}
}
