/// <reference path="./../../includes.d.ts"/>

namespace jp.co.docomosys {
export function stringMatch(machingstring?: string, inputstring?: string): string {if(inputstring == "" || inputstring == null || inputstring == undefined){
	return "match";
}

if(inputstring.match(machingstring) != null){
	return "match";
}

return "not match";
}
}
