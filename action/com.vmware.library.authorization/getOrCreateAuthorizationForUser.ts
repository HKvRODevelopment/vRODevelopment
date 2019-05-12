/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function getOrCreateAuthorizationForUser(authName?: string, user?: LdapUser, description?: string): AuthorizationElement {if ( authName.equals("") ) {
	throw "No Authorization name provided ";
}
if ( user == null ) {
	throw "No LDAP user provided ";
}

if (! (user instanceof LdapUser) ) {
	throw user + " is not an LdapUser";
}

var element = Server.getAuthorizationElementForName(authName);
if ( element == null ) {
	System.log(authName+" authorization element not found, create new one !");
	element = Server.createAuthorizationElement(authName, user, description);
}
else {
	if (user != null && element.ldapElementDn != user.dn)
		throw "ReferenceError: The authorization element found is not linked to the same user";
}
return element;
}
}
