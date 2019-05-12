/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function callActions(parameter?: any, actions?: Array<Action>, additionalParams?: Array<any>): any {var retParam = parameter;

if ( actions != null && actions.length > 0 ) {
	for (var ii = 0 ; ii < actions.length ; ii++ ) {
		var params = "";
		if ( additionalParams != null ) {
			for (var jj = 0 ; jj < additionalParams.length ; jj++ ) {
				params += "additionalParams[" + jj + "]";
				if ( jj != additionalParams.length-1 ) {
					params += ", ";
				}
			}
		}
		var methodCall = "System.getModule(\"" + actions[ii].module.name + "\")." + actions[ii].name + "(retParam, " + params + ")";
		retParam = eval( methodCall );
	}
}
return retParam;
}
}
