/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd.endpoints.powershell {
export function getPowerShellHostAuthenticationType(powerShellHost?: PowerShell.PowerShellHost): string {var powerShellHostConfig = powerShellHost.getHostConfig();
var authentication = powerShellHostConfig.authentication;

return authentication;



}
}
