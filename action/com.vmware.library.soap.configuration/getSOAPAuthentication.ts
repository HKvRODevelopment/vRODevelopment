/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap.configuration {
export function getSOAPAuthentication(authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string): any {var authParams = [];
if (authenticationType != "None") {
	authParams = [sessionMode, username, password, domain, workstation, spn];
}
return SOAPAuthenticationManager.createAuthentication(authenticationType, authParams);
}
}
