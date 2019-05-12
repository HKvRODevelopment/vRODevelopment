/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.configuration {
export function addPowerShellHost(name?: string, type?: string, hostName?: string, transportProtocol?: string, port?: string, username?: string, password?: SecureString, sessionMode?: string, authentication?: string, shellCodePage?: string): PowerShell.PowerShellHost {var host = new PowerShellHostConfig() ;

if (shellCodePage !== null && shellCodePage !== undefined && shellCodePage !== "") { 
    var shellCodePageEnum = PowerShellShellCodePage.valueOf(shellCodePage);
    var configParams = new PowerShellConfigurationParameters();
    configParams.setShellCodePage(shellCodePageEnum);
    host.setConfigurationParameters(configParams);
}

host.name = name;
host.type = type;
host.connectionURL = hostName;
host.transportProtocol = transportProtocol

host.port = port;
host.username = username;
host.password = password;
host.authorizationMode = PowerShellAuthorizationMode.fromString(sessionMode);
host.authentication = authentication;
host = PowerShellHostManager.update(host);

System.log("PowerShell host '" + name + "' added successfuly.");

return host;

}
}
