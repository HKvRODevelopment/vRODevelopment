/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.authorization {
export function addObjectToAuthorizationForGroup(authName?: string, description?: string, ldapGroup?: LdapGroup, object?: any, relation?: string): AuthorizationElement {var element = com.vmware.library.authorization.getOrCreateAuthorizationForGroup(authName,ldapGroup,description);
element.addReference(object, relation);
return element;
}
}
