/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.configurations {
export function addResourceElementInConfigurationElement(resourceElement?: ResourceElement, configurationElement?: ConfigurationElement, configurationElementAttributeName?: string): boolean {

var attributeValues = configurationElement.getAttributeWithKey(configurationElementAttributeName).value;

if (attributeValues==null){
	attributeValues = new Array();
}else{
	for (var i = 0; i<attributeValues.length; i++){
		var resource = attributeValues[i];
		if(resource == resourceElement){
			//System.log("The resource element "+ resource.name + " already exists in this array");
			return false;
		}
	}

}

attributeValues.push(resourceElement);

configurationElement.setAttributeWithKey(configurationElementAttributeName,attributeValues);

return true;
}
}
