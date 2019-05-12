/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function addCustomProperty(group?: vCACCAFE.BusinessGroup, name?: string, value?: string, isEncrypted?: boolean, isRuntime?: boolean): vCACCAFE.BusinessGroup {com.vmware.library.vcaccafe.util.validateObject(group, "Business group");
var property = new vCACCAFECustomProperty();
property.setName(name);
property.setValue(value);
property.setIsEncrypted(isEncrypted);
property.setIsRuntime(isRuntime);

var properties = group.getCustomProperties();
properties[properties.length] = property;

group.setCustomProperties(properties);

System.log("Updating business group '" + group.getName() + "'...");
var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createInfrastructureClient().getInfrastructureBusinessGroupsService();
service.update(group);
System.log("Business group updated: " + group.getId().toString());

return vCACCAFEEntitiesFinder.getBusinessGroup(host, group.getId().toString());
}
}
