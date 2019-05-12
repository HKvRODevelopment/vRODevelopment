/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getUserFromContainer(container?: any, accountName?: string): AD.User {var users = container.users;
for (var i in users) {
	if(users[i].accountName == accountName) {
		return users[i];
	}
}
return null;
}
}
