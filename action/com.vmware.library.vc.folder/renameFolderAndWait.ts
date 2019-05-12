/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.folder {
export function renameFolderAndWait(folder?: any, newName?: string): void {var task = com.vmware.library.vc.folder.renameFolder(folder,newName);
com.vmware.library.vc.basic.vim3WaitTaskEnd(task,false,1);
}
}
