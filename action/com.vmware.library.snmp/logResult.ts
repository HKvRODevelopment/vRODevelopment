/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.snmp {
export function logResult(result?: Array<Properties>): void {var output = "";

for (var i = 0; i<result.length; i++) {
   var elem = result[i];
   output += "Element " + (i+1) +":\n=============\n";
   output += "oid: " + elem.get("oid") + "\n";
   output += "type: " + elem.get("type") + "\n";
   output += "snmp type: " + elem.get("snmpType") + "\n";
   output += "value: " + elem.get("value") + "\n\n";
}

System.log(output);
}
}
