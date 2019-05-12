/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function updateIdentityStoreFromHost(host?: vCACCAFE.VCACHost, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, groupBaseSearchDn?: string, userBaseSearchDn?: string): vCACCAFE.IdentityStore {com.vmware.library.vcaccafe.util.validateObject(store, "Identity store");
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

var hostStore = vCACCAFEEntitiesFinder.getHostForEntity(store);

if (host.id != hostStore.id) {
	throw "The tenant and the identity store belong to different vCAC hosts!";
}

System.log("Updating identity store '" + name + "'...");
var service = host.createAuthenticationClient().getAuthenticationIdentityStoreClientService();
service.updateOrCreateIdentityStore(host.tenant, store);
System.log("Identity store '" + name + "' updated.");

return vCACCAFEEntitiesFinder.getIdentityStoreFromHost(host, store.getDomain());
}
}
