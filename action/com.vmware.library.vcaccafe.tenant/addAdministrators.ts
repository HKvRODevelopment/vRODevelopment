/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function addAdministrators(tenant?: vCACCAFE.Tenant, tenantAdministrators?: Array<string>, infrastructureAdministrators?: Array<string>): void {com.vmware.library.vcaccafe.util.validateObject(tenant, "Tenant");
var host = vCACCAFEEntitiesFinder.getHostForEntity(tenant);
var service = host.createAuthorizationClient().getAuthorizationPrincipalService();

tenantAdministrators = com.vmware.library.vcaccafe.tenant.validatePrincipals(host, tenant.getUrlName(), tenantAdministrators);
for (var i = 0; i < tenantAdministrators.length; i++) {
	System.log("Adding tenant administrator '" + tenantAdministrators[i] + "'...");
	service.addRole(tenant.getId(), tenantAdministrators[i], "CSP_TENANT_ADMIN");
}

infrastructureAdministrators = com.vmware.library.vcaccafe.tenant.validatePrincipals(host, tenant.getUrlName(), infrastructureAdministrators);
for (var i = 0; i < infrastructureAdministrators.length; i++) {
	System.log("Adding infrastructure administrator '" + infrastructureAdministrators[i] + "'...");
	service.addRole(tenant.getId(), infrastructureAdministrators[i], "COM_VMWARE_IAAS_IAAS_ADMINISTRATOR");
}

}
}
