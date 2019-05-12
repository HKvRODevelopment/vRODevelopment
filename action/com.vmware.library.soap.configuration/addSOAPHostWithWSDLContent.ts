/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap.configuration {
export function addSOAPHostWithWSDLContent(name?: string, wsdlContent?: string, connectionTimeout?: number, requestTimeout?: number, authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host {var host = new SOAPHost();
host.name = name;
host.wsdlLocal = true;
host.wsdlFileContent = wsdlContent;
host.connectionTimeout = connectionTimeout;
host.requestTimeout = requestTimeout;
host.authentication = com.vmware.library.soap.configuration.getSOAPAuthentication(authenticationType, sessionMode, username, password, domain, workstation, spn);
host.proxyHost = proxyHost;
host.proxyPort = proxyPort;
host = SOAPHostManager.addHost(host);

System.log("SOAP host added: " + host);

return host;

}
}
