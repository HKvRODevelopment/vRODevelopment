/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function customizeVM(vm?: VC.VirtualMachine, customizationSpec?: any): VC.Task {try {
	checkParams();
	return vm.customizeVM_Task(customizationSpec)
}
catch (ex) {
	throw "Unable to start clone operation: " + ex;
}

function checkParams() {
	if (vm == null) throw "vm cannot be null";
	if (customizationSpec == null) throw "customizationSpec cannot be null";
	if ((customizationSpec instanceof VcCustomizationSpec) == false) throw "customizationSpec must be of type VcCustomizationSpec";
}
}
}
