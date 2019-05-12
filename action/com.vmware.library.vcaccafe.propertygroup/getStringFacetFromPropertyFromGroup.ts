/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function getStringFacetFromPropertyFromGroup(group?: vCACCAFE.PropertyGroup, propertyName?: string, facetName?: string): string {if(group && propertyName && facetName) {
	return group.properties.get(propertyName).facets.get(facetName).getValue().getValue();
} else {
return "";
}

}
}
