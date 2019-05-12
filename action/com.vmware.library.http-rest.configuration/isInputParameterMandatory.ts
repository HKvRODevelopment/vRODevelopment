/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function isInputParameterMandatory(operation?: REST.RESTOperation, index?: number): boolean {if (operation  && operation.inParametersCount > index) {

    if (index < 0 ){
        throw new Error("The index must be a positive number");
    }

 var paramName =  operation.getInParameters()[index];

    // check if the path param is mandatory
    if (index < operation.getPathParamsCount()) {
        return operation.isPathParamMandatory(paramName);

   } else {
        // check mandatory query parameter 
         return  operation.isQueryParamMandatory(paramName);
  }
} 
return false;
}
}
