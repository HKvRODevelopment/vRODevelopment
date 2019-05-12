/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getRESTHostAuthenticationProperties(restHost?: REST.RESTHost): Array<string> {return restHost != null ? restHost.authentication.rawAuthProperties : [];
}
}
