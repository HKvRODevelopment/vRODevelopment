/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra {
export function mergeProperties(properties1?: Properties, properties2?: Properties): Properties {function merge(props1, props2) {
	var result = new Properties();
	for (var key of props1.keys) {
		result.put(key, props1[key]);
	}
	
	for (var key of props2.keys) {
		if (result.get(key) && result[key] instanceof Properties && props2 instanceof Properties) {
			result.put(key, merge(result.get(key), props2[key]));
		} else {
			result.put(key, props2[key]);
		}
	}
	return result;
}

var properties = merge(properties1, properties2);
}
}
