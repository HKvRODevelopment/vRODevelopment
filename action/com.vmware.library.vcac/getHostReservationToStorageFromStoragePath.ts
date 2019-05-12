/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getHostReservationToStorageFromStoragePath(host?: vCAC.VCACHost, hostReservation?: vCAC.Reservation, storagePath?: string): vCAC.Entity {System.log("Storage path: " + storagePath);

var hostReservationEntity = hostReservation.getEntity();

var rStorages = hostReservationEntity.getLink(host, "HostReservationToStorages");

var hostReservationToStorage = null;

evalHostReservationToStorage(rStorages);

function evalHostReservationToStorage(reservStorages) {
	for (var rs of reservStorages) {
		var storage = rs.getLink(host, "HostToStorage")[0];
		var isCluster = storage.getProperty("IsStorageCluster");
		if (isCluster === true) {
			var children = storage.getLink(host, "Children");
			for (var childHostTosTorage of children) {
				if (childHostTosTorage.getProperty("StoragePath") == storagePath) {
					hostReservationToStorage = rs;
				}
			}
		} 
		System.log("Storage storage path: " + storage.getProperty("StoragePath"));
		if (storage.getProperty("StoragePath") == storagePath) {
			hostReservationToStorage = rs;
		}
	}
}
return hostReservationToStorage;
}
}
