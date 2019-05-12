/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function getRequestFormInputsForCatalogItem(item?: vCACCAFE.CatalogItem): Array<string> {var form = vCACCAFERequestsHelper.getRequestFormForCatalogItem(item);
return vCACCAFERequestsHelper.getFormKeys(form);
}
}
