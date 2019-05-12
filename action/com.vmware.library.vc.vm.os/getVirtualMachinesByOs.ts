/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.os {
export function getVirtualMachinesByOs(os?: VC.VirtualMachineGuestOsIdentifier): Array<VC.VirtualMachine> {// Get all Virtual Machines for all vCenter connections defined for this plugin
var allVms = VcPlugin.getAllVirtualMachines();
var vmsForOs = new Array();
// Check if the VM has required os
for (var i in allVms) {
	if (allVms[i].summary.guest.guestId == os.id) {
		vmsForOs.push(allVms[i]);
		System.log( "VM: " + allVms[i].name + " has os " + os.id);
	}
}	
return vmsForOs;

}
}
