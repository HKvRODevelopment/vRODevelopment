/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertydefinition {
export function deletePropertyDefinition(propertyDefinition?: vCACCAFE.PropertyDefinition): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(propertyDefinition);
var service = host.createPropertyClient().getPropertyContextPropertyDefinitionService();

System.log("Deleting property definition...");
service.deletePropertyDefinition(propertyDefinition.id);
System.log("Property definition: " + propertyDefinition.getLabel() + " deleted.");
}
}
