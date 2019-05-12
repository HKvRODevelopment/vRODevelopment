/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourcemapping {
export function getCatalogResourceTypes(host?: vCACCAFE.VCACHost): Array<any> {System.log("Getting catalog resource types...");
var resourceTypes = vCACCAFEEntitiesFinder.getCatalogResourceTypes(host);
System.log("Getting catalog resource types finished successfully");
return resourceTypes;
}
}
