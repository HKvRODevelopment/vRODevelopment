/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function getOrCreateAuthorizationForGroup(authName?: string, group?: LdapGroup, description?: string): AuthorizationElement {if ( authName.equals("") ) {
	throw "No Authorization name provided ";
}
if ( group == null ) {
	throw "No LDAP group provided ";
}
if (! (group instanceof LdapGroup) ) {
	throw group + " is not an LdapGroup";
}
var element = Server.getAuthorizationElementForName(authName);
if ( element == null ) {
	System.log(authName+" authorization element not found, create new one !");
	element = Server.createAuthorizationElement(authName, group, description);
}
else {
	if (group != null && element.ldapElementDn != group.dn)
		throw "ReferenceError: The authorization element found is not linked to the same group";
}
return element;
}
}
