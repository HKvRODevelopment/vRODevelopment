/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function addUpdatePropertyFromVirtualMachineEntity(host?: vCAC.VCACHost, virtualMachineEntity?: vCAC.Entity, propertyName?: string, propertyValue?: string, propertyIsHidden?: boolean, propertyIsRuntime?: boolean, propertyIsEncrypted?: boolean, doNotUpdate?: boolean): vCAC.Entity {var model = "ManagementModelEntities.svc"
var entitySet = "VirtualMachineProperties";


var found = false;

//Find property by propety name
var virtualMachinePropertiesEntities = virtualMachineEntity.getLink(host, entitySet);
for (var virtualMach inePropertiesEntity of virtualMachinePropertiesEntities) {
	if (virtualMachinePropertiesEntity.getProperty("PropertyName") == propertyName) {
		found = true;
		System.log("Found existing property " + propertyName);
		break;
	}	
}


var properties = new Properties();
properties.put("PropertyName", propertyName);
properties.put("PropertyValue", propertyValue);

properties.put("IsHidden", propertyIsHidden == null ? false : propertyIsHidden);
properties.put("IsRuntime", propertyIsRuntime == null ? false : propertyIsRuntime);
properties.put("IsEncrypted", propertyIsEncrypted == null ? false : propertyIsEncrypted);

var links = new Properties();
links.put("VirtualMachine",virtualMachineEntity);


if (found == true) {
	if (doNotUpdate == false && propertyValue != "") {
		var entityKey = virtualMachinePropertiesEntity.entityKey;
		var entityKeyId = entityKey.get("Id");
		System.log("Update entity id " + entityKeyId + " with property " + propertyName + " : " + propertyValue + " on virtualMachine entity " + virtualMachineEntity.getProperty("VirtualMachineName"));
		return vCACEntityManager.updateModelEntityBySerializedKey(host.id , model , entitySet , entityKeyId , properties, links);
		}
		else	{
			if (doNotUpdate == true) System.log("doNotUpdate set to true - not updating property " + propertyName);
			if (propertyValue == "") System.log("not updating property " + propertyName + " with empty value");		
		}
}
else {
	System.log("Create property " + propertyName + " : " + propertyValue + " on virtualMachine entity " + virtualMachineEntity.getProperty("VirtualMachineName"));
	return vCACEntityManager.createModelEntity(host.id, model, entitySet, properties, links);
}
}
}
