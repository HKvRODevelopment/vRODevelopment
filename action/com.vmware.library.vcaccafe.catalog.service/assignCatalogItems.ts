/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.service {
export function assignCatalogItems(service?: vCACCAFE.Service, catalogItems?: Array<vCACCAFE.AdminCatalogItem>): void {var serviceHost = vCACCAFEEntitiesFinder.getHostForEntity(service);
var client = serviceHost.createCatalogClient().getCatalogAdminCatalogItemService();

var serviceRef;
var catalogHost

//validation
for (var i = 0 ; i < catalogItems.length ; i++ ) {
	catalogHost = vCACCAFEEntitiesFinder.getHostForEntity(catalogItems[i]);
	if(catalogHost.id != serviceHost.id) {
		throw "Invalid assignment: One or more catalog items does not belong to the same host as the service.";		
	} 
}

System.log("Assigning catalog items to the service...");
for (var i = 0 ; i < catalogItems.length ; i++ ) {
	System.log("Assigning catalog item:" + catalogItems[i].getName() + " to service: " + service.getName());
	serviceRef = new vCACCAFELabelledReference(service.getId());
	catalogItems[i].setServiceRef(serviceRef);
	client.updateCatalogItem(catalogItems[i]);
}
System.log("Catalog items assigned to the service.");
}
}
