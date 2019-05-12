/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function findElementsInNamespace(operation?: REST.RESTOperation, namespace?: string): Array<string> {var result = [];
//return something if we have put and post
if ( operation != null && (operation.method == "POST" || operation.method == "PUT")) {
	var list = operation.host.getSchemaElements(namespace);
	for (var i in list) {
		result.push(list[i].getName());
	}
}
return result;
}
}
