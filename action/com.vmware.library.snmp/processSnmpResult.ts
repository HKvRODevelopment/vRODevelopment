/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.snmp {
export function processSnmpResult(snmpResult?: SNMP.SnmpResult): Array<Properties> {if (snmpResult == null) {
    return null;
}
var resArray = [];
if (snmpResult.type == "Array"){
   var items = snmpResult.arrayValue;
   for (var i = 0; i < items.length; i++) {
      resArray.push(processItem(items[i]));
   }
} else {
   resArray.push(processItem(snmpResult));
}
return resArray;

function processItem(item) {
   var resProp = new Properties();
   resProp.put("oid", item.oid);
   resProp.put("type", item.type);
   resProp.put("snmpType", item.snmpType);
   resProp.put("value", item.stringValue);

   return resProp;
}
}
}
