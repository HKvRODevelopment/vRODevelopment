/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.composition.blueprint {
export function unpublishCompositeBlueprint(blueprint?: vCACCAFE.CompositeBlueprint): vCACCAFE.CompositeBlueprint {com.vmware.library.vcaccafe.util.validateObject(blueprint, "Composite blueprint");
var host = vCACCAFEEntitiesFinder.getHostForEntity(blueprint);
var blueprintService = host.createCompositionClient().getCompositionCompositeBlueprintService();
blueprint.setPublishStatus(vCACCAFECompositionPublishStatus.DRAFT);

System.log("Unpublishing composite blueprint " + blueprint.getName() + "...");
var publishedBlueprint = blueprintService.createOrUpdateBlueprint(blueprint);
System.log("Composite blueprint unpublished " + blueprint.getName() + ".");
return publishedBlueprint;
}
}
