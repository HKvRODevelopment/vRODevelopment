/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function closeSession(host?: PowerShell.PowerShellHost, sessionId?: string): void {host.closeSession(sessionId)
}
}
