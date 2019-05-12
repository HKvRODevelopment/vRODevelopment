/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.fabricgroup {
export function updateFabricGroup(name?: string, description?: string, administrators?: Array<string>, group?: vCACCAFE.FabricGroup): vCACCAFE.FabricGroup {group.setName(name);
group.setDescription(description);
if(!administrators) {
	administrators = group.getAdministrators();
}
group.setAdministrators(administrators);
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createInfrastructureClientWithCurrentUserRights().getFabricGroupService();
service.update(group);
return vCACCAFEEntitiesFinder.getFabricGroup(host, group.getId().toString());
}
}
