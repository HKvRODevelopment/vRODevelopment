/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.composition.blueprint {
export function publishCompositeBlueprint(blueprint?: vCACCAFE.CompositeBlueprint): vCACCAFE.CompositeBlueprint {com.vmware.library.vcaccafe.util.validateObject(blueprint, "Composite blueprint");
var host = vCACCAFEEntitiesFinder.getHostForEntity(blueprint);
var blueprintService = host.createCompositionClient().getCompositionCompositeBlueprintService();
blueprint.setPublishStatus(vCACCAFECompositionPublishStatus.PUBLISHED);

System.log("Publishing composite blueprint " + blueprint.getName() + "...");
var publishedBlueprint = blueprintService.createOrUpdateBlueprint(blueprint);
System.log("Composite blueprint published " + blueprint.getName() + ".");
return publishedBlueprint;
}
}
