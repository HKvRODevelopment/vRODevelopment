/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getLoadBalancingMode(adServer?: AD.AdHost): string {return adServer.hostConfiguration.loadBalancingMode.mode
}
}
