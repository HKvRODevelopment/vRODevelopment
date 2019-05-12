/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function getIdentityStoresFromHost(host?: vCACCAFE.VCACHost, query?: string): Array<vCACCAFE.IdentityStore> {return vCACCAFEEntitiesFinder.findIdentityStoresFromHost(host, query);
}
}
