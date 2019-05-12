/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function addHostIdentityStore(host?: vCACCAFE.VCACHost, name?: string, type?: string, url?: string, domain?: string, userNameDn?: string, password?: SecureString, subdomains?: Array<string>, groupBaseSearchDns?: Array<string>, userBaseSearchDns?: Array<string>): vCACCAFE.IdentityStore {var store = new vCACCAFEIdentityStore();
store.setName(name);
store.setType(vCACCAFEIdentityStoreType.fromValue(type));
store.setUrl(url);
store.setDomain(domain);
store.setUserNameDn(userNameDn);
store.setPassword(password);
vCACCAFEEntityHelper.addElementsToList(store , "getSubdomains", subdomains);
vCACCAFEEntityHelper.addElementsToList(store , "getGroupBaseSearchDns", groupBaseSearchDns);
if ((userBaseSearchDns == null) || (userBaseSearchDns.length == 0)) {
	vCACCAFEEntityHelper.addElementsToList(store , "getUserBaseSearchDns", groupBaseSearchDns);
} else {
    vCACCAFEEntityHelper.addElementsToList(store , "getUserBaseSearchDns", userBaseSearchDns);
}

System.log("Adding identity store '" + name + "'...");
var service = host.createAuthenticationClient().getAuthenticationIdentityStoreClientService();
service.createIdentityStore(host.tenant, store);
System.log("Identity store '" + name + "' added.");

return vCACCAFEEntitiesFinder.getIdentityStoreFromHost(host, domain);
}
}
