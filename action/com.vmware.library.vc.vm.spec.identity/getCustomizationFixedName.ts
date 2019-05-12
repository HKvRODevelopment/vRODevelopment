/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationFixedName(name?: string): any {if (name == null) {
	throw "Unable to create VcCustomizationFixedName. Reason: name cannot be null";
}
var fixedName = new VcCustomizationFixedName();
fixedName.name = name;
return fixedName;
}
}
