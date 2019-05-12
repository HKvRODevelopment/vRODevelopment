/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function deleteIdentityStoreFromHost(host?: vCACCAFE.VCACHost, store?: vCACCAFE.IdentityStore): void {com.vmware.library.vcaccafe.util.validateObject(store, "Identity store");
var hostStore = vCACCAFEEntitiesFinder.getHostForEntity(store);
if (hostStore == null) {
	throw "Identity store does not exist!";
}
if (host.id != hostStore.id) {
	throw "The identity store belongs to a different vCAC host!";
}

System.log("Deleting identity store '" + store.getName() + "'...");
var service = host.createAuthenticationClient().getAuthenticationIdentityStoreClientService();
service.deleteIdentityStore(host.tenant, store.getDomain());
System.log("Identity store '" + store.getName() + "' deleted.");

}
}
