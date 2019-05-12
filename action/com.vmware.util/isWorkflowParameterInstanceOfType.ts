/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function isWorkflowParameterInstanceOfType(element?: Workflow, type?: string): boolean {System.log("debut workflow");
var params = element.inParameters;
for (var i in params )  {
		var param = params[i];
		if(param.type == type){
			System.log("same type find - workflow");
			return true;
		}
}
return false;
}
}
