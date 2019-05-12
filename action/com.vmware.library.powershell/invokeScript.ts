/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function invokeScript(host?: PowerShell.PowerShellHost, script?: string, sessionId?: string): PowerShell.PowerShellRemotePSObject {if(sessionId == null){
	throw "PowerShellInvocationError: Invalid session."
}

var oSession = host.getSession(sessionId)
if (oSession == null )
{
	throw "PowerShellInvocationError: Invalid session."
}

System.debug("Invoke command in session " + sessionId);
var result = oSession.invokeScript(script);

if (result.invocationState  == 'Failed'){
	throw "PowerShellInvocationError: Errors found while executing script \n"  + result.getErrors();
}

System.log ( result.getHostOutput() );

return result.getResults()

}
}
