/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.customProperties {
export function isPluginType(object?: any): boolean {// Check if this object is a plugin type
var objType = System.getObjectType(object);
var pluginTypes = Server.getAllPluginTypes();
var isPluginType = false;
if (pluginTypes==null){
	throw "No plugin types found";
}else{
	for (var i = 0; i<pluginTypes.length; i++){
		if (objType == pluginTypes[i]) {
			isPluginType = true;
			break;
		}
	}
}
return isPluginType;

}
}
