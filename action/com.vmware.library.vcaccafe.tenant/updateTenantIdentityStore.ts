/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function updateTenantIdentityStore(tenant?: vCACCAFE.Tenant, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, subdomains?: Array<string>, groupBaseSearchDns?: Array<string>, userBaseSearchDns?: Array<string>): vCACCAFE.IdentityStore {com.vmware.library.vcaccafe.util.validateObject(store, "Identity store");
if (name != null) {
	store.setName(name);
}
if (userNameDn != null) {
	store.setUserNameDn(userNameDn);
}
if ((password != null) && (password != "")) {
	store.setPassword(password);
}
if (subdomains != null) {
	vCACCAFEEntityHelper.removeAllFromList(store , "getSubdomains");
    vCACCAFEEntityHelper.addElementsToList(store , "getSubdomains", subdomains);
}

if (groupBaseSearchDns != null) {
    vCACCAFEEntityHelper.removeAllFromList(store , "getGroupBaseSearchDns");
    vCACCAFEEntityHelper.addElementsToList(store , "getGroupBaseSearchDns", groupBaseSearchDns);
}

if (((userBaseSearchDns == null) || (userBaseSearchDns.length == 0)) && (groupBaseSearchDns != null)) {
	vCACCAFEEntityHelper.removeAllFromList(store , "getUserBaseSearchDns");
	vCACCAFEEntityHelper.addElementsToList(store , "getUserBaseSearchDns", groupBaseSearchDns);
} else if (userBaseSearchDns != null) {
	vCACCAFEEntityHelper.removeAllFromList(store , "getUserBaseSearchDns");
    vCACCAFEEntityHelper.addElementsToList(store , "getUserBaseSearchDns", userBaseSearchDns);
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
