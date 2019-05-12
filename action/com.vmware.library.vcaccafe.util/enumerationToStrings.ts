/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.util {
export function enumerationToStrings(enumeration?: string): Array<string> {var names = new Array();

var values = eval(enumeration + ".values()");
if (values != null) {
	for (var i = 0; i < values.length; i++) {
		names.push(values[i].value());
	}
}

return names;


}
}
