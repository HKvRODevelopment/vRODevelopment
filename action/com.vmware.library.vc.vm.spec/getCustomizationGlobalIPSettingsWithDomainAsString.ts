/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getCustomizationGlobalIPSettingsWithDomainAsString(dnsServerList?: Array<string>, dnsSuffix?: string): any {var globalIPSettings = new VcCustomizationGlobalIPSettings();
globalIPSettings.dnsServerList = dnsServerList;
var dnsSuffixList = new Array();
dnsSuffixList.push(dnsSuffix);
globalIPSettings.dnsSuffixList = dnsSuffixList;
return globalIPSettings;
}
}
