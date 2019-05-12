/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function shouldDisplaySchemaSelection(operation?: REST.RESTOperation): boolean {if ( operation != null && (operation.method == "POST" || operation.method == "PUT")) {
	var namespaces = operation.host.getSchemaNamespaces();
	if ( namespaces != null ) {
		if ( namespaces.length > 1 ) {
			return true;
		} else if (namespaces.length > 0 ) {
			var elements = operation.host.getSchemaElements(namespaces[0]);
			return elements != null && elements.length > 0;
		}
	}
}
return false;

}
}
