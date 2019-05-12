/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationIdentificationFromCredential(domainAdmin?: Credential, joinDomain?: string, joinWorkgroup?: string): any {var identification;
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
	if (joinWorkgroup == null || joinWorkgroup == "") {
		identification.domainAdmin = domainAdmin.username;
		identification.domainAdminPassword = VcPlugin.createCustomizationPasswordFromCredentials(domainAdmin, true);

		identification.joinDomain = joinDomain;
		identification.joinWorkgroup = joinWorkgroup;
	}
	else {
		identification.joinWorkgroup = joinWorkgroup;
		identification.joinDomain = null;
	}		
}

function checkParam() {
	if (joinDomain != null && joinDomain == "") joinDomain = null;
	if (joinWorkgroup != null && joinWorkgroup == "") joinWorkgroup = null;
	
	if (joinDomain != null && joinWorkgroup != null) throw "joinDomain and joinWorkgroup cannot be set together";
	if (joinDomain != null && (domainAdmin == null)) throw "joinDomain is set, but domainAdmin or domainAdminPassword is not set";
}
}
}
