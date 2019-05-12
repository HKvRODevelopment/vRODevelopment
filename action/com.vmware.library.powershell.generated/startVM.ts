/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.generated {
export function startVM(host?: PowerShell.PowerShellHost, sessionId?: string, psVM?: PowerShell.PowerShellRemotePSObject, psRunAsync?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number, psWhatIf?: boolean, psConfirm?: boolean): PowerShell.PowerShellRemotePSObject { var oSession = host.getSession(sessionId);
 var cmd = oSession.addCommandFromString('Start-VM');
 if (psVM)
   cmd.addParameter('VM', psVM)
 if (psRunAsync != null )
 {
    val = ':$false'
    if (psRunAsync == true) {
        val = ':$true'
    }
    cmd.addParameter('RunAsync'+val,'')
 }
 if (psServer)
   cmd.addParameter('Server', psServer)
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
 if (psWhatIf != null )
 {
    val = ':$false'
    if (psWhatIf == true) {
        val = ':$true'
    }
    cmd.addParameter('WhatIf'+val,'')
 }
 if (psConfirm != null )
 {
    val = ':$false'
    if (psConfirm == true) {
        val = ':$true'
    }
    cmd.addParameter('Confirm'+val,'')
 }
var res; 
if ( host.inPipeline(sessionId) == false ){ 
  res = com.vmware.library.powershell.invokeCommand(host,sessionId) ;
}
return res;

}
}
