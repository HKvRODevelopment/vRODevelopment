/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationPrefixName(base?: string): any {try {
	if (base == null) throw "base cannot be null";
	return new VcCustomizationPrefixName(base);
}
catch (ex) {
	throw "Unable to create VcCustomizationPrefixName: " + ex;
}
}
}
