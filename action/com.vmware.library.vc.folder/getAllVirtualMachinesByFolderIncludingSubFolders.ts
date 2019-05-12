/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.folder {
export function getAllVirtualMachinesByFolderIncludingSubFolders(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine> {if(!vmFolder){
	throw "UndefinedParameter: vmFolder mandatory input is not defined.";
}
var allVms = new Array();

getAllVmsInFolder(vmFolder);
return allVms;

function getAllVmsInFolder(folder) {
	var children = folder.childEntity;
	for (var i in children) {
		if (children[i] instanceof VcFolder) {
			getAllVmsInFolder(children[i]);
		}
		if (children[i] instanceof VcVirtualMachine) {
			allVms.push(children[i]);
		}
	}
}


}
}
