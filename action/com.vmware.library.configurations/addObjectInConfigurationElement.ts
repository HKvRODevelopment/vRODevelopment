/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.configurations {
export function addObjectInConfigurationElement(configurationElement?: ConfigurationElement, configurationElementAttributeName?: string, element?: any): boolean {var attributeValues = configurationElement.getAttributeWithKey(configurationElementAttributeName).value;

if (attributeValues==null){
	System.log('null');
	attributeValues = new Array();
}else{
	for (var i = 0; i<attributeValues.length; i++){
		if(element==attributeValues[i]){
			//System.log("Element "+ element.name + " already exists in this array");
			return false;
		}
		/*
		else {
			System.log('element id ' + element.id);
			System.log('value	id ' + attributeValues[i].id);
		}
		*/
	}
}

//System.log('push');
attributeValues.push(element);

configurationElement.setAttributeWithKey(configurationElementAttributeName,attributeValues);

return true;
}
}
