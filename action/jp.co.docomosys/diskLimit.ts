/// <reference path="./../../includes.d.ts"/>

namespace jp.co.docomosys {
export function diskLimit(vm_obj?: VC.VirtualMachine): Array<string> {var AllDevices = vm_obj.config.hardware.device;

var y = 0;
var disks = new Array;
var limits = new Array;
for (var i in AllDevices) {
	if (AllDevices[i] instanceof VcVirtualDisk) {
		disks[y] = AllDevices[i] 
		limits.push(disks[y].storageIOAllocation.limit.toString());
		y++;
	}
}

return limits;
}
}
