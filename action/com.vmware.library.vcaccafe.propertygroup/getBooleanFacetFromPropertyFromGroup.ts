/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function getBooleanFacetFromPropertyFromGroup(group?: vCACCAFE.PropertyGroup, propertyName?: string, facetName?: string): boolean {if(group && propertyName && facetName) {
	return group.properties.get(propertyName).facets.get(facetName).getValue().getValue();
} else {
return false;
}

}
}
