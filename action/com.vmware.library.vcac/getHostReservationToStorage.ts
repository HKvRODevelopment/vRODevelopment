/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getHostReservationToStorage(host?: vCAC.VCACHost, vm?: VC.VirtualMachine, hostReservation?: vCAC.Reservation): vCAC.Entity {if (!vm) throw "VM not specified";
if (!vm.datastore) throw "VM datastore info is missing";
if (!vm.datastore[0]) throw "VM datastore info is missing";
var storagePath = vm.datastore[0].name;

System.log("Storage path: " + storagePath);

var hostReservationEntity = hostReservation.getEntity();

var reservStorages = hostReservationEntity.getLink(host, "HostReservationToStorages");
for (var rs of reservStorages) {
	var storage = rs.getLink(host, "HostToStorage")[0];
	
	System.log("Storage storage path: " + storage.getProperty("StoragePath"));
	
	if (storage.getProperty("StoragePath") == storagePath) {
		return rs;
	}
}
return null;
}
}
