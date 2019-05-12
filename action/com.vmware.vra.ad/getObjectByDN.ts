/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.ad {
export function getObjectByDN(host?: AD.AdHost, objectDN?: string): any {return ActiveDirectory.searchForEntry(objectDN, LdapSearchScope.BASE, 10000, "objectClass=*", null, host);
}
}
