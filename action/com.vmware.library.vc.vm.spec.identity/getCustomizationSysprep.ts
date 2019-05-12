/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationSysprep(guiRunOnce?: any, guiUnattended?: any, identification?: any, licenseFilePrintData?: any, userData?: any): any {var sysprep;
try {
	checkParams();
	sysprep = new VcCustomizationSysprep();
	affectParams();
	return sysprep;
}
catch (ex) {
	throw "Unable to create VcCustomizationSysprep: " + ex;
}

function affectParams() {
	sysprep.guiRunOnce = guiRunOnce;
	sysprep.guiUnattended = guiUnattended;
	sysprep.identification = identification;
	sysprep.licenseFilePrintData = licenseFilePrintData;
	sysprep.userData = userData;
}

function checkParams() {
	if (guiRunOnce != null && ((guiRunOnce instanceof VcCustomizationGuiRunOnce) == false)) throw "guiRunOnce must be of type VcCustomizationGuiRunOnce";
	if (guiUnattended == null) throw "guiUnattended cannot be null"; 
	if ((guiUnattended instanceof VcCustomizationGuiUnattended) == false) throw "guiUnattended must be of type VcCustomizationGuiUnattended";
	if (identification == null) throw "identification cannot be null"; 
	if ((identification instanceof VcCustomizationIdentification) == false) throw "identification must be of type VcCustomizationIdentification";
	if (licenseFilePrintData != null && ((licenseFilePrintData instanceof VcCustomizationLicenseFilePrintData) == false)) throw "licenseFilePrintData must be of type VcCustomizationLicenseFilePrintData";
	if (userData == null) throw "userData cannot be null"; 
	if ((userData instanceof VcCustomizationUserData) == false) throw "userData must be of type VcCustomizationUserData";
}
}
}
