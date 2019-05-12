/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.policy {
export function setPolicyCredential(thePolicy?: Policy, newCredential?: Credential): void {if (Server.isValidLdapCredential(newCredential) == false) {
	throw "BadCredential: The provided credential cannot be logged in";
}
thePolicy.credential = newCredential;
}
}
