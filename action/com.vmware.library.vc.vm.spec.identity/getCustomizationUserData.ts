/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationUserData(computerName?: any, fullName?: string, orgName?: string, productId?: string): any {var userData;
try {
	checkParams();
	userData = new VcCustomizationUserData();
	affectParams();
	return userData;
}
catch (ex) {
	throw "Unable to create VcCustomizationUserData: " + ex;
}

function affectParams() {
	userData.computerName = computerName;
	userData.fullName = fullName;
	userData.orgName = orgName;
	userData.productId = productId;
}

function checkParams() {
	if (computerName == null) throw "hostname cannot be null";
	if (((computerName instanceof VcCustomizationCustomName) || (computerName instanceof VcCustomizationFixedName) ||
		 (computerName instanceof VcCustomizationPrefixName) || (computerName instanceof VcCustomizationUnknownName) ||
		 (computerName instanceof VcCustomizationVirtualMachineName)) == false) {
		throw "computerName must be of type VcCustomizationCustomName, VcCustomizationFixedName, VcCustomizationPrefixName, VcCustomizationUnknownName, VcCustomizationVirtualMachineName";
	}
	if (fullName == null) throw "fullName cannot be null";
	if (orgName == null) throw "orgName cannot be null";
}
}
}
