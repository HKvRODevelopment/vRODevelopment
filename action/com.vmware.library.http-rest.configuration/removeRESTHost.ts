/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function removeRESTHost(name?: string): REST.RESTHost {var host = RESTHostManager.removeHost(name);
System.log("REST host removed: " + host);
return host;

}
}
