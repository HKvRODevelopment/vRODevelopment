/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.customProperties {
export function setCustomProperty(object?: any, key?: string, value?: any): void {// Check that a key has been provided
if ( key.equals("") ) {
	throw "No key for custom property ";
}

// Check that the object can have a custom property - it must be a plugin type
var isPluginType = com.vmware.library.customProperties.isPluginType(object);
if ( ! isPluginType ) {
	throw "The object type: " + System.getObjectType(object) + " is not a plugin type ";
}

Server.setCustomProperty(object, key, value);
}
}
