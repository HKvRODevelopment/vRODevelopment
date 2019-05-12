/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function removeAuthorizationRelationToObjectForGroup(authName?: string, ldapGroup?: LdapGroup, object?: any, relation?: string): void {if ( authName.equals("") ) {
	throw "No Authorization name provided ";
}
if ( ldapGroup == null ) {
	throw "No LDAP group provided ";
}
if (! (ldapGroup instanceof LdapGroup) ) {
	throw ldapGroup + " is not an LdapGroup";
}
if ( object == null ) {
	throw "No Reference object provided ";
}
var element = Server.getAuthorizationElementForName(authName);
if ( element == null ) {
	throw "The authorization element " + authName + " doesn't exist !";
}
else {
	if (ldapGroup != null && element.ldapElementDn != ldapGroup.dn)
		throw "ReferenceError: The authorization element found is not linked to the same group";
}
element.removeReference(object, relation);
}
}
