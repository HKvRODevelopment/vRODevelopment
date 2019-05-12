/// <reference path="./../../includes.d.ts"/>

namespace test {
export function GetVSANPolicyNameFromServiceLevel(ServiceLevel?: string): string {if(ServiceLevel == "nano"){
	return "Policy01"
}
if(ServiceLevel == "pico"){
	return "Policy02"
}
if(ServiceLevel == "micro"){
	return "Policy03"
}
return ""
}
}
