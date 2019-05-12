/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getDefaultContentType(operation?: REST.RESTOperation): string {
if (operation) {
    return operation.getDefaultContentType();
}

return [];
}
}
