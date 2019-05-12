/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd.endpoints.ad {
export function getAdHosts(): Array<AD.AdHost> {return Server.findAllForType("AD:AdHost");
}
}
