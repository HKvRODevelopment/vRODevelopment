/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function changeGroupAuthorization(authorizationElement?: AuthorizationElement, newLdapGroup?: LdapGroup): void {if ( newLdapGroup == null ) {
	throw "No LDAP group provided ";
}
if (! (newLdapGroup instanceof LdapGroup) ) {
	throw newLdapGroup + " is not an LdapGroup";
}

authorizationElement.ldapElement = newLdapGroup;
}
}
