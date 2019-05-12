/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.configuration {
export function validatePowerShellHost(host?: PowerShell.PowerShellHost): PowerShell.PowerShellHost {try  {
 	PowerShellHostManager.validatePowerShellHost(host.getHostConfig());
	System.log( "Connection to PowerShellHost successful" );
	return host
}
catch( ex )  {
	throw "Connection to PowerShellHost failed (Reason: " + ex + ")";
}

//this statement should be never reached
return null;
}
}
