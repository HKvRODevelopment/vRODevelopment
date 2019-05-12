/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function removeAuthorizationRelationToObjectForUser(authName?: string, ldapUser?: LdapUser, object?: any, relation?: string): void {if ( authName.equals("") ) {
	throw "No Authorization name provided ";
}
if ( ldapUser == null ) {
	throw "No LDAP user provided ";
}

if (! (ldapUser instanceof LdapUser) ) {
	throw ldapUser + " is not an LdapUser";
}
if ( object == null ) {
	throw "No Reference object provided ";
}
var element = Server.getAuthorizationElementForName(authName);
if ( element == null ) {
	throw "The authorization element "+authName+" doesn't exist !";
}
else {
	if (ldapUser != null && element.ldapElementDn != ldapUser.dn)
		throw "ReferenceError: The authorization element found is not linked to the same user";
}
element.removeReference(object, relation);
}
}
