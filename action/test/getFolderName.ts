/// <reference path="./../../includes.d.ts"/>

namespace test {
export function getFolderName(): Array<string> {var sdk = Server.findForType("VC:SdkConnection","knvc01.kn.local/group-v3");
var Folders = sdk.getAllVmFolders();
var FoldersName = [];
System.log(Folders.length);
for (var i = 0; i < Folders.length; i++) {
 System.log("Folders["+i+"].name : "+Folders[i].name)
 FoldersName.push(Folders[i].name);
}
return  FoldersName

}
}
