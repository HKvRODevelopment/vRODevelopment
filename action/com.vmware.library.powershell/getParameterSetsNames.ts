/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function getParameterSetsNames(cmdlet?: PowerShell.PowerShellCmdlet): Array<string> {var result = new Array();
if(cmdlet){
	var paramSets = cmdlet.getInfo().getParameters();
	var i = 0;
	for (var i = 0; i < paramSets.length; i++) {
	  result[i] = paramSets[i].getName();
	}
}

return result;
}
}
