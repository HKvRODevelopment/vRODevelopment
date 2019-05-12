/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function updateIdentityStore(tenant?: vCACCAFE.Tenant, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, groupBaseSearchDn?: string, userBaseSearchDn?: string): vCACCAFE.IdentityStore {com.vmware.library.vcaccafe.util.validateObject(store, "Identity store");
if (name != null) {
	store.setName(name);
}
if (userNameDn != null) {
	store.setUserNameDn(userNameDn);
}
if ((password != null) && (password != "")) {
	store.setPassword(password);
}
if (groupBaseSearchDn != null) {
	store.setGroupBaseSearchDn(groupBaseSearchDn);
    if (store.getGroupBaseSearchDns() != null) { // Horizon
        vCACCAFEEntityHelper.replaceElementInList(store , "getGroupBaseSearchDns", 0 , groupBaseSearchDn);
    }
}

if ((userBaseSearchDn == null) || (userBaseSearchDn.trim() == "")) {
	store.setUserBaseSearchDn(groupBaseSearchDn);
} else {
    store.setUserBaseSearchDn(userBaseSearchDn);
}

if (store.getUserBaseSearchDns() != null) { // Horizon
    vCACCAFEEntityHelper.replaceElementInList(store , "getUserBaseSearchDns", 0 , store.getUserBaseSearchDn());
}

var host = vCACCAFEEntitiesFinder.getHostForEntity(tenant);
var hostStore = vCACCAFEEntitiesFinder.getHostForEntity(store);

if (host.id != hostStore.id) {
	throw "The tenant and the identity store belong to different vCAC hosts!";
}

System.log("Updating identity store '" + name + "'...");
var authenticationClient = host.createAuthenticationClient();
var service = authenticationClient.getAuthenticationIdentityStoreClientService();
var tenantService = authenticationClient.getAuthenticationTenantService();
tenantService.getTenant(tenant.getUrlName());

service.updateOrCreateIdentityStore(tenant.getId(), store);
System.log("Identity store '" + name + "' updated.");

return vCACCAFEEntitiesFinder.getIdentityStore(tenant, store.getDomain());
}
}
