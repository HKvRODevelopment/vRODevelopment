/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.blueprint {
export function unpublishServiceBlueprint(blueprint?: vCACCAFE.ServiceBlueprint): void {com.vmware.library.vcaccafe.util.validateObject(blueprint, "Service blueprint");
var host = vCACCAFEEntitiesFinder.getHostForEntity(blueprint);
var blueprintService = host.createAdvancedDesignerClient().getAdvancedDesignerServiceBlueprintService();

System.log("Unpublishing service blueprint " + blueprint.getName() + "...");
blueprintService.updateServiceBlueprintStatus(host.tenant, blueprint.getId() , vCACCAFEDesignerPublishStatus.DRAFT);
System.log("Unpublished service blueprint " + blueprint.getName() + ".");
}
}
