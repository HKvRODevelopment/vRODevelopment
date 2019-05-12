/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getRESTHostAuthenticationPropertyFromArray(restHost?: REST.RESTHost, index?: number): string {return restHost == null ? "" : restHost.authentication.rawAuthProperties[index];
}
}
