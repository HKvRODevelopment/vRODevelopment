/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function createOrUpdatePropertyInGroup(group?: vCACCAFE.PropertyGroup, value?: string, encrypted?: boolean, visibility?: boolean, mandatory?: boolean, name?: string): vCACCAFE.PropertyGroup {if(group == "notfound") {
	throw "Property group not found!";
}

var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
var service = host.createPropertyClient().getPropertyContextPropertyGroupService();

var property = new vCACCAFEContextProperty();

var encryptedLiteral = vCACCAFEBooleanLiteral.fromBoolean(encrypted);
property.setEncrypted(encryptedLiteral);
var visibleLiteral = vCACCAFEBooleanLiteral.fromBoolean(visibility);
property.setVisible(visibleLiteral);

var facets = property.getFacets();
var valueEvaluator = vCACCAFEConditionalEvaluator.fromString(value);
var mandatoryEvaluator = vCACCAFEConditionalEvaluator.fromBoolean(mandatory);
facets.put("defaultValue",valueEvaluator);
//facets.put("mandatory",mandatoryEvaluator);
property.setFacets(facets);

var properties = group.getProperties();
if(!properties) {
properties = new Properties;
}
properties.put(name, property);
group.setProperties(properties);

System.log("Updating property group...");
service.savePropertyGroup(group.getId() , group);
System.log("Property group: " + group.getId() + " updated.");
return vCACCAFEEntitiesFinder.getPropertyGroup(host, group.getId());
}
}
