/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap.configuration {
export function removeSOAPHost(id?: string): SOAP.Host {var host = SOAPHostManager.removeHost(id);

System.log("SOAP host removed: " + host);

return host;

}
}
