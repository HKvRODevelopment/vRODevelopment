/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap.configuration {
export function updateSOAPHost(id?: string, newName?: string, newWsdlUri?: string, newConnectionTimeout?: number, newRequestTimeout?: number, newAuthenticationType?: string, newSessionMode?: string, newUsername?: string, newPassword?: SecureString, newDomain?: string, newWorkstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host {var host = SOAPHostManager.getHost(id);

host.name = newName;
host.wsdlUri = newWsdlUri;
host.wsdlLocal = false;
host.preferredEndpointURL = null;
host.connectionTimeout = newConnectionTimeout;
host.requestTimeout = newRequestTimeout;
host.authentication = com.vmware.library.soap.configuration.getSOAPAuthentication(newAuthenticationType, newSessionMode, newUsername, newPassword, newDomain, newWorkstation, spn);
host.proxyHost = proxyHost;
host.proxyPort = proxyPort;

host = SOAPHostManager.updateHost(host);

System.log("SOAP host updated: " + host);

return host;

}
}
