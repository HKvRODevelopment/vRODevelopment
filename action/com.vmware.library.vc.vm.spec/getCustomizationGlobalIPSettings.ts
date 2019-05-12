/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getCustomizationGlobalIPSettings(dnsServerList?: Array<string>, dnsSuffixList?: Array<string>): any {var globalIPSettings = new VcCustomizationGlobalIPSettings();
globalIPSettings.dnsServerList = dnsServerList;
globalIPSettings.dnsSuffixList = dnsSuffixList;
return globalIPSettings;
}
}
