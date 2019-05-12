/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVCACHostAuthenticationType(host?: vCAC.VCACHost): string {return host.connection.connectionInfo.authentication.type;
}
}
