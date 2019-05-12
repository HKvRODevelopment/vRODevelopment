/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.util {
export function checkHosts(vcoObject1?: any, vcoObject2?: any, type1?: string, type2?: string): void {if(vcoObject1.vcoId == "undefined" || vcoObject2.vcoId == "undefined") {
	throw ("Objects does not contain enough information to check if they belong to the same host. At least one of the objects does not have vcoId.");
}

var firstHostId = vcoObject1.vcoId.toString().split("/");
var secondHostId = vcoObject2.vcoId.toString().split("/");

//The first part of the id is always the id of the host
if(firstHostId[0] == secondHostId[0]) {
	return;
} else {
	if(type1 == "host") {
		throw "The provided " + type2 + " belongs to a different host.";
	} else {
		throw "The provided " + type1 + " and " + type2 + " belong to different hosts.";
	}
}
}
}
