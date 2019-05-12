/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVCACHostAuthenticationProperty(host?: vCAC.VCACHost, index?: number, newAuthentication?: string, visible?: boolean): string {if (!host || !host.connection) {
 return "";
}
var existingAuth = host.connection.connectionInfo.authentication;
var shouldEstimate = visible && newAuthentication != null && host != null && newAuthentication == existingAuth.type;
return shouldEstimate ? existingAuth.getRawAuthProperty(index) : "";

}
}
