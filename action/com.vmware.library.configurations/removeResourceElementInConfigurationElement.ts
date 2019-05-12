/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.configurations {
export function removeResourceElementInConfigurationElement(resourceElement?: ResourceElement, configurationElement?: ConfigurationElement, configurationElementAttributeName?: string): boolean {

var attributeValues = configurationElement.getAttributeWithKey(configurationElementAttributeName).value;

if (attributeValues!=null){
	for (var i = 0; i<attributeValues.length; i++){
		var resource = attributeValues[i];
		if(resource == resourceElement){
			attributeValues.splice(i,1);
			configurationElement.setAttributeWithKey(configurationElementAttributeName,attributeValues);
			return true;
		}
	}
}
return false;
}
}
