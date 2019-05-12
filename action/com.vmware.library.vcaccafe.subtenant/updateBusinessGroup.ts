/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function updateBusinessGroup(businessGroup?: vCACCAFE.Subtenant, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administrators?: Array<string>, administratorEmail?: string, support?: Array<string>, users?: Array<string>, sharedAccess?: Array<string>): vCACCAFE.Subtenant {com.vmware.library.vcaccafe.util.validateObject(businessGroup, "Business group");
var host = vCACCAFEEntitiesFinder.getHostForEntity(businessGroup);
var service = host.createAuthenticationClient().getAuthenticationSubtenantService();

businessGroup.setName(name);
businessGroup.setDescription(description);

vCACCAFEEntityHelper.removeAllFromList(businessGroup , "getSubtenantRoles");
var roles = service.getSubtenantRoles(businessGroup.getTenant(), businessGroup.getId(), null);
for (var i = 0; i < roles.length; i++) {
	service.deleteSubtenantRole(host.tenant , businessGroup.getId() , roles[i].getScopeRoleRef());
}
if(administrators){
	vCACCAFESubtenantHelper.setManagers(businessGroup , administrators);
}
if(users){
	vCACCAFESubtenantHelper.setUsers(businessGroup , users);
}
if(support){
	vCACCAFESubtenantHelper.setSupportMembers(businessGroup , support);
}
if(sharedAccess){
	vCACCAFESubtenantHelper.setSharedAccessUsers(businessGroup , sharedAccess);
}

vCACCAFESubtenantHelper.setManagerEmails(businessGroup , administratorEmail);

if(defaultMachinePrefix){
	vCACCAFESubtenantHelper.setMachinePrefixId(businessGroup , defaultMachinePrefix.getId());
} else {
	vCACCAFESubtenantHelper.setMachinePrefixId(businessGroup , "");
}
vCACCAFESubtenantHelper.setADContainer(businessGroup , activeDirectoryContainer);


System.log("Updating business group '" + name + "'...");
service.updateSubtenant(host.tenant, businessGroup);
service.addRoles(host.tenant, businessGroup.getId(), businessGroup.getSubtenantRoles());
System.log("Business group updated: " + businessGroup.getName());
return vCACCAFEEntitiesFinder.getSubtenant(host, businessGroup.getId());
}
}
