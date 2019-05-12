/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function deleteVcoPropertiesFromBlueprint(cafeHost?: vCACCAFE.VCACHost): void {var blueprintService = cafeHost.createCompositionClient().getCompositionCompositeBlueprintService();
var pageRequest = new vCACCAFEPageOdataRequest(1, Number.MAX_VALUE);
var pagedResources = blueprintService.getBlueprintsWithContent(pageRequest);

for (var compositeBluepr int of pagedResources.getContent()){
	var hashMapOfProperties = compositeBlueprint.getProperties();

	for (var i = 0, keys = Object.keys(hashMapOfProperties), ii = keys.length; i < ii; i++) {
		if(keys[i].indexOf("ExternalWFStubs.") === 0){
			hashMapOfProperties[keys[i]] = null;
			System.log("Deleted blueprint property: " + keys[i] + " for blueprint: " + compositeBlueprint.getName());
		}
	}
	blueprintService.updateBlueprintProperties(compositeBlueprint.getId(), hashMapOfProperties);
}
}
}
