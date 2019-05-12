/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.customresources {
export function getAvailableInventoryTypeNames(host?: vCACCAFE.VCACHost): Array<string> {var inventoryTypes = com.vmware.library.vcaccafe.asd.customresources.getAvailableInventoryTypes(host);

var inventoryTypeNames = new Array();
for (var i = 0 ; i < inventoryTypes.length ; i++ ) {
	inventoryTypeNames[i] = inventoryTypes[i].getName();
}
return inventoryTypeNames;
}
}
