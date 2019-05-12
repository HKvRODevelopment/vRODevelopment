/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.generated {
export function outString(host?: PowerShell.PowerShellHost, sessionId?: string, psStream?: boolean, psWidth?: number, psInputObject?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject { var oSession = host.getSession(sessionId);
 var cmd = oSession.addCommandFromString('Out-String');
 if (psStream != null )
 {
    val = ':$false'
    if (psStream == true) {
        val = ':$true'
    }
    cmd.addParameter('Stream'+val,'')
 }
 if (psWidth)
   cmd.addParameter('Width', psWidth)
 if (psInputObject)
   cmd.addParameter('InputObject', psInputObject)
 if (psVerbose != null )
 {
    val = ':$false'
    if (psVerbose == true) {
        val = ':$true'
    }
    cmd.addParameter('Verbose'+val,'')
 }
 if (psDebug != null )
 {
    val = ':$false'
    if (psDebug == true) {
        val = ':$true'
    }
    cmd.addParameter('Debug'+val,'')
 }
 if (psErrorAction)
   cmd.addParameter('ErrorAction', psErrorAction)
 if (psErrorVariable)
   cmd.addParameter('ErrorVariable', psErrorVariable)
 if (psOutVariable)
   cmd.addParameter('OutVariable', psOutVariable)
 if (psOutBuffer)
   cmd.addParameter('OutBuffer', psOutBuffer)
var res; 
if ( host.inPipeline(sessionId) == false ){ 
  res = com.vmware.library.powershell.invokeCommand(host,sessionId) ;
}
return res;

}
}
