/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getWFvCOMachineMenuArray(nb?: number): Array<string> {var names = new Array();

for (var i = 0; i<nb; i++) {
	names.push("WFvCOMachineMenu" + (i+1));
} 

return names;
}
}
