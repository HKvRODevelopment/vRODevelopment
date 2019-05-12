/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.reservations {
export function getReservationsForUserAndComponent(user?: string, tenant?: string, host?: vCACCAFE.VCACHost, blueprintId?: string, componentId?: string, subtenantId?: string): Array<any> {

var SUBTENANT_IDS_PER_PAGE_LIMIT = 10;
var RESERVATIONS_PER_PAGE_LIMIT = 100;

//create services
var subTenantService = host.createAuthenticationClient().getAuthenticationSubtenantService();
var reservationService = host.createReservationClient().getReservationReservationService();

// get sub tenants for user
var userPrincipal = splitUser(user);
var principal = new vCACCAFEPrincipalId(userPrincipal.username, userPrincipal.domain);
var subtenantIds = [];
if (subtenantId) {
	subtenantIds.push(subtenantId);
} else {
	var subtenants = subTenantService.getSubtenantsByPrincipalAndRole(tenant, principal, null, true, new vCACCAFEPageOdataRequest(1 , 2147483647));
	for (var subtenant of subtenants) {
		subtenantIds.push(subtenant.getId());
	}
}

// get reservation filtered by sub tenants
var reservations = [];
if (subtenantIds.length !== 0) {
	var totalPages = subtenantIds.length / SUBTENANT_IDS_PER_PAGE_LIMIT;
	for (var page = 0; page < totalPages; page++) {
		var from = page * SUBTENANT_IDS_PER_PAGE_LIMIT;
		var to = from + SUBTENANT_IDS_PER_PAGE_LIMIT;
		Array.prototype.push.apply(reservations, getReservationsForSubtenants(subtenantIds.slice(from, to)));
	}
}

return reservations


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function splitUser(userParam) {
	var indexOfAt = userParam.lastIndexOf("@");
	if(indexOfAt > 0) {
		return {
			username: userParam.substring(0, userParam.lastIndexOf("@")),
			domain: userParam.substring(userParam.lastIndexOf("@") +1)
		}
	}
}

function getReservationsForSubtenants(subtenantsIds){
	var reservations = [];
	// loop until reservation service does not return an empty array
	for (var page = 1; true; page++){
		var reservationFilter = getReservationFilterForSubTenants(subtenantsIds, page);
		if (reservationFilter) {
			reservationsResponse = reservationService.getAllReservations(reservationFilter).getContent();
			Array.prototype.push.apply(reservations, reservationsResponse);
			if(typeof reservationsResponse === "undefined" || reservationsResponse.length < RESERVATIONS_PER_PAGE_LIMIT){
				return reservations;
			}
		}
	}
}

// constructs a filter clause taking into account all the subtenants and the pagination
// the filter then can be used in a call to get all reservations that matches
function getReservationFilterForSubTenants(subtenantIds, page) {
	var query = new vCACCAFEOdataQuery();

	var queryParams = [];
	for (var subtenantId of subtenantIds) {
		var paramGroup =getParamGroupForSubtenant(subtenantId);
		queryParams.push(paramGroup);
	}
	if(queryParams.length > 1) {
		query.addFilter([vCACCAFEFilterParam.or(queryParams)]);
	} else if(queryParams.length == 1){
		query.addFilter(queryParams);
	} else {
		return null;
	}
	return new vCACCAFEPageOdataRequest(page, RESERVATIONS_PER_PAGE_LIMIT, query);
}

function getParamGroupForSubtenant(subtenantId) {
	var subTenantIdParam = vCACCAFEFilterParam.equal("subTenantId" , vCACCAFEFilterParam.string(subtenantId));
	// call the action to get resrvation type
	// check for null....
	var activeReservationParam = vCACCAFEFilterParam.equal("enabled" , true);
	var IdAndActiveParam = vCACCAFEFilterParam.and([subTenantIdParam,activeReservationParam]);
	var reservationTypeId = com.vmware.vra.reservations.getReservationTypeIdForComponent(host, blueprintId, componentId);
	if(reservationTypeId) {
		var reservationTypeParam = vCACCAFEFilterParam.equal("reservationTypeId" , vCACCAFEFilterParam.string(reservationTypeId));
		IdAndActiveParam = vCACCAFEFilterParam.and([IdAndActiveParam, reservationTypeParam]);
	}
	var paramGroup = vCACCAFEFilterParam.group([IdAndActiveParam]);
	return paramGroup;
}
}
}
