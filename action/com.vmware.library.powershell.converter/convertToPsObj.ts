/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.converter {
export function convertToPsObj(host?: PowerShell.PowerShellHost, psSession?: string, converterDefinitionsCSV?: ResourceElement, obj?: any): Array<PowerShell.PowerShellRemotePSObject> {var definitions =  com.vmware.library.powershell.converter.getConverterDefinitions(converterDefinitionsCSV);
var converter = com.vmware.library.powershell.converter.getConverter(definitions, obj);

//Find PowerShellRemotePSObject by running appropriate PowerCli Get-<Type> cmdlet
var powerCliGetters = converter.convert();
var result = new Array();
for (var powerCliGetter of powerCliGetters){
	System.debug("powerCliGetter->" + powerCliGetter);
	result.push(com.vmware.library.powershell.invokeScript(host, powerCliGetter, psSession));
}
return result;
}
}
