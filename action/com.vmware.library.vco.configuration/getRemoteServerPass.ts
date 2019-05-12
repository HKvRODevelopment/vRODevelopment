/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vco.configuration {
export function getRemoteServerPass(server?: VCO.RemoteServer): SecureString {return server == null ? "" : server.getConnection().getConfiguration().password;
}
}
