/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function validatePrincipals(host?: vCACCAFE.VCACHost, tenant?: string, principals?: Array<string>): Array<string> {var principalIds = new Array();

if ((principals == null) || (principals.length == 0)) {
	return principalIds;
}

for (var i = 0; i < principals.length; i++) {
	principalIds.push(vCACCAFEPrincipalId.createFromString(principals[i]));
}

var authenticationClient = host.createAuthenticationClient();
var tenantService = authenticationClient.getAuthenticationTenantService();
tenantService.getTenant(tenant);
var service = authenticationClient.getAuthenticationPrincipalService();
var wrappers = service.loadPrincipals(tenant, principalIds);

principalIds = new Array();
for (var i = 0; i < wrappers.length; i++) {
	if ((wrappers[i] != null) && (wrappers[i].getPrincipalData() != null)) {
		principalIds.push(wrappers[i].getPrincipalData().getPrincipalId().asString());
	}
}

return principalIds;
}
}
