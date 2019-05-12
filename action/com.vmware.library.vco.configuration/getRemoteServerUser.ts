/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vco.configuration {
export function getRemoteServerUser(server?: VCO.RemoteServer): string {return server == null ? "" : server.getConnection().getConfiguration().user;
}
}
