/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function deleteCustomProperty(group?: vCACCAFE.Subtenant, property?: string): vCACCAFE.Subtenant {com.vmware.library.vcaccafe.util.validateObject(group, "Business group");
vCACCAFESubtenantHelper.removeCustomProperty(group , property);

System.log("Updating business group '" + group.getName() + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createAuthenticationClient().getAuthenticationSubtenantService();
service.updateSubtenant(group.getTenant(), group);
System.log("Business group updated: " + group.getId());
return vCACCAFEEntitiesFinder.getSubtenant(host, group.getId());
}
}
