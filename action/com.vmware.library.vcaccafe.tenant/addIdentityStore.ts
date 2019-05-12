/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function addIdentityStore(tenant?: vCACCAFE.Tenant, name?: string, type?: string, url?: string, domain?: string, alias?: string, userNameDn?: string, password?: SecureString, groupBaseSearchDn?: string, userBaseSearchDn?: string): vCACCAFE.IdentityStore {var store = new vCACCAFEIdentityStore();
store.setName(name);
store.setType(vCACCAFEIdentityStoreType.fromValue(type));
store.setUrl(url);
store.setDomain(domain);
store.setAlias(alias);
store.setUserNameDn(userNameDn);
store.setPassword(password);
store.setGroupBaseSearchDn(groupBaseSearchDn);
if ((userBaseSearchDn == null) || (userBaseSearchDn.trim() == "")) {
	store.setUserBaseSearchDn(groupBaseSearchDn);
} else {
    store.setUserBaseSearchDn(userBaseSearchDn);
}

System.log("Adding identity store '" + name + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(tenant);
var service = host.createAuthenticationClient().getAuthenticationIdentityStoreClientService();
service.createIdentityStore(tenant.getId(), store);
System.log("Identity store '" + name + "' added.");

return vCACCAFEEntitiesFinder.getIdentityStore(tenant, domain);
}
}
