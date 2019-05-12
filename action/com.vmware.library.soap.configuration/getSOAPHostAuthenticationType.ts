/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap.configuration {
export function getSOAPHostAuthenticationType(host?: SOAP.Host): string {return (host == null) ? "" : host.authentication.type;
}
}
