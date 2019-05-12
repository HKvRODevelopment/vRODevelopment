/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getUsergroupFromContainer(container?: any, usergroupName?: string): AD.UserGroup {usergroups = container.userGroups;
for (var index in usergroups) {
	if (usergroups[index].name.toLowerCase() == usergroupName.toLowerCase()) {
		return usergroups[index];
	}
}
return null;
}
}
