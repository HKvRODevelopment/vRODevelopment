/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function linkedCloneVM(vm?: VC.VirtualMachine, folder?: VC.VmFolder, name?: string, spec?: any, snapshot?: VC.VirtualMachineSnapshot): VC.Task {try {
	checkParams();


	spec.location.diskMoveType = "createNewChildDiskBacking";
	spec.snapshot = snapshot.reference; 
	
	return vm.cloneVM_Task(folder, name, spec);
} catch (ex) {
	throw "Unable to start clone operation: " + ex;
}

function checkParams() {
	if (vm == null) throw "vm cannot be null";
	if (folder == null) throw "folder cannot be null";
	if (name == null || name == "") throw "name cannot be null";
	if (spec == null) throw "spec cannot be null";
	if ((spec instanceof VcVirtualMachineCloneSpec) == false) throw "spec must be of type VcVirtualMachineCloneSpec";
}
}
}
