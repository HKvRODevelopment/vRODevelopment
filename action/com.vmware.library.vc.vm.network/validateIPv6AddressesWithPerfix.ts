/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.network {
export function validateIPv6AddressesWithPerfix(ipAddresses?: Array<string>): boolean {if (ipAddresses == null) {
	return false;
}

for (var i in ipAddresses) {
	index = ipAddresses[i].lastIndexOf('/');
	if (index == -1) {
		return false;
	}

 	ip = ipAddresses[i].substring(0, index);
	if (ip == null || !(new URL().isValidIPv6Address(ip))) {
		return false;
	}
	
	ipPrefix = ipAddresses[i].substring(index + 1);
	if (ipPrefix == null || !(ipPrefix > 0 && ipPrefix <= 128)) {
		return false;
	}
}
return true;

}
}
