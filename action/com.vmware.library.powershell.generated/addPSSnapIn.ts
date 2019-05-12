/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.generated {
export function addPSSnapIn(host?: PowerShell.PowerShellHost, sessionId?: string, psName?: string, psPassThru?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): void { var oSession = host.getSession(sessionId);
 var cmd = oSession.addCommandFromString('Add-PSSnapin');
 if (psName)
   cmd.addParameter('Name', psName)
 if (psPassThru && psPassThru==true)
    cmd.addParameter('PassThru', '')
 if (psVerbose && psVerbose==true)
    cmd.addParameter('Verbose', '')
 if (psDebug && psDebug==true)
    cmd.addParameter('Debug', '')
 if (psErrorVariable)
   cmd.addParameter('ErrorVariable', psErrorVariable)
 if (psOutVariable)
   cmd.addParameter('OutVariable', psOutVariable)
 if (psOutBuffer)
   cmd.addParameter('OutBuffer', psOutBuffer)

if ( host.inPipeline(sessionId) == false ){
	com.vmware.library.powershell.invokeCommand(host,sessionId) ;
}


}
}
