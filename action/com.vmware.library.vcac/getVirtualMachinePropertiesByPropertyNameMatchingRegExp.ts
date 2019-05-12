/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVirtualMachinePropertiesByPropertyNameMatchingRegExp(host?: vCAC.VCACHost, propertyNameRegexp?: Regexp): Array<vCAC.Entity> {var modelName = "ManagementModelEntities.svc";
var entitySetName = "VirtualMachineProperties";

var properties = new Properties();


var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, modelName, entitySetName, properties, null);

var matchingEntities = new Array();

for (var entity of entities) {
	if (entity.getProperty("PropertyName").match(propertyNameRegexp)) { 
		matchingEntities.push(entity);
		System.log("getVirtualMachinePropertiesByPropertyNameMatchingRegExp : " + propertyNameRegexp + " matched " + entity.getProperty("PropertyName"));
	}
}

return matchingEntities;
}
}
