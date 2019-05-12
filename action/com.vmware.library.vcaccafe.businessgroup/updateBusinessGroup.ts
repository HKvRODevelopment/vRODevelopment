/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function updateBusinessGroup(group?: vCACCAFE.BusinessGroup, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administrators?: Array<string>, administratorEmail?: string, support?: Array<string>, users?: Array<string>): vCACCAFE.BusinessGroup {com.vmware.library.vcaccafe.util.validateObject(group, "Business group");
group.setName(name);
group.setDescription(description);
group.setMachinePrefixId(defaultMachinePrefix.getId());
group.setActiveDirectoryContainer(activeDirectoryContainer);
group.setAdministrators(administrators);
group.setAdministratorEmail(administratorEmail);
group.setSupport(support)
group.setUsers(users);

System.log("Updating business group '" + name + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createInfrastructureClient().getInfrastructureBusinessGroupsService();
service.update(group);
System.log("Business group updated: " + group.getId().toString());

return vCACCAFEEntitiesFinder.getBusinessGroup(host, group.getId().toString());
}
}
