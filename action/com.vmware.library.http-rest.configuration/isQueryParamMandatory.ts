/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function isQueryParamMandatory(operation?: REST.RESTOperation): boolean {if (operation != null) {
   return operation.isQueryParamMandatory(queryParamName);
} 
return false;
}
}
