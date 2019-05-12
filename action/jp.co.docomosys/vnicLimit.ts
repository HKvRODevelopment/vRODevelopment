/// <reference path="./../../includes.d.ts"/>

namespace jp.co.docomosys {
export function vnicLimit(vm_obj?: VC.VirtualMachine): Array<string> {var AllDevices = vm_obj.config.hardware.device;

var y = 0;
var nics = new Array;
var limits = new Array;
for (var i in AllDevices) {
	if (AllDevices[i] instanceof VcVirtualVmxnet3 || AllDevices[i] instanceof VcVirtualE1000) {
		nics[y] = AllDevices[i]
		limits.push(nics[y].resourceAllocation.limit.toString());
		y++;
	}
}

return limits;

}
}
