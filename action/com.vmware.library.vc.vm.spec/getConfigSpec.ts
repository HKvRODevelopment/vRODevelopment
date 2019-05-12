/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getConfigSpec(annotation?: string, changeVersion?: string, consolePreferences?: any, cpuAffinity?: any, cpuAllocation?: any, cpuFeatureMask?: Array<any>, deviceChange?: Array<any>, extraConfig?: Array<any>, files?: any, flags?: any, guestId?: string, locationId?: string, memoryAffinity?: any, memoryAllocation?: any, memoryMB?: number, name?: string, networkShaper?: any, numCPUs?: number, powerOpInfo?: any, tools?: any, uuid?: string, version?: string): any {try {
	checkParam();
	var configSpec = new VcVirtualMachineConfigSpec();
	affectParam();
	return configSpec;
}
catch (ex) {
	throw "Unable to create VcVirtualMachineConfigSpec: " + ex;
}


function affectParam() {
	configSpec.annotation = annotation;
	configSpec.changeVersion = changeVersion;
	configSpec.consolePreferences = consolePreferences;
	configSpec.cpuAffinity = cpuAffinity;
	configSpec.cpuAllocation = cpuAllocation;
	configSpec.cpuFeatureMask = cpuFeatureMask;
	configSpec.deviceChange = deviceChange;
	configSpec.extraConfig = extraConfig;
	configSpec.files = files;
	configSpec.flags = flags;
	configSpec.guestId = guestId;
	configSpec.locationId = locationId;
	configSpec.memoryAffinity = memoryAffinity;
	configSpec.memoryAllocation = memoryAllocation;
	configSpec.memoryMB = memoryMB;
	configSpec.name = name;
	configSpec.networkShaper = networkShaper;
	configSpec.numCPUs = numCPUs;
	configSpec.powerOpInfo = powerOpInfo;
	configSpec.tools = tools;
	configSpec.uuid = uuid;
	configSpec.version = version;
}

function checkParam() {
	if (consolePreferences != null && (consolePreferences instanceof VcVirtualMachineConsolePreferences) == false) throw "consolePreferences must be of type 'VcVirtualMachineConsolePreferences'";
	if (cpuAllocation != null && (cpuAllocation instanceof VcResourceAllocationInfo) == false) throw "cpuAllocation must be of type 'VcResourceAllocationInfo'";
	if (cpuFeatureMask != null) {
		for (var i in cpuFeatureMask) {
			if ((cpuFeatureMask[i] instanceof VcVirtualMachineCpuIdInfoSpec) == false) throw "cpuFeatureMask must be of type 'Array of VcVirtualMachineCpuIdInfoSpec'";
		}
	}
	if (deviceChange != null) {
		for (var i in deviceChange) {
			if ((deviceChange[i] instanceof VcVirtualDeviceConfigSpec) == false) throw "deviceChange must be of type 'Array of VcVirtualDeviceConfigSpec'";
		}
	}
	if (extraConfig != null) {
		for (var i in extraConfig) {
			if ((extraConfig[i] instanceof VcOptionValue) == false) throw "extraConfig must be of type 'Array of VcOptionValue'";
		}
	}
	if (files != null && (files instanceof VcVirtualMachineFileInfo) == false) throw "files must be of type 'VcVirtualMachineFileInfo'";
	if (flags != null && (flags instanceof VcVirtualMachineFlagInfo) == false) throw "flags must be of type 'VcVirtualMachineFlagInfo'";
	if (memoryAffinity != null && (memoryAffinity instanceof VcVirtualMachineAffinityInfo) == false) throw "memoryAffinity must be of type 'VcVirtualMachineAffinityInfo'";
	if (memoryAllocation != null && (memoryAllocation instanceof VcResourceAllocationInfo) == false) throw "memoryAllocation must be of type 'VcResourceAllocationInfo'";
	if (networkShaper != null && (networkShaper instanceof VcVirtualMachineNetworkShaperInfo) == false) throw "networkShaper must be of type 'VcVirtualMachineNetworkShaperInfo'";
	if (powerOpInfo != null && (powerOpInfo instanceof VcVirtualMachineDefaultPowerOpInfo) == false) throw "powerOpInfo must be of type 'VcVirtualMachineDefaultPowerOpInfo'";
	if (tools != null && (tools instanceof VcToolsConfigInfo) == false) throw "tools must be of type 'VcToolsConfigInfo'";
}
}
}
