/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getMenuIconsFilenames(menuIconFile?: ResourceElement): Array<string> {return menuIconFile.getContentAsMimeAttachment().content.split("\n");
}
}
