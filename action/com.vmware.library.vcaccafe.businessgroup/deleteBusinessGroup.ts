/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function deleteBusinessGroup(group?: vCACCAFE.BusinessGroup): void {com.vmware.library.vcaccafe.util.validateObject(group, "Business group");
System.log("Deleting business group '" + group.getName() + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createInfrastructureClient().getInfrastructureBusinessGroupsService();
service.delete(group.getId());
System.log("Business group deleted: " + group.getId().toString());
}
}
