/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function createUser(accountName?: string, domainName?: string, displayName?: string, container?: any): void {try {
	container.createUser(accountName , domainName , displayName);
}
catch (ex) {
	throw "Unable to create a new user: " + ex;
}
}
}
