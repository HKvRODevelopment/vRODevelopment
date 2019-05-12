/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vco.configuration {
export function isSsoEnabled(server?: VCO.RemoteServer): boolean {return server.getSsoEnabled()
}
}
