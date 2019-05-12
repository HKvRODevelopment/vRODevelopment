/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function addUpdatePropertyFromBlueprint(blueprint?: vCACCAFE.CompositeBlueprint, propertyName?: string, propertyValue?: string, propertyIsHidden?: boolean, propertyIsRuntime?: boolean, propertyIsEncrypted?: boolean, doNotUpdate?: boolean): void {var cafeHost = vCACCAFEEntitiesFinder.getHostForEntity(blueprint);
if(cafeHost != null){
	var compositeBlueprintService = cafeHost.createCompositionClient().getCompositionCompositeBlueprintService();

	var customPropertyData = new vCACCAFEComponentFieldValue();

	var propertyLiteralValue = new vCACCAFEComponentFieldValue(new vCACCAFEStringLiteral(propertyValue));
	customPropertyData.addFacetValue("defaultValue", vCACCAFEConstantValue.fromString(propertyValue));
	customPropertyData.addFacetValue("encrypted", vCACCAFEConstantValue.fromBoolean(propertyIsEncrypted));
	customPropertyData.addFacetValue("readOnly", vCACCAFEConstantValue.fromBoolean(doNotUpdate));
	customPropertyData.addFacetValue("visibility", vCACCAFEConstantValue.fromBoolean(propertyIsRuntime));

	var map = new Object();
	map[propertyName] = customPropertyData;
	compositeBlueprintService.updateBlueprintProperties(blueprint.getId(), map);
} else {
	System.log("Empty cafe host");
}

}
}
