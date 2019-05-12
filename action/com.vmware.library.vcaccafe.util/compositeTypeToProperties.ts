/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.util {
export function compositeTypeToProperties(types?: Array<CompositeType(name.string,value.string).Entries>): Properties {var properties = new Properties();

if (types != null) {
	for (var i = 0; i < types.length; i++) {
		properties.put(types[i].name, types[i].value);
	}
}

return properties;


}
}
