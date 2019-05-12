/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.generated {
export function getVM(host?: PowerShell.PowerShellHost, sessionId?: string, psName?: Array<string>, psDatastore?: PowerShell.PowerShellRemotePSObject, psLocation?: PowerShell.PowerShellRemotePSObject, psId?: Array<string>, psNoRecursion?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject { var oSession = host.getSession(sessionId);
 var cmd = oSession.addCommandFromString('Get-VM');
 if (psName)
   cmd.addParameter('Name', psName)
 if (psDatastore)
   cmd.addParameter('Datastore', psDatastore)
 if (psLocation)
   cmd.addParameter('Location', psLocation)
 if (psId)
   cmd.addParameter('Id', psId)
 if (psNoRecursion && psNoRecursion==true)
    cmd.addParameter('NoRecursion', '')
 if (psServer)
   cmd.addParameter('Server', psServer)
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
var res; if ( host.inPipeline(sessionId) == false ){ 
  res = com.vmware.library.powershell.invokeCommand(host,sessionId) ;
}
return res;

}
}
