/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe {
export function getAllTenantsUrlNames(host?: vCACCAFE.VCACHost): Array<string> {if (host == null) {
	return new Array();
}

var tenants = vCACCAFEEntitiesFinder.getTenants(host);

var tenantsUrlNames = new Array();

for (var i = 0; i < tenants.length; i++) {
	tenantsUrlNames.push(tenants[i].getUrlName());
}

return tenantsUrlNames;


}
}
