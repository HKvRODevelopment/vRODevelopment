/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function deleteBusinessGroup(businessGroup?: vCACCAFE.Subtenant): void {com.vmware.library.vcaccafe.util.validateObject(businessGroup, "Business group");
System.log("Deleting business group '" + businessGroup.getName() + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(businessGroup);
var service = host.createAuthenticationClient().getAuthenticationSubtenantService();
service.deleteSubtenant(host.tenant , businessGroup.getId());
System.log("Business group deleted: " + businessGroup.getId().toString());
}
}
