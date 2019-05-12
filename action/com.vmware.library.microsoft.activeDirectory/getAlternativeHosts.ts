/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getAlternativeHosts(adHost?: AD.AdHost): Array<string> {return adHost.hostConfiguration.alternativeHosts
}
}
