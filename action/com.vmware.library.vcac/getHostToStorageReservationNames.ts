/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getHostToStorageReservationNames(host?: vCAC.VCACHost, hostReservationName?: string): Array<string> {if (host == null) return null;
var modelName = "ManagementModelEntities.svc";
var entitySetName = "HostReservations";

var filter = "HostReservationName eq '" + hostReservationName + "'";

System.log("filter: " + filter);

var reservationEntities = vCACEntityManager.readModelEntitiesBySystemQuery(host.id, modelName, entitySetName, filter, null, null, 100, 0, null);

System.log("reservationEntities: " + reservationEntities);

var hostReservation = reservationEntities[0];

var reservationStorages = hostReservation.getLink(host, "HostReservationToStorages");

var arr = new Array();

for (var i = 0; i < reservationStorages.length; i++) {
	var reservationStorage = reservationStorages[i];
	var hostToStorages = reservationStorage.getLink(host, "HostToStorage");
	for (var j = 0; j < hostToStorages.length; j++) {
		var hostToStorage = hostToStorages[i];
		arr.push(hostToStorage.getProperty("StoragePath"));
	}
}

return arr;
}
}
