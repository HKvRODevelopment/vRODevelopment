/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.configurations {
export function removeObjectInConfigurationElement(configurationElement?: ConfigurationElement, configurationElementAttributeName?: string, element?: any): boolean {var attributeValues = configurationElement.getAttributeWithKey(configurationElementAttributeName).value;
if (attributeValues!=null){
	if(element instanceof LdapGroup || element instanceof LdapUser){
		for (var i = 0; i<attributeValues.length; i++){
			if(element.dn==attributeValues[i].dn){
				attributeValues.splice(i,1);
				configurationElement.setAttributeWithKey(configurationElementAttributeName,attributeValues);
				return true;
			}
		}
	}else{
		for (var i = 0; i<attributeValues.length; i++){
			if(element==attributeValues[i]){
				attributeValues.splice(i,1);
				configurationElement.setAttributeWithKey(configurationElementAttributeName,attributeValues);
				return true;
			}
		}
	}
	
	
}
return false;
}
}
