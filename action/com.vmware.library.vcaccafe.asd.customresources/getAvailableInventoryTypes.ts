/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.customresources {
export function getAvailableInventoryTypes(host?: vCACCAFE.VCACHost): Array<any> {var client = host.createAdvancedDesignerClient().getAdvancedDesignerInventoryTypeService();

System.log("Getting inventory types...");
var inventoryTypes = client.getInventoryTypes().getContent();
System.log("Getting inventory types finished successfully");

return inventoryTypes;
}
}
