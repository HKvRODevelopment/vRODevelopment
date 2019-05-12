/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function updateRESTHost(newName?: string, newUrl?: string, restHost?: REST.RESTHost, newAuthenticationType?: string, newAuthenticationParams?: Array<string>, proxyHost?: string, proxyPort?: number): REST.RESTHost {var newHost = restHost.clone();

if (newName == null) {
	newName = restHost.name;
}
if (newUrl == null) {
	newUrl = restHost.url;
}
if (newAuthenticationType == null) {
	newAuthenticationType = restHost.authentication.type;
}
if (newAuthenticationParams == null) {
	newAuthenticationParams = restHost.authentication.rawAuthProperties;
} 
if (proxyHost == null) {
    proxyHost = restHost.proxyHost;
}
if (proxyPort > 0) {
	proxyPort = restHost.proxyPort;
}
newHost.name = newName;
newHost.url = newUrl;
newHost.proxyHost = proxyHost;
newHost.proxyPort = proxyPort;

var authenticationObject = RESTAuthenticationManager.createAuthentication(newAuthenticationType, newAuthenticationParams);
System.log("REST host authentication: " + authenticationObject);
newHost.authentication = authenticationObject;

newHost = RESTHost.updateHost(restHost.name, newHost);
System.log("REST host updated: " + newHost);
return newHost;

}
}
