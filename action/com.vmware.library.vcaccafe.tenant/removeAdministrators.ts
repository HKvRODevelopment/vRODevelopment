/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function removeAdministrators(tenant?: vCACCAFE.Tenant, tenantAdministrators?: Array<string>, infrastructureAdministrators?: Array<string>): void {com.vmware.library.vcaccafe.util.validateObject(tenant, "Tenant");
var host = vCACCAFEEntitiesFinder.getHostForEntity(tenant);
var service = host.createAuthorizationClient().getAuthorizationPrincipalService();

tenantAdministrators = com.vmware.library.vcaccafe.tenant.validatePrincipals(host, tenant.getUrlName(), tenantAdministrators);
for (var i = 0; i < tenantAdministrators.length; i++) {
	System.log("Removing tenant administrator '" + tenantAdministrators[i] + "'...");
	service.removeRole(tenant.getId(), tenantAdministrators[i], "CSP_TENANT_ADMIN");
}

infrastructureAdministrators = com.vmware.library.vcaccafe.tenant.validatePrincipals(host, tenant.getUrlName(), infrastructureAdministrators);
for (var i = 0; i < infrastructureAdministrators.length; i++) {
	System.log("Removing infrastructure administrator '" + infrastructureAdministrators[i] + "'...");
	service.removeRole(tenant.getId(), infrastructureAdministrators[i], "COM_VMWARE_IAAS_IAAS_ADMINISTRATOR");
}

}
}
