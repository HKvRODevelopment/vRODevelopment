/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.folder {
export function destroyFolderAndWait(folder?: any): void {var task = com.vmware.library.vc.folder.destroyFolder(folder);
com.vmware.library.vc.basic.vim3WaitTaskEnd(task,false,1);
}
}
