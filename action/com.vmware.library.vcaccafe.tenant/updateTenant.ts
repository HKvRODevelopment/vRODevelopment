/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function updateTenant(tenant?: vCACCAFE.Tenant, name?: string, description?: string, contactEmail?: string): vCACCAFE.Tenant {com.vmware.library.vcaccafe.util.validateObject(tenant, "Tenant");
if (tenant.isDefaultTenant()) {
	throw "Updating the default tenant is not allowed!";
}

if (name != null) {
	tenant.setName(name);
}
if (description != null) {
	tenant.setDescription(description);
}
if (contactEmail != null) {
	tenant.setContactEmail(contactEmail);
}

System.log("Updating tenant '" + name + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(tenant);
var service = host.createAuthenticationClient().getAuthenticationTenantService();
service.updateOrCreateTenant(tenant);
System.log("Tenant '" + name + "' updated!");

return vCACCAFEEntitiesFinder.getTenant(host, tenant.getId());
}
}
