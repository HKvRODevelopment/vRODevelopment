/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.configurations {
export function getConfigurationAttributeDescriptionList(confElement?: ConfigurationElement): Array<string> {

var attributes = confElement.attributes;
var ret = new Array();
for (var i = 0; i<attributes.length;i++){
	var att = attributes[i];
	if(att.name.indexOf("RdpTemplate")==-1 && att.name.indexOf("ImageCompanyLogo")==-1 && att.name.indexOf("Nav")==-1){
		ret.push(att.description);
	}
}
return ret;
}
}
