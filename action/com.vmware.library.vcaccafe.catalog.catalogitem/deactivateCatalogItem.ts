/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.catalogitem {
export function deactivateCatalogItem(catalogItem?: vCACCAFE.AdminCatalogItem): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(catalogItem);
var client = host.createCatalogClient().getCatalogAdminCatalogItemService();

catalogItem.setStatus(vCACCAFEPublishStatus.RETIRED);

System.log("Deactivating catalog item "+ catalogItem.getName() +"...");
client.updateCatalogItem(catalogItem);
System.log("Catalog item: " + catalogItem.getName() + " deactivated.");
}
}
