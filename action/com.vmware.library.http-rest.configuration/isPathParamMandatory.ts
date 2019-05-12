/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function isPathParamMandatory(operation?: REST.RESTOperation, pathParamName?: string): boolean {if (operation != null) {
   return operation.isPathParamMandatory(pathParamName);
} 
return false;
}
}
