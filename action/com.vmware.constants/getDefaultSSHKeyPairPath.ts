/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.constants {
export function getDefaultSSHKeyPairPath(): Path {// Store in server conf directory
if (new File("/var/lib/vco").exists) {
    // vCO 5.5
    return "/var/lib/vco/app-server/conf/vco_key";
} else {
    // vCO 5.1
    return "/opt/vmo/app-server/server/vmo/conf/vco_key";
}

}
}
