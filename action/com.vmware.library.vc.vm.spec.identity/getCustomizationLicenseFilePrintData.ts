/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationLicenseFilePrintData(autoMode?: VC.CustomizationLicenseDataMode, autoUsers?: number): any {var license;
try {
	checkParam();
	license = new VcCustomizationLicenseFilePrintData();
	affectParam();
	return license;
}
catch (ex) {
	throw "Unable to create VcCustomizationLicenseFilePrintData: " + ex;
}

function affectParam() {
	//if (autoMode != null)
	license.autoMode = VcCustomizationLicenseDataMode.fromString(autoMode.name);
	if (autoUsers != null && autoUsers >= 0)
		license.autoUsers = autoUsers;
	else
		System.debug("autoUsers is " + autoUsers);
}

function checkParam() {
	if (autoMode == null) throw "autoMode cannot be null";
	if (autoMode == VcCustomizationLicenseDataMode.perServer && autoUsers == null) throw "autoMode is set to perServer, autoUsers cannot be null";
}
}
}
