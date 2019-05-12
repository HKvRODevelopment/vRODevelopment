/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function setUserEnable(user?: AD.User, enable?: boolean): void {user.enabled = enable;
}
}
