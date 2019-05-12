/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getRESTOperationHeaderParameterName(index?: number, operation?: REST.RESTOperation): string {return operation != null && operation.getHeaderParameters()[index] ? operation.getHeaderParameters()[index] : "";
}
}
