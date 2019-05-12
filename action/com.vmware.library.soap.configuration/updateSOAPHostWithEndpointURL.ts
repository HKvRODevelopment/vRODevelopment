/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap.configuration {
export function updateSOAPHostWithEndpointURL(soapHost?: SOAP.Host, endpointURL?: string): SOAP.Host {System.log("Setting endpoint URL: " + endpointURL + "  for host: " + soapHost);

soapHost.preferredEndpointURL = endpointURL;
soapHost = SOAPHostManager.updateHost(soapHost);

System.log("SOAP host '" + soapHost + "' updated with preferred endpoint URL: " + endpointURL);
return soapHost;

}
}
