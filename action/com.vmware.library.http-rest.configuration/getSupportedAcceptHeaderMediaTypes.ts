/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getSupportedAcceptHeaderMediaTypes(operation?: REST.RESTOperation): Array<string> {
if (operation) {
    return  operation.getSupportedAcceptHeaderMediaTypes();
}

return [];
}
}
