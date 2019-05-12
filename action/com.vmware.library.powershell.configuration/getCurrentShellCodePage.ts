/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.configuration {
export function getCurrentShellCodePage(host?: PowerShell.PowerShellHost): string {if (host.getHostConfig().getConfigurationParameters() && host.getHostConfig().getConfigurationParameters().getShellCodePage()) {
    return host.getHostConfig().getConfigurationParameters().getShellCodePage().name; 
}

return "";


}
}
