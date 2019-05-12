/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function requestCatalogItemOnBehalfOf(item?: vCACCAFE.CatalogItem, inputs?: Properties, user?: string): vCACCAFE.CatalogItemRequest {com.vmware.library.vcaccafe.util.validateObject(item, "Catalog item");
if (user) {
	inputs["requestedFor"] = user;
}

return com.vmware.library.vcaccafe.request.requestCatalogItem(item, inputs);
}
}
