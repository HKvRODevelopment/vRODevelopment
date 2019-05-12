/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getPluginOptionAsNumber(name?: string): number {var opt = ConfigurationManager.getPluginOptions()
return opt[name];
}
}
