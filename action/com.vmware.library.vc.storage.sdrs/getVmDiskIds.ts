/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage.sdrs {
export function getVmDiskIds(vm?: VC.VirtualMachine): Array<string> {var ret = new Array();
var layoutEx = vm.layoutEx;

System.log(layoutEx.disk);
for (var i in layoutEx.disk) {
	var diskName = '';
	var fileKeys = new Array();
	for (var j in layoutEx.disk[i].chain) {
		for (var k in layoutEx.disk[i].chain[j].fileKey) {
			fileKeys.push(layoutEx.disk[i].chain[j].fileKey[k]);
		}
	}
	for (var j in layoutEx.file) {
		for (var k in fileKeys) {
			if (layoutEx.file[j].key == fileKeys[k] && layoutEx.file[j].type == 'diskDescriptor') {
				diskName = layoutEx.file[j].name;
			}
		}
	}
	ret[i] = diskName + ' (' + layoutEx.disk[i].key + ')';
}
return ret;
}
}
