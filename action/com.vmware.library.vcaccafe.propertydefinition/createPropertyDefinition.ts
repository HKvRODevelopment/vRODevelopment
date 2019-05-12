/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertydefinition {
export function createPropertyDefinition(host?: vCACCAFE.VCACHost, allTenantsVisibility?: boolean, definitionName?: string, description?: string, label?: string, dataTypeId?: string, orderIndex?: number, displayAdviceId?: string, multiValued?: boolean, mandatory?: boolean, encrypted?: boolean, staticValues?: boolean, predefinedValues?: Array<CompositeType(name.string,value.string).Entries>, customAllowed?: boolean, externalAction?: Action, actionInputs?: Array<CompositeType(inputName.string,bind.boolean,value.string).actionInputs>): vCACCAFE.PropertyDefinition {var service = host.createPropertyClient().getPropertyContextPropertyDefinitionService();

var propertyDefinition = new vCACCAFEContextPropertyDefinition();

if(allTenantsVisibility) {
	propertyDefinition.setTenantId(null);
} else {
	propertyDefinition.setTenantId(host.tenant);
}
propertyDefinition.setId(definitionName);
propertyDefinition.setDescription(description);
propertyDefinition.setLabel(label);
var dataType = vCACCAFEDataTypeId.fromId(dataTypeId);
propertyDefinition.setDataType(vCACCAFEPrimitiveDataType.fromTypeId(dataType));
propertyDefinition.setOrderIndex(orderIndex);

var facets = new Properties() ;
var encryptedEvaluator = vCACCAFEConditionalEvaluator.fromBoolean(encrypted);
var mandatoryEvaluator = vCACCAFEConditionalEvaluator.fromBoolean(mandatory);
facets.put("encrypted",encryptedEvaluator);
facets.put("mandatory",mandatoryEvaluator);
propertyDefinition.setFacets(facets);
//Set Permissible values
var StaticPermissibleValueList;
if(displayAdviceId == "dropdown") {
	if(staticValues) {
		var values = [];
		
		for (var predef inedValue of predefinedValues) {
			var literal = vCACCAFEStringLiteral.fromString(predefinedValue.value);
			var value = new vCACCAFEPermissibleValue(literal , predefinedValue.name);
			values.push(value);
		}
		StaticPermissibleValueList = new vCACCAFEStaticPermissibleValueList(values)
		StaticPermissibleValueList.setCustomAllowed(customAllowed);
		propertyDefinition.setPermissibleValues(StaticPermissibleValueList);
	} else {
		var actionFQN = externalAction.module.name+"/"+externalAction.name;
		var valueContext;
		if(externalAction.parameters == "") {
			valueContext = new vCACCAFEDynamicValueContext(actionFQN , null);
		} else {
			var  parameterMappingArray = [];
			if(actionInputs.length != externalAction.parameters.length) {
				throw("Number of supplied action inputs mismatch");
			}
			for (var var input of actionInputs) {
				if(input.bind) {
					var fieldEvaluator = new vCACCAFEFieldReference(input.value);
					var parameterMapping = new vCACCAFEParameterMapping(input.inputName ,fieldEvaluator);
					parameterMappingArray.push(parameterMapping);
				} else {
					var stringEvaluator = vCACCAFEConditionalEvaluator.fromString(input.value);
					var parameterMapping = new vCACCAFEParameterMapping(input.inputName ,stringEvaluator);
					parameterMappingArray.push(parameterMapping);
				}
			}
			var mappingCollection = new vCACCAFEParameterMappingCollection();
			mappingCollection.setMappings(parameterMappingArray);
			valueContext = new vCACCAFEDynamicValueContext(actionFQN , mappingCollection);
		}
		
		var dynamicPermissibleValueList = new vCACCAFEDynamicPermissibleValueList(null, valueContext);
		dynamicPermissibleValueList.setCustomAllowed(customAllowed);
		propertyDefinition.setPermissibleValues(dynamicPermissibleValueList);
	}
}



var DA = dataType.getDefaultMultiValueDisplayAdvice().fromId(displayAdviceId);
propertyDefinition.displayAdvice = DA;
propertyDefinition.setIsMultiValued(multiValued);
System.log("Creating property definition...");

service.createPropertyDefinition(propertyDefinition);

System.log("Property definition: " + definitionName + " created.");
return vCACCAFEEntitiesFinder.getPropertyDefinition(host, definitionName);

}
}
