/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getRESTHostAuthenticationType(restHost?: REST.RESTHost): string {return restHost == null ? "NONE" : restHost.authentication.type;
}
}
