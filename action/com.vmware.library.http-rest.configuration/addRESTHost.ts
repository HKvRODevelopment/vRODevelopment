/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function addRESTHost(name?: string, url?: string, authenticationType?: string, authenticationParams?: Array<string>, proxyHost?: string, proxyPort?: number): REST.RESTHost {var host = new RESTHost(name);
host.uri = url;
host.proxyHost = proxyHost;
host.proxyPort = proxyPort;
var authenticationObject = RESTAuthenticationManager.createAuthentication(authenticationType, authenticationParams);
System.log("REST host authentication: " + authenticationObject);
host.authentication = authenticationObject;

host = RESTHostManager.addHost(host);
System.log("REST host added: " + host);
return host;

}
}
