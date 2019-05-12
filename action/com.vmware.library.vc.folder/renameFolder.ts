/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.folder {
export function renameFolder(folder?: any, newName?: string): VC.Task {return folder.rename_Task(newName);
}
}
