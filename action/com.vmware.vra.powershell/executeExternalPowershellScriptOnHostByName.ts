/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.powershell {
export function executeExternalPowershellScriptOnHostByName(hostName?: string, externalScript?: string, arguments?: string): Properties {var script =  '& "' + externalScript + '" ' + arguments;
var output = com.vmware.vra.powershell.executePowerShellScriptOnHostByName(hostName, script);
var outputType = System.getObjectClassName(output);

if(outputType === "Properties") {
	return output;
} else {
	throw "Powershell Script has to return a Dictionary, actual output is '" + output.toString() + "' of type '" + outputType + "'";
}
}
}
