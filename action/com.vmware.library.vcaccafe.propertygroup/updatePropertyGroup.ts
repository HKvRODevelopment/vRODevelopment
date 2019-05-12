/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function updatePropertyGroup(group?: vCACCAFE.PropertyGroup, name?: string, description?: string): vCACCAFE.PropertyGroup {if(group == "notfound") {
	throw "Property group not found!";
}
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createPropertyClient().getPropertyContextPropertyGroupService();
group.setName(name);
group.setDescription(description);

System.log("Updating property group...");
service.savePropertyGroup(group.getId() ,group);

System.log("Property group: " + group.getId() + " updated.");
return vCACCAFEEntitiesFinder.getPropertyGroup(host, group.getId());
}
}
