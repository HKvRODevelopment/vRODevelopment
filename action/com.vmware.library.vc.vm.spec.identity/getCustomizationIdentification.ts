/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationIdentification(domainAdmin?: string, domainAdminPassword?: any, joinDomain?: string, joinWorkgroup?: string): any {var identification;
try {
	checkParam();
	if(joinDomain==null && joinWorkgroup==null){
		joinWorkgroup="WORKGROUP";
	}
	identification = new VcCustomizationIdentification();
	affectParam();
	return identification;
}
catch (ex) {
	throw "Unable to create VcCustomizationIdentification: " + ex;
}

function affectParam() {
	identification.domainAdmin = domainAdmin;
	identification.domainAdminPassword = domainAdminPassword;
	identification.joinDomain = joinDomain;
	identification.joinWorkgroup = joinWorkgroup;
}

function checkParam() {
	if (joinDomain != null && joinDomain == "") joinDomain = null;
	if (joinWorkgroup != null && joinWorkgroup == "") joinWorkgroup = null;
	
	if (joinDomain != null && joinWorkgroup != null) throw "joinDomain and joinWorkgroup cannot be set together";
	if (joinDomain != null && (domainAdmin == null || domainAdminPassword == null)) throw "joinDomain is set, but domainAdmin or domainAdminPassword is not set";
}
}
}
