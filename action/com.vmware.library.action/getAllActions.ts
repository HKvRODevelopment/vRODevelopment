/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.action {
export function getAllActions(): Array<Action> {var actions = new Array();
var modules = System.getAllModules();
for (var i in modules){
	var actionDescriptions = modules[i].actionDescriptions;
	for (var j in actionDescriptions){
		actions.push(actionDescriptions[j]);
		//System.log("Module :" +modules[i].name +" - Action : " + actionDescriptions[j].returnType);
	}
}
return actions;

}
}
