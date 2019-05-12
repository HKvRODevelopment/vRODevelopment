/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function deleteIdentityStore(tenant?: vCACCAFE.Tenant, store?: vCACCAFE.IdentityStore): void {com.vmware.library.vcaccafe.util.validateObject(store, "Identity store");
com.vmware.library.vcaccafe.util.validateObject(tenant, "Tenant");
var host = vCACCAFEEntitiesFinder.getHostForEntity(tenant);
var hostStore = vCACCAFEEntitiesFinder.getHostForEntity(store);

if (host.id != hostStore.id) {
	throw "The tenant and the identity store belong to different vCAC hosts!";
}

System.log("Deleting identity store '" + store.getName() + "'...");
var service = host.createAuthenticationClient().getAuthenticationIdentityStoreClientService();
service.deleteIdentityStore(tenant.getId(), store.getDomain());
System.log("Identity store '" + store.getName() + "' deleted.");

}
}
