/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationLinuxPrep(domain?: string, hostName?: any): any {var linuxPrep;
try {
	checkParams();
	linuxPrep = new VcCustomizationLinuxPrep();
	affectParams();
	return linuxPrep;
}
catch (ex) {
	throw "Unable to create VcCustomizationLinuxPrep: " + ex;
}

function affectParams() {
	linuxPrep.domain = domain;
	linuxPrep.hostName = hostName;
}

function checkParams() {
	if (domain == null) domain = "";
	if (hostName == null) throw "hostname cannot be null";
	if (((hostName instanceof VcCustomizationCustomName) || (hostName instanceof VcCustomizationFixedName) ||
		 (hostName instanceof VcCustomizationPrefixName) || (hostName instanceof VcCustomizationUnknownName) ||
		 (hostName instanceof VcCustomizationVirtualMachineName)) == false) {
		throw "hostName must be of type VcCustomizationCustomName, VcCustomizationFixedName, VcCustomizationPrefixName, VcCustomizationUnknownName, VcCustomizationVirtualMachineName";
	}
}
}
}
