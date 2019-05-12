/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function endPipeline(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject {var result = com.vmware.library.powershell.invokeCommand(host,sessionId) ;
host.endPipeline(sessionId)

return result;


}
}
