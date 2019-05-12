/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function createUserWithPassword(accountName?: string, password?: SecureString, confirmPassword?: SecureString, domainName?: string, displayName?: string, container?: any): void {if(password){
	if(password != confirmPassword){
		throw "Unable to create a new user: Password not confirmed";
	}
}
try {
	container.createUserWithPassword(accountName, password, domainName , displayName);
}
catch (ex) {
	throw "Unable to create a new user: " + ex;
}
}
}
