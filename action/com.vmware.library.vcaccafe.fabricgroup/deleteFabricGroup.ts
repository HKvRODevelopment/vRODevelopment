/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.fabricgroup {
export function deleteFabricGroup(group?: vCACCAFE.FabricGroup): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createInfrastructureClientWithCurrentUserRights().getFabricGroupService();
service.delete(group.getId());


}
}
