/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.networks {
export function getApplicableNetworks(): Properties {var blueprint = System.getContext().getParameter("__asd_composition_blueprintId");
var component = System.getContext().getParameter("__asd_composition_componentId");
var user = System.getContext().getParameter("__asd_requestedFor");
var tenant = System.getContext().getParameter("__asd_tenantRef");
var subtenantId = System.getContext().getParameter("__asd_subtenantRef")

var host = vCACCAFEHostManager.getDefaultHostForTenant(tenant , true);
var reservations = com.vmware.vra.reservations.getReservationsForUserAndComponent(user, tenant, host, blueprint, component, subtenantId);

var applicableNetworks = new Properties();

for (var res of reservations) {
	var extensionData = res.getExtensionData();
	if(extensionData) {
		var networks = extensionData.get("reservationNetworks");
		if(networks) {
			for (var network of networks.getValue()) {
				var path = network.getValue().get("networkPath");
				applicableNetworks.put(path.label, path.label);
			}
		}
	}
}

return applicableNetworks;
}
}
