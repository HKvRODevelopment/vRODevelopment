/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.reservations {
export function getApplicableNetworksForReservation(reservationId?: string): Properties {if(!reservationId){
	return {};
}

var tenant = System.getContext().getParameter("__asd_tenantRef");

var host = vCACCAFEHostManager.getDefaultHostForTenant(tenant , true);
var reservation;
try {
	reservation = vCACCAFEEntitiesFinder.getReservation(host , reservationId);
	if (!reservation) {
		throw "Reservation with id "  + reservationId + " was not found";
	}
} catch (e) {
	System.error("Reservation with id "  + reservationId + " could not be retrieved; error: " + e);
	throw e;
} 
var applicableNetworks = new Properties();

var extensionData = reservation.getExtensionData();
if(extensionData) {
	var networks = extensionData.get("reservationNetworks");
	if(networks) {
		for (var network of networks.getValue()) {
			var path = network.getValue().get("networkPath");
			applicableNetworks.put(path.label, path.label);
		}
	}
}

return applicableNetworks;
}
}
