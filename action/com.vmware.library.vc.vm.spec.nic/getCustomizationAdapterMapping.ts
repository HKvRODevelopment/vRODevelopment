/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.nic {
export function getCustomizationAdapterMapping(adapter?: any, macAddress?: string): any {try {
	checkParams();
	var mapping = new VcCustomizationAdapterMapping();
	mapping.adapter = adapter;
	if (macAddress != null && macAddress != "")
		mapping.macAddress = macAddress;
	return mapping;
}
catch (ex) {
	throw "Unable to create VcCustomizationAdapterMapping: " + ex;
}

function checkParams() {
	if (adapter == null) throw "adapter cannot be null";
	if ((adapter instanceof VcCustomizationIPSettings) == false) throw "adapter must be of type VcCustomizationIPSettings";
}
}
}
