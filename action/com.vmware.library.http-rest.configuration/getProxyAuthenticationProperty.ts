/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getProxyAuthenticationProperty(restHost?: REST.RESTHost, index?: number, newAuthentication?: string, visible?: boolean): string {var shouldEstimate = visible && newAuthentication != null && restHost != null && newAuthentication == restHost.proxyAuthentication.type;
return shouldEstimate ? restHost.proxyAuthentication.getRawAuthProperty(index) : "";

}
}
