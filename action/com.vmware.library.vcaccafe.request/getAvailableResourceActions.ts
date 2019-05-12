/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function getAvailableResourceActions(resource?: vCACCAFE.CatalogResource, query?: string): Array<vCACCAFE.ConsumerResourceOperation> {if (resource == null) {
	return null;
}
return vCACCAFEEntitiesFinder.getCatalogResourceActions(resource);
}
}
