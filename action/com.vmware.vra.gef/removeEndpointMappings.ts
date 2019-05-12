/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function removeEndpointMappings(endpointName?: string): void {var category = Server.getResourceElementCategoryWithPath("Library/GEF/Providers");
for (var resourceElement of category.resourceElements) {
	if (resourceElement.name == endpointName) {		
		System.log("Removing: " + resourceElement.name);
		Server.removeResourceElement(resourceElement);		
	}
}

}
}
