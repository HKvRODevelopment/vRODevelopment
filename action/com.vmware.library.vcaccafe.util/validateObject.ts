/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.util {
export function validateObject(object?: any, objectName?: string): void {if (object == null || object == 'notfound') {
	throw objectName + " not found!";
}
}
}
