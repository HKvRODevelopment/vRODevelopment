/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationPassword(plainText?: boolean, value?: string): any {try {
	if (plainText == null) throw "plainText cannot be null";
//	if (value == null) throw "value cannot be null";
if (value == null) value = "";
//	return new VcCustomizationPassword(plainText, value);
	var password = new VcCustomizationPassword();
	password.plainText = plainText;
	password.value = value;
	return password;
}
catch (ex) {
	throw "Unable to create VcCustomizationPassword: " + ex;
}
}
}
