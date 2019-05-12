/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function isActionParameterInstanceOfType(element?: Action, type?: string): boolean {if(!element)
	return false;
var params = element.parameters;
for (var i in params )  {
		var param = params[i];
		if(param.type == type){
			System.log("same type find-action");
			return true;
		}
}
return false;
}
}
