/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.generated {
export function getCommand(host?: PowerShell.PowerShellHost, sessionId?: string, psArgumentList?: PowerShell.PowerShellRemotePSObject, psVerb?: Array<string>, psNoun?: Array<string>, psPSSnapin?: Array<string>, psTotalCount?: number, psSyntax?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject { var oSession = host.getSession(sessionId);
 var cmd = oSession.addCommandFromString('Get-Command');
 if (psArgumentList)
   cmd.addParameter('ArgumentList', psArgumentList)
 if (psVerb)
   cmd.addParameter('Verb', psVerb)
 if (psNoun)
   cmd.addParameter('Noun', psNoun)
 if (psPSSnapin)
   cmd.addParameter('PSSnapin', psPSSnapin)
 if (psTotalCount)
   cmd.addParameter('TotalCount', psTotalCount)
 if (psSyntax && psSyntax==true)
    cmd.addParameter('Syntax', '')
 if (psVerbose && psVerbose==true)
    cmd.addParameter('Verbose', '')
 if (psDebug && psDebug==true)
    cmd.addParameter('Debug', '')
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
