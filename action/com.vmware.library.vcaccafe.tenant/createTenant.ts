/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function createTenant(host?: vCACCAFE.VCACHost, name?: string, description?: string, urlName?: string, contactEmail?: string): vCACCAFE.Tenant {var tenant = new vCACCAFETenant();
tenant.setName(name);
tenant.setUrlName(urlName);
tenant.setDescription(description);
tenant.setContactEmail(contactEmail);

System.log("Creating tenant '" + name + "'...");
var service = host.createAuthenticationClient().getAuthenticationTenantService();
service.updateOrCreateTenant(tenant);
System.log("Tenant '" + name + "' created!");

return vCACCAFEEntitiesFinder.getTenant(host, urlName);
}
}
