/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getConfigSpecSimple(deviceChange?: Array<any>, files?: any, flags?: any, memoryMB?: number, name?: string, numCPUs?: number): any {try {
	checkParam();
	var configSpec = new VcVirtualMachineConfigSpec();
	affectParam();
	return configSpec;
}
catch (ex) {
	throw "Unable to create VcVirtualMachineConfigSpec: " + ex;
}


function affectParam() {
	configSpec.deviceChange = deviceChange;
	configSpec.files = files;
	configSpec.flags = flags;
	configSpec.memoryMB = memoryMB;
	configSpec.name = name;
	configSpec.numCPUs = numCPUs;
}

function checkParam() {
	if (deviceChange != null) {
		for (var i in deviceChange) {
			if ((deviceChange[i] instanceof VcVirtualDeviceConfigSpec) == false) throw "deviceChange must be of type 'Array of VcVirtualDeviceConfigSpec'";
		}
	}
	if (files != null && (files instanceof VcVirtualMachineFileInfo) == false) throw "files must be of type 'VcVirtualMachineFileInfo'";
	if (flags != null && (flags instanceof VcVirtualMachineFlagInfo) == false) throw "flags must be of type 'VcVirtualMachineFlagInfo'";
}
}
}
