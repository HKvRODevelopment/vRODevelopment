/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function openSession(host?: PowerShell.PowerShellHost): string {var oSession = host.openSession();
return oSession.getSessionId();

}
}
