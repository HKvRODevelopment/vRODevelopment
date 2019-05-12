/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function validatePassword(password?: SecureString): string {var passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{12,72}/;
if (password == null || !password.match(passwordRegexp)) {
	return "Enter a password that must be between 12-72 characters long and have at least one lower case character, one upper case character, one number, and one special character.";
}

return "";
}
}
