/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function deleteCompositeBlueprintProperty(cbp?: vCACCAFE.CompositeBlueprint, propertyKey?: string): void {var cafeHost = vCACCAFEEntitiesFinder.getHostForEntity(cbp);
var compositeBlueprintService = cafeHost.createCompositionClient().getCompositionCompositeBlueprintService();
var propertyLiteralValue = new vCACCAFEComponentFieldValue(null);
var map = new Object();
map[propertyKey] = null;
compositeBlueprintService.updateBlueprintProperties(cbp.id, map);
}
}
