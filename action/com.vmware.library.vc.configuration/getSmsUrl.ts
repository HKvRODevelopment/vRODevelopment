/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.configuration {
export function getSmsUrl(host?: string, port?: number): string {var hostStr = undefined;
var portStr = undefined;

if (host && host.trim().length >0 ) {
   hostStr  = host.trim();
}

if (port && port > 0 ) {
   portStr  = port;
}

if (hostStr && portStr) {
  return  "https://" + hostStr +":"+ portStr + "/sms/sdk";
}
return null;
}
}
