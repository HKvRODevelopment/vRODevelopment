/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getCustomizationSpecSysprepText(template?: ResourceElement, fullName?: string, orgName?: string, timeZone?: number, productId?: string, newAdminPassword?: string, joinWorkGroup?: string, joinDomain?: string, domainAdmin?: Credential, clientName?: string, IpAddress?: string, SubnetMask?: string, gateway?: Array<string>, DnsServerList?: Array<string>): any {var strTemplate = template.getContentAsMimeAttachment().content;

strTemplate = strTemplate.replace("$localAdminPwd$", newAdminPassword);
strTemplate = strTemplate.replace("$TimeZoneCode$", timeZone);
strTemplate = strTemplate.replace("$Windows_Key$", productId);
strTemplate = strTemplate.replace("$FullName$", fullName);
strTemplate = strTemplate.replace("$OrgName$", orgName);
strTemplate = strTemplate.replace("$ComputerName$", clientName);
strTemplate = strTemplate.replace("$joinDomain$", joinDomain);
if(domainAdmin==null){
	domainAdmin=Server.getCredential();
}
strTemplate = strTemplate.replace("$DomainAdmin$", domainAdmin.username);
var custIdentPass = VcPlugin.createCustomizationPasswordFromCredentials(domainAdmin, true);
strTemplate = strTemplate.replace("$DomainAdminPassword$", custIdentPass.value);
strTemplate = strTemplate.replace("$joinWorkGroup$", joinWorkGroup);
strTemplate = strTemplate.replace("$IpAddress$", IpAddress);
strTemplate = strTemplate.replace("$SubnetMask$", SubnetMask);
if (gateway != null) {
	strTemplate = strTemplate.replace("$DefaultGateway$", gateway[0]);
}

var dns = "";
for (var i in DnsServerList) {
	dns += DnsServerList[i];
	if (i < DnsServerList.length -1 ) {
		dns += ",";
	}
}
strTemplate = strTemplate.replace("$DnsServerLists$", dns);

var spec = new VcCustomizationSysprepText();
spec.value = strTemplate;
System.log(strTemplate);
return spec;
}
}
