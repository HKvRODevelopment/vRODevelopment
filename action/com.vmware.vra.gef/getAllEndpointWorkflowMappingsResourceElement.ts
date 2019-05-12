/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function getAllEndpointWorkflowMappingsResourceElement(): Properties {var category = Server.getResourceElementCategoryWithPath("Library/GEF");
return getEndpointWorkflowMappingsResourceElement(category);

function getEndpointWorkflowMappingsResourceElement(category) {
	for (var resourceElement of category.resourceElements) {
		System.log("getAllEndpointWorkflowMappingsResourceElement - resourceElement.name: " + resourceElement.name);
		if (resourceElement.name == "Generic Compute Plugin Mappings") {		
			return resourceElement;
		}
	}
	System.error("Unable to find the resource element 'GEF mappings' under Library/GEF - perhaps it was deleted.  Re-install the plugin.");
	return null;
}
}
}
