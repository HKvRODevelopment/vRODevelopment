/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getReservationEntityByName(vcacHost?: vCAC.VCACHost, reservationName?: string): vCAC.Entity {if (vcacHost == null) return null;
var model = "ManagementModelEntities.svc";
var entitySetName = "HostReservations";

var reservationProperty = new Properties();
reservationProperty.put("HostReservationName",reservationName);

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, model, entitySetName, reservationProperty, null);
if (entities != null){
	return entities[0];
}else{
	System.warn("No Reservation found with name: "+reservationName);
	return null;
}
}
}
