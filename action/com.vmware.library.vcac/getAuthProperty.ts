/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getAuthProperty(host?: vCAC.VCACHost, index?: number): string {if (host == null) {
 return "";
}
return host.getAuthProperty(index)
}
}
