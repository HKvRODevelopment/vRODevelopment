/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function isHeaderParamMandatory(operation?: REST.RESTOperation, headerParamName?: string): boolean {if (operation != null) {
   return operation.isHeaderParamMandatory(headerParamName);
} 
return false;
}
}
