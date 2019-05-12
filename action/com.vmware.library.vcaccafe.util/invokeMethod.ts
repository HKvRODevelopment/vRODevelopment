/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.util {
export function invokeMethod(object?: any, method?: string): any {if (object == null) {
	return null;
}
return eval("object." + method + "()");
}
}
