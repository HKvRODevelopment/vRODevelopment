/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function changeUserAuthorization(authorizationElement?: AuthorizationElement, newLdapUser?: LdapUser): void {if ( newLdapUser == null ) {
	throw "No LDAP user provided ";
}
if (! (newLdapUser instanceof LdapUser) ) {
	throw newLdapUser + " is not an LdapUser";
}
authorizationElement.ldapElement = newLdapUser;
}
}
