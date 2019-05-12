/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function destroyElementRecursive(element?: any, deleteSubtree?: boolean): void {element.destroy(deleteSubtree);
}
}
