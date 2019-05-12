/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function setUserPassword(user?: AD.User, password?: SecureString): AD.User {user.setPassword(password);
return user;
}
}
