/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.catalogitem {
export function assignCatalogItemToService(catalogItem?: vCACCAFE.AdminCatalogItem, service?: vCACCAFE.Service): void {var catalogItemHost = vCACCAFEEntitiesFinder.getHostForEntity(catalogItem);
var serviceHost = vCACCAFEEntitiesFinder.getHostForEntity(service);

if(catalogItemHost != serviceHost) {
	throw "Invalid assignment: selected catalog item and service belong to different hosts";
}

var client = catalogItemHost.createCatalogClient().getCatalogAdminCatalogItemService();
serviceRef = new vCACCAFELabelledReference(service.getId());
catalogItem.setServiceRef(serviceRef);

System.log("Assigning catalog item "+ catalogItem.getName() + " to service " + service.getName() + "...");
client.updateCatalogItem(catalogItem);
System.log("Catalog item: " + catalogItem.getName() + " assigned to service" + service.getName() + ".");
}
}
