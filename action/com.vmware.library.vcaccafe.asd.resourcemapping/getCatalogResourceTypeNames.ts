/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourcemapping {
export function getCatalogResourceTypeNames(host?: vCACCAFE.VCACHost): Array<string> {var catalogResourceTypes = com.vmware.library.vcaccafe.asd.resourcemapping.getCatalogResourceTypes(host);

var catalogResourceTypeNames = new Array();
if(!catalogResourceTypes) {
	return catalogResourceTypeNames;
}
for (var i = 0 ; i < catalogResourceTypes.length ; i++ ) {
	catalogResourceTypeNames[i] = catalogResourceTypes[i].getName();
}
return catalogResourceTypeNames;
}
}
