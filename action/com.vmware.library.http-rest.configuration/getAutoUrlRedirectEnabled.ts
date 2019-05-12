/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getAutoUrlRedirectEnabled(host?: REST.RESTHost): boolean {return host.getAutoUrlRedirectEnabled();
}
}
