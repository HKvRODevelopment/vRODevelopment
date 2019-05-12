/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function findNamespacesForHost(operation?: REST.RESTOperation): Array<string> {//return something if only put or post
if ( operation != null && (operation.method == "POST" || operation.method == "PUT")) {
	return operation.host.getSchemaNamespaces();
}
return [];
}
}
