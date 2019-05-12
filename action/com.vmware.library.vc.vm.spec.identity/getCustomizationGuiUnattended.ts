/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationGuiUnattended(autoLogon?: boolean, autoLogonCount?: number, password?: any, timeZone?: number): any {var guiUnattended;

try {
	checkParams();
	guiUnattended = new VcCustomizationGuiUnattended();
	affectParams();
	return guiUnattended;
}
catch (ex) {
	throw "Unable to create VcCustomizationGuiUnattended: " + ex;
}


function affectParams() {
	guiUnattended.autoLogon = autoLogon;
	guiUnattended.autoLogonCount = autoLogonCount;
	guiUnattended.password = password;
	guiUnattended.timeZone = timeZone;
}

function checkParams() {
	if (autoLogon == null) throw "autologon cannot be null";
	if (autoLogonCount == null) autoLogonCount = 0;
	if (autoLogon && autoLogonCount < 1) throw "autoLogonCount cannot be lesser or equal to 0 if autoLogon is set to true";
	if (password != null && ((password instanceof VcCustomizationPassword) == false)) throw "password must be of type VcCustomizationPassword";
	if (timeZone == null) throw "timezone cannot be null";
}
}
}
