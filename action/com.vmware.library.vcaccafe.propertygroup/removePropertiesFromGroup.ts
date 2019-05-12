/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function removePropertiesFromGroup(group?: vCACCAFE.PropertyGroup, propertiesToDelete?: Array<string>): vCACCAFE.PropertyGroup {if(group == "notfound") {
	throw "Property group not found!";
}
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createPropertyClient().getPropertyContextPropertyGroupService();
var properties = group.getProperties();

for (var property of propertiesToDelete) {
	properties.remove(property);
};
group.setProperties(properties);

System.log("Updating property group...");
service.savePropertyGroup(group.getId() , group);
System.log("Property group: " + group.getId() + " updated.");
return vCACCAFEEntitiesFinder.getPropertyGroup(host, group.getId());

}
}
