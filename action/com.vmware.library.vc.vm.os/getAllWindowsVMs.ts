/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.os {
export function getAllWindowsVMs(): Array<VC.VirtualMachine> {// Get all Virtual Machines for all vCenter connections defined for this plugin
var allVms = VcPlugin.getAllVirtualMachines();
var vmsForOs = new Array();
// Check if the VM has required os
for (var vm of allVms) {
	if(vm.config){
		var guestId = vm.config.guestId;
		if(guestId.substring(0,3) == "win"){
			vmsForOs.push(vm);
		}
	}
}	
return vmsForOs;

}
}
