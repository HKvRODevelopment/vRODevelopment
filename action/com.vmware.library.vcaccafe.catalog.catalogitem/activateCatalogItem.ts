/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.catalogitem {
export function activateCatalogItem(catalogItem?: vCACCAFE.AdminCatalogItem): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(catalogItem);
var client = host.createCatalogClient().getCatalogAdminCatalogItemService();

catalogItem.setStatus(vCACCAFEPublishStatus.PUBLISHED);

System.log("Activating catalog item "+ catalogItem.getName() +"...");
client.updateCatalogItem(catalogItem);
System.log("Catalog item: " + catalogItem.getName() + " activated.");
}
}
