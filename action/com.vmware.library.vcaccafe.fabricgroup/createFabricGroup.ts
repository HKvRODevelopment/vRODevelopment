/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.fabricgroup {
export function createFabricGroup(name?: string, description?: string, administrators?: Array<string>, host?: vCACCAFE.VCACHost): vCACCAFE.FabricGroup {var group = new vCACCAFEFabricGroup();
group.setName(name);
group.setDescription(description);
group.setAdministrators(administrators);
var service = host.createInfrastructureClientWithCurrentUserRights().getFabricGroupService();
var id = service.create(group);
return vCACCAFEEntitiesFinder.getFabricGroup(host, id.toString());
}
}
