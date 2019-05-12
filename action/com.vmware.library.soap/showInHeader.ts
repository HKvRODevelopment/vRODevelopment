/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function showInHeader(operation?: SOAP.Operation, headerNumber?: number): boolean {return ((operation != null) && (operation.getInHeaders().length >= headerNumber));
}
}
