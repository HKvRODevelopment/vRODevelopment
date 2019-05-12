/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.generated {
export function connectVIServer(host?: PowerShell.PowerShellHost, sessionId?: string, psServer?: Array<string>, psPort?: number, psProtocol?: string, psCredential?: PowerShell.PowerShellRemotePSObject, psUser?: string, psPassword?: string, psSession?: string, psNotDefault?: boolean, psSaveCredentials?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psWarningAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psWarningVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject { var oSession = host.getSession(sessionId);
 var cmd = oSession.addCommandFromString('Connect-VIServer');
 if (psServer)
   cmd.addParameter('Server', psServer)
 if (psPort)
   cmd.addParameter('Port', psPort)
 if (psProtocol)
   cmd.addParameter('Protocol', "'" + psProtocol+ "'")
 if (psCredential)
   cmd.addParameter('Credential', psCredential)
 if (psUser)
   cmd.addParameter('User', "'" + psUser+ "'")
 if (psPassword)
   cmd.addParameter('Password', "'" + psPassword+ "'")
 if (psSession)
   cmd.addParameter('Session', "'" + psSession+ "'")
 if (psNotDefault != null )
 {
    val = ':$false'
    if (psNotDefault == true) {
        val = ':$true'
    }
    cmd.addParameter('NotDefault'+val,'')
 }
 if (psSaveCredentials != null )
 {
    val = ':$false'
    if (psSaveCredentials == true) {
        val = ':$true'
    }
    cmd.addParameter('SaveCredentials'+val,'')
 }
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
 if (psWarningAction)
   cmd.addParameter('WarningAction', psWarningAction)
 if (psErrorVariable)
   cmd.addParameter('ErrorVariable', "'" + psErrorVariable+ "'")
 if (psWarningVariable)
   cmd.addParameter('WarningVariable', "'" + psWarningVariable+ "'")
 if (psOutVariable)
   cmd.addParameter('OutVariable', "'" + psOutVariable+ "'")
 if (psOutBuffer)
   cmd.addParameter('OutBuffer', psOutBuffer)
var res; 
if ( host.inPipeline(sessionId) == false ){ 
  res = com.vmware.library.powershell.invokeCommand(host,sessionId) ;
}
return res;

}
}
