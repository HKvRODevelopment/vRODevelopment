/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.os {
export function getAllLinuxVMs(): Array<VC.VirtualMachine> {// Get all Virtual Machines for all vCenter connections defined for this plugin
var allVms = VcPlugin.getAllVirtualMachines();
var vmsForOs = new Array();
// Check if the VM has required os
for (var vm of allVms) {
	if(vm.config){
		var guestId = vm.config.guestId;
		//Add the Debian GNU/Linux
		if(guestId.substr(0,6) == "debian"){
			vmsForOs.push(vm);
		}
		//Add the Mandriva Linux
		if(guestId.substr(0,8) == "mandriva"){
			vmsForOs.push(vm);
		}
		//Add the Novell Linux Desktop 9
		if(guestId == "nld9Guest"){
			vmsForOs.push(vm);
		}
		//Add the other Linux
		if(guestId.indexOf("Linux") != -1){
			vmsForOs.push(vm);
		}
		//Add the Red Hat Linux
		if(guestId.substr(0,6) == "redhat"){
			vmsForOs.push(vm);
		}
		//Add the Red Hat Entreprise Linux
		if(guestId.substr(0,4) == "rhel"){
			vmsForOs.push(vm);
		}
		//Add the Suse Linux Enterprise Server
		if(guestId.substr(0,4) == "sles"){
			vmsForOs.push(vm);
		}
		//Add the Suse Linux
		if(guestId.substr(0,4) == "suse"){
			vmsForOs.push(vm);
		}
		//Add the Ubuntu Linux
		if(guestId.substr(0,6) == "ubuntu"){
			vmsForOs.push(vm);
		}
		//Add the CentOS Linux
		if(guestId.substr(0,6) == "centos"){
			vmsForOs.push(vm);
		}
	}
}		
return vmsForOs;

}
}
