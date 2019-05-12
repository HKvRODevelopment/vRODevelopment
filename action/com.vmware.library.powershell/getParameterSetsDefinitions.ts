/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function getParameterSetsDefinitions(cmdlet?: PowerShell.PowerShellCmdlet, paramsetName?: string): string {if(!cmdlet){
	throw "Invalid cmdlet."
}
var paramSets = cmdlet.getInfo().getParameters();
var i = 0;
for (var i = 0; i < paramSets.length; i++) {
	if (paramsetName == paramSets[i].getName())
	{
		return paramSets[i].getDefinition();
	}
}

return "";

}
}
