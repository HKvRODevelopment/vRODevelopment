/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function createBusinessGroup(host?: vCACCAFE.VCACHost, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administrators?: Array<string>, administratorEmail?: string, support?: Array<string>, users?: Array<string>): vCACCAFE.BusinessGroup {var group = new vCACCAFEBusinessGroup();
group.setName(name);
group.setDescription(description);
group.setMachinePrefixId(defaultMachinePrefix.getId());
group.setActiveDirectoryContainer(activeDirectoryContainer);
group.setAdministrators(administrators);
group.setAdministratorEmail(administratorEmail);
group.setSupport(support)
group.setUsers(users);

System.log("Creating business group '" + name + "'...");
var service = host.createInfrastructureClient().getInfrastructureBusinessGroupsService();
var id = service.create(group);
System.log("Business group created: " + id.toString());

return vCACCAFEEntitiesFinder.getBusinessGroup(host, id.toString());
}
}
