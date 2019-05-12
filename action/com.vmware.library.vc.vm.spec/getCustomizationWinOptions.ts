/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getCustomizationWinOptions(changeSID?: boolean, deleteAccounts?: boolean): any {var options = new VcCustomizationWinOptions();
options.changeSID = changeSID;
options.deleteAccounts = deleteAccounts;
return options;
}
}
