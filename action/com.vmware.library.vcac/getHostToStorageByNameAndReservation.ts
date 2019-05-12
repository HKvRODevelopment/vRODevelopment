/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getHostToStorageByNameAndReservation(host?: vCAC.VCACHost, pathName?: string, reservationName?: string): vCAC.Entity {if (host == null) return null;
var modelName = "ManagementModelEntities.svc";
var entitySetName = "HostToStorage";

var filter = "StoragePath eq '" + pathName + "'";

System.log("filter: " + filter);

var hostToStorageEntities = vCACEntityManager.readModelEntitiesBySystemQuery(host.id, modelName, entitySetName, filter, null, null, 100, 0, null);

System.log("hostToStorageEntities: " + hostToStorageEntities);

for (var i = 0; i < hostToStorageEntities.length; i++) {
	var hostToStorageEntity = hostToStorageEntities[i];
	System.log("hostToStorageEntity: " + hostToStorageEntity.getProperty("StoragePath"));
	var reservationToStorages = hostToStorageEntity.getLink(host, "HostReservationToStorages");
	for (var j = 0; j < reservationToStorages.length; j++) {
		var reservationToStorage = reservationToStorages[j];
		var hostReservations = reservationToStorage.getLink(host, "HostReservation");
		for (var k = 0; k < hostReservations.length; k++) {
			var hostReservation = hostReservations[k];
			if (hostReservation.getProperty("HostReservationName") == reservationName) {
				System.log("reservationToStorage: " + reservationToStorage);
				return reservationToStorage;
			}
		}
	}
}

return null;
}
}
