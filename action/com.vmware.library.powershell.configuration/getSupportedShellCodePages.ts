/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.configuration {
export function getSupportedShellCodePages(): Array<string> {var result =  [];
var codePages = PowerShellShellCodePage.values();

for (var k in codePages) {
   result.push(codePages[k].name);
}

return result;
}
}
