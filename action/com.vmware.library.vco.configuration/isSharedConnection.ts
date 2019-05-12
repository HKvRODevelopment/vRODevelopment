/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vco.configuration {
export function isSharedConnection(server?: VCO.RemoteServer): boolean {return server.getShared()
}
}
