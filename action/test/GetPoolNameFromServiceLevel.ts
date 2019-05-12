/// <reference path="./../../includes.d.ts"/>

namespace test {
export function GetPoolNameFromServiceLevel(ServiceLevel?: string): string {if(ServiceLevel == "nano"){
	return "Pool01"
}
if(ServiceLevel == "pico"){
	return "Pool02"
}
if(ServiceLevel == "micro"){
	return "Pool03"
}
return ""
}
}
