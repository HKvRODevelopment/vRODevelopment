/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function deletePropertyGroup(group?: vCACCAFE.PropertyGroup): void {if(group == "notfound") {
	throw "Property group not found!";
}
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createPropertyClient().getPropertyContextPropertyGroupService();

System.log("Deleting property group...");
service.deletePropertyGroup(group.getId());
System.log("Property definition: " + group.getName() + " deleted.");
}
}
