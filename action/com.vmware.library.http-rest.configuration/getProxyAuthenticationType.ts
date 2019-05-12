/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getProxyAuthenticationType(restHost?: REST.RESTHost): string {return restHost == null ? "NONE" : restHost.proxyAuthentication.type;
}
}
