/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.util {
export function isActionHasParameters(ac?: Action): boolean {if(ac && ac.parameters && ac.parameters != 0) {
	return true;
} else {
	return false;
}
}
}
