/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.snmp {
export function createSnmpQuery(device?: SNMP.SnmpDevice, type?: string, oid?: string, name?: string): SNMP.SnmpQuery {var query = new SNMPSnmpQuery();
query.validateAndSetType(type);
query.validateAndSetOid(oid);
if (name) {
	query.validateAndSetName(name);
} else {
	query.validateAndSetName(type + " " + oid);
}

return SnmpService.addQuery(device, query);

}
}
