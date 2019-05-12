/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.ad {
export function existsObjectByDN(host?: AD.AdHost, objectDN?: string, objectType?: string): boolean {try {
   var result = com.vmware.vra.ad.getObjectByDN(host, objectDN, objectType);
   System.log("result = " + result);
   return result != null;
} catch (e) {
   System.log("Cannot find DN " + e);
   return false;
}


}
}
