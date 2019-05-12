/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.tenant {
export function deleteTenant(tenant?: vCACCAFE.Tenant): void {com.vmware.library.vcaccafe.util.validateObject(tenant, "Tenant");
System.log("Deleting tenant '" + tenant.getName() + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(tenant);
var service = host.createAuthenticationClient().getAuthenticationTenantService();
service.deleteTenant(tenant.getId());
System.log("Tenant '" + tenant.getName() + "' deleted.");

}
}
