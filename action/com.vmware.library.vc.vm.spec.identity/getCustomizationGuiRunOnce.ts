/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.identity {
export function getCustomizationGuiRunOnce(commandList?: Array<string>): any {if (commandList == null) {
	throw "Unable to create VcCustomizationGuiRunOnce. Reason: commandList cannot be null";
}
var result =  new VcCustomizationGuiRunOnce();
result.commandList = commandList;
return result;
}
}
