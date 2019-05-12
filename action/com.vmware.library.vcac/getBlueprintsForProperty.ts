/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getBlueprintsForProperty(host?: vCAC.VCACHost, property?: string): Array<vCAC.Blueprint> {if (host == null) return null;
var properties = new Properties;
properties.put("PropertyName", property);
System.log("Property name: " + property);
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, "ManagementModelEntities.svc", "VirtualMachineTemplateProperties", properties, null);
System.log("entities: " + entities);
var virtualMachineTemplateIds = new Array();

for (var entity of entities) {
	var linkedVirtualMachineTemplateEntities = entity.getLink(host, "VirtualMachineTemplate");
	System.log("linkedVirtualMachineTemplateEntities: " + linkedVirtualMachineTemplateEntities);
	for (var linkedVirtualMach ineTemplateEntity of linkedVirtualMachineTemplateEntities) {
			var virtualMachineTemplateId = linkedVirtualMachineTemplateEntity.getProperty("VirtualMachineTemplateID");
			System.log("virtualMachineTemplateId: " + virtualMachineTemplateId);
			virtualMachineTemplateIds.push(virtualMachineTemplateId);
			System.log("Found blue print with virtualMachineTemplateId " + virtualMachineTemplateId); 
	} 
}

var matchingBluePrints = new Array();

for (var virtualMach ineTemplateId of virtualMachineTemplateIds) {
	System.log("Getting Blueprint by id: " + virtualMachineTemplateId);
	var blueprintId = {
		VirtualMachineTemplateID:virtualMachineTemplateId,
	};
	var bp = vCACEntityManager.readModelEntity(host.id, "ManagementModelEntities.svc", "VirtualMachineTemplates", blueprintId, null);
	System.log("got blueprint: " + bp);
	matchingBluePrints.push(bp);
}

return matchingBluePrints;
}
}
