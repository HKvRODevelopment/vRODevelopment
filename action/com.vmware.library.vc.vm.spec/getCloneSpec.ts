/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getCloneSpec(config?: any, customization?: any, location?: any, powerOn?: boolean, template?: boolean): any {try {
	checkParam();
	var cloneSpec = new VcVirtualMachineCloneSpec();
	affectParam();
	return cloneSpec;
}
catch (ex) {
	throw "Unable to create CloneSpec: " + ex;
}

function affectParam() {
	cloneSpec.config = config;
	cloneSpec.customization = customization;
	cloneSpec.location = location;
	cloneSpec.powerOn = powerOn;
	cloneSpec.template = template;
}

function checkParam() {
	if (config != null && (config instanceof VcVirtualMachineConfigSpec) == false) throw "config must be of type 'VcVirtualMachineConfigSpec'";
	if (customization != null && (customization instanceof VcCustomizationSpec) == false)	throw "customization must be of type 'VcCustomizationSpec'";
	if (location == null) throw "location must be defined (type: VcVirtualMachineRelocateSpec)";
	if ((location instanceof VcVirtualMachineRelocateSpec) == false) throw "location must be of type 'VcVirtualMachineRelocateSpec'";
	if (powerOn == null) throw "powerOn must be defined (type: boolean)";
	if (template == null) throw "template must be defined (type: boolean)";
}
}
}
