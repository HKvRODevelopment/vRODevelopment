/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function createUserWithDetails(accountName?: string, password?: SecureString, confirmPassword?: SecureString, domainName?: string, displayName?: string, container?: any, firstName?: string, lastName?: string): void {if(password){
	if(password != confirmPassword){
		throw "Unable to create a new user: Password not confirmed";
	}
}
try {
	container.createUserWithDetails(accountName, password, domainName , displayName, firstName, lastName);
}
catch (ex) {
	throw "Unable to create a new user: " + ex;
}
}
}
