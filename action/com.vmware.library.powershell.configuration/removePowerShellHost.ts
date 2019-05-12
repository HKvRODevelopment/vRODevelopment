/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.configuration {
export function removePowerShellHost(host?: PowerShell.PowerShellHost): void {try  {
	PowerShellHostManager.remove(host.id);
	System.log("PowerShellHost object removed: " + host.name);
} catch (e)	{
	throw "PowerShellError: Unable to remove host. " + e.message;
} 




}
}
