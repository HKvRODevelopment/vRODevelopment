/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function getIdentityStores(tenant?: vCACCAFE.Tenant, query?: string): Array<vCACCAFE.IdentityStore> {return vCACCAFEEntitiesFinder.findIdentityStores(tenant, query);
}
}
