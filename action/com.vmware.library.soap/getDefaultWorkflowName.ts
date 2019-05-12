/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function getDefaultWorkflowName(operation?: SOAP.Operation): string {return (operation == null) ? "" : "Invoke '" + operation.name + "' from '" + operation.getHost().name + "'";
}
}
