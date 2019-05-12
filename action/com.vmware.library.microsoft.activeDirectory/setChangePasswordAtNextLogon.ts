/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function setChangePasswordAtNextLogon(user?: AD.User, changePasswordAtNextLogon?: boolean): AD.User {user.setChangePasswordAtNextLogon(changePasswordAtNextLogon);
return user;
}
}
