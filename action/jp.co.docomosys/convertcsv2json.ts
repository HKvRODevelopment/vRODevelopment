/// <reference path="./../../includes.d.ts"/>

namespace jp.co.docomosys {
export function convertcsv2json(csv?: string): string {var lines = csv.split("\n");
var json = [];
var headers = lines[0].split(",");

for (var i = 1;i<lines.length-1;i++){
	var obj = {};
	var currentline = lines[i].split(",");
	for (var j = 0;j<headers.length;j++){
		obj[headers[j]] = currentline[j];
	}
	json.push(obj);
}
return JSON.stringify(json);
}
}
