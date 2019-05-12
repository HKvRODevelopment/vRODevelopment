/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.mail {
export function getDefaultPort(protocol?: string): number {if (protocol == "imap") {
	return 143;
} else if (protocol == "pop3") {
	return 110;
} else {
	System.log("ssssssss " + protocol);
	throw "Unsuppord protocol";
}

}
}
