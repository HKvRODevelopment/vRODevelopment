/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap.configuration {
export function getSOAPHostAuthenticationProperty(host?: SOAP.Host, index?: number): string {return (host == null) ? "" : host.authentication.getRawAuthProperty(index);

}
}
