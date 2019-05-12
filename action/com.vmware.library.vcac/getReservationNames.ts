/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getReservationNames(vcacHost?: vCAC.VCACHost): Array<string> {if (vcacHost == null) return null;
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, "ManagementModelEntities.svc", "HostReservations", null, null);
System.log("Reservations found: "+entities.length);
var prop = new Properties();
for (var entity of entities) {
	prop.put(entity.getProperty("HostReservationName"));
}
return prop.keys.sort();
}
}
