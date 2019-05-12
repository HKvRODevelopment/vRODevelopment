/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function getRequestFormInputsForResourceAction(item?: vCACCAFE.CatalogItem): Array<string> {var form = vCACCAFERequestsHelper.getRequestFormForResourceAction(item);
return vCACCAFERequestsHelper.getFormKeys(form);
}
}
