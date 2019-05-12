/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function addObjectToAuthorizationForUser(authName?: string, description?: string, ldapUser?: LdapUser, object?: any, relation?: string): AuthorizationElement {var element = com.vmware.library.authorization.getOrCreateAuthorizationForUser(authName,ldapUser,description);
element.addReference(object, relation);
return element;
}
}
