/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getRESTOperationParameterName(index?: number, operation?: REST.RESTOperation): string {return operation != null && operation.inParametersCount > index ? operation.getInParameters()[index] : "";
}
}
