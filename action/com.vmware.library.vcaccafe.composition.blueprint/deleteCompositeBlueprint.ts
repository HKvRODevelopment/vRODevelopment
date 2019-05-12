/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.composition.blueprint {
export function deleteCompositeBlueprint(blueprint?: vCACCAFE.CompositeBlueprint): void {com.vmware.library.vcaccafe.util.validateObject(blueprint, "Composite blueprint");
var host = vCACCAFEEntitiesFinder.getHostForEntity(blueprint);
var blueprintService = host.createCompositionClient().getCompositionCompositeBlueprintService();

System.log("Deleting composite blueprint " + blueprint.getName() + "...");
blueprintService.deleteBlueprint(blueprint.getId());
System.log("Deleted composite blueprint " + blueprint.getName() + ".");
}
}
