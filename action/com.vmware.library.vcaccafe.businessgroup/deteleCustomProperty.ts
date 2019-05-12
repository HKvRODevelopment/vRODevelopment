/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function deteleCustomProperty(group?: vCACCAFE.BusinessGroup, property?: vCACCAFE.CustomProperty): vCACCAFE.BusinessGroup {com.vmware.library.vcaccafe.util.validateObject(group, "Business group");
com.vmware.library.vcaccafe.util.validateObject(property, "Custom property");
var found = false;

var newProperties = new Array();

var properties = group.getCustomProperties();
for (var i = 0; i < properties.length; i++) {
	if (properties[i].getId() != property.getId()) {
		newProperties.push(properties[i]);
	} else {
		found = true;
	}
}

if (found) {
	group.setCustomProperties(newProperties);

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
