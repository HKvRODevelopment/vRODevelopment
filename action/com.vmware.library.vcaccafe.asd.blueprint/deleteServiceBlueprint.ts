/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.blueprint {
export function deleteServiceBlueprint(blueprint?: vCACCAFE.ServiceBlueprint): void {com.vmware.library.vcaccafe.util.validateObject(blueprint, "Service blueprint");
var host = vCACCAFEEntitiesFinder.getHostForEntity(blueprint);
var blueprintService = host.createAdvancedDesignerClient().getAdvancedDesignerServiceBlueprintService();

System.log("Deleting service blueprint " + blueprint.getName() + "...");
blueprintService.deleteServiceBlueprint(host.tenant , blueprint.getId());
System.log("Deleted service blueprint " + blueprint.getName() + ".");
}
}
