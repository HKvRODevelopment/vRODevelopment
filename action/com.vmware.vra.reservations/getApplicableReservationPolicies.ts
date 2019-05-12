/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.reservations {
export function getApplicableReservationPolicies(): Properties {var IDS_PER_PAGE_LIMIT = 100;

var blueprint = System.getContext().getParameter("__asd_composition_blueprintId");
var component = System.getContext().getParameter("__asd_composition_componentId");
var user = System.getContext().getParameter("__asd_requestedFor");
var tenant = System.getContext().getParameter("__asd_tenantRef");
var subtenantId = System.getContext().getParameter("__asd_subtenantRef")

var host = vCACCAFEHostManager.getDefaultHostForTenant(tenant , true);
var reservationPolicyService = host.createReservationClient().getReservationReservationPolicyService();

var reservations = com.vmware.vra.reservations.getReservationsForUserAndComponent(user,tenant,host, blueprint, component, subtenantId);

// get reservation filtered by reservations
var reservationPolicies = [];
if (reservations.length !== 0) {
	var totalPages = reservations.length / IDS_PER_PAGE_LIMIT + 1;
	for (var page = 0; page < totalPages; page++) {
		var from = page * IDS_PER_PAGE_LIMIT;
		var to = from + IDS_PER_PAGE_LIMIT;
		var reservationPolicyFilter = getReservationPolicyFilterForReservations(reservations.slice(from, to));
		if (reservationPolicyFilter) {
			Array.prototype.push.apply(reservationPolicies,
				reservationPolicyService.getAllReservationPolicies(reservationPolicyFilter).getContent());
		}
	}
}

var reservationPolicyProperties = new Properties();
for (var reservationPolicy of reservationPolicies) {
	reservationPolicyProperties.put(reservationPolicy.getId(),reservationPolicy.getName());
}
return reservationPolicyProperties;

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function getReservationPolicyFilterForReservations(reservations) {
	var query = new vCACCAFEOdataQuery();

	var queryParams = [];
	for (var reservation of reservations) {
		queryParams.push(vCACCAFEFilterParam.equal("id" , vCACCAFEFilterParam.string(reservation.getReservationPolicyId())));
	}

	if(queryParams.length > 1) {
		query.addFilter([vCACCAFEFilterParam.or(queryParams)]);
	} else if(queryParams.length == 1){
		query.addFilter(queryParams);
	} else {
		return null;
	}

	return new vCACCAFEPageOdataRequest(1 , IDS_PER_PAGE_LIMIT, query);
}


}
}
