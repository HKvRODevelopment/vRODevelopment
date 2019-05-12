/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function updateHostIdentityStore(host?: vCACCAFE.VCACHost, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, subdomains?: Array<string>, groupBaseSearchDns?: Array<string>, userBaseSearchDns?: Array<string>): vCACCAFE.IdentityStore {com.vmware.library.vcaccafe.util.validateObject(store, "Identity store");
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
