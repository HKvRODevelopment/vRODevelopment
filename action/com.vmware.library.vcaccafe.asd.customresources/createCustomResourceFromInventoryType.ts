/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.customresources {
export function createCustomResourceFromInventoryType(host?: vCACCAFE.VCACHost, type?: string, name?: string, description?: string): vCACCAFE.CustomResource {var client = host.createAdvancedDesignerClient().getAdvancedDesignerCsResourceTypeService();
var inventoryTypes = com.vmware.library.vcaccafe.asd.customresources.getAvailableInventoryTypes(host);
var inventoryType;
//getting resource type default form
for (var i = 0 ; i < inventoryTypes.length ; i++ ) {
   if(type == inventoryTypes[i].getName()) {
      inventoryType = inventoryTypes[i];
   }
}
var form = client.generateCsResourceTypeDetailsForm(host.tenant , inventoryType);

var csResourceType = new vCACCAFECsResourceType();
csResourceType.setName(name);
csResourceType.setDescription(description);
csResourceType.setVcoType(type);
csResourceType.setTenantId(host.tenant);
csResourceType.setDetailsForm(form);

System.log("Creating custom resource...");
var uri = client.createResourceType(host.tenant, csResourceType);
var uriString = uri.toString();
System.log("Custom resource created " + uriString);

var uriParts = uriString.split("/");
var resourceId = uriParts[uriParts.length - 1];
return vCACCAFEEntitiesFinder.getCustomResource(host, resourceId);
}
}
