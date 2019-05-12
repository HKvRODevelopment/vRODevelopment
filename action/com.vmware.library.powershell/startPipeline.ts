/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function startPipeline(host?: PowerShell.PowerShellHost, sessionId?: string): void {host.startPipeline(sessionId)
}
}
