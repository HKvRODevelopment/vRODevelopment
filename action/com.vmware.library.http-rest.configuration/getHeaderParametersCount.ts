/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getHeaderParametersCount(operation?: REST.RESTOperation): number {if (operation != null && operation.getHeaderParameters()) {
   return operation.getHeaderParameters().length;
} 
return 0;
}
}
