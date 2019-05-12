/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function showInParameter(operation?: SOAP.Operation, parameterNumber?: number): boolean {return ((operation != null) && (operation.getInParameters().length >= parameterNumber));
}
}
