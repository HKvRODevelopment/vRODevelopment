/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getRESTHostAuthenticationProperty(restHost?: REST.RESTHost, index?: number, newAuthentication?: string, visible?: boolean): string {var shouldEstimate = visible && newAuthentication != null && restHost != null && newAuthentication == restHost.authentication.type;
return shouldEstimate ? restHost.authentication.getRawAuthProperty(index) : "";

}
}
