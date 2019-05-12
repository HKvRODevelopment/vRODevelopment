/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function updateCustomProperty(group?: vCACCAFE.BusinessGroup, property?: vCACCAFE.CustomProperty, name?: string, value?: string, isEncrypted?: boolean, isRuntime?: boolean): vCACCAFE.BusinessGroup {com.vmware.library.vcaccafe.util.validateObject(group, "Business group");
com.vmware.library.vcaccafe.util.validateObject(property, "Custom property");
if (name != null) {
	property.setName(name);
}
if (value != null) {
	property.setValue(value);
}
if (isEncrypted != null) {
	property.setIsEncrypted(isEncrypted);
}
if (isRuntime != null) {
	property.setIsRuntime(isRuntime);
}

var found = false;

var properties = group.getCustomProperties();
for (var i = 0; i < properties.length; i++) {
	if (properties[i].getId() == property.getId()) {
		properties[i] = property;
		found = true;
		break;
	}
}

if (found) {
	group.setCustomProperties(properties);

	System.log("Updating business group '" + group.getName() + "'...");
	var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
	var service = host.createInfrastructureClient().getInfrastructureBusinessGroupsService();
	service.update(group);
	System.log("Business group updated: " + group.getId().toString());
} else {
	throw "No property found with id '" + property.getId() + "' in busines group '" + group.getName() + "'!";
}

return vCACCAFEEntitiesFinder.getBusinessGroup(host, group.getId().toString());
}
}
