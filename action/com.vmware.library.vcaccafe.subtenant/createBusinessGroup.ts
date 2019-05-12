/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function createBusinessGroup(host?: vCACCAFE.VCACHost, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administratorEmail?: string, administrators?: Array<string>, support?: Array<string>, users?: Array<string>, sharedAccess?: Array<string>): vCACCAFE.Subtenant {var subtenant = new vCACCAFESubtenant();

subtenant.setName(name);
subtenant.setDescription(description);

if(administrators){
	vCACCAFESubtenantHelper.setManagers(subtenant , administrators);
}
if(users){
	vCACCAFESubtenantHelper.setUsers(subtenant , users);
}
if(support){
	vCACCAFESubtenantHelper.setSupportMembers(subtenant , support);
}
if(sharedAccess){
	vCACCAFESubtenantHelper.setSharedAccessUsers(subtenant , sharedAccess);
}

var extensionData = new vCACCAFELiteralMap();
subtenant.setExtensionData(extensionData);
vCACCAFESubtenantHelper.setManagerEmails(subtenant , administratorEmail);
if(defaultMachinePrefix){
	vCACCAFESubtenantHelper.setMachinePrefixId(subtenant , defaultMachinePrefix.getId());
}
if(activeDirectoryContainer){
	vCACCAFESubtenantHelper.setADContainer(subtenant , activeDirectoryContainer);
}

System.log("Creating business group '" + name + "'...");
var service = host.createAuthenticationClient().getAuthenticationSubtenantService();
var subtenant = service.createSubtenant(host.tenant, subtenant);
System.log("Business group created: " + subtenant.getId());
return subtenant;
}
}
