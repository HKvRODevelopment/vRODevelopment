/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.spec {
export function getResourceAllocationInfo(expandableReservation?: boolean, limit?: number, reservation?: number, shares?: string): any {var info = new VcResourceAllocationInfo();
info.limit = -1;
if (expandableReservation != null) {
	info.expandableReservation = expandableReservation;
}
if (limit != null && limit >= 0) {
	info.limit = limit;
}
if (reservation != null) {
	info.reservation = reservation;
}
if (shares != null) {
	if (shares instanceof VcSharesInfo) {
		info.shares = shares;
	}
	else {
		throw "TypeError: shares must be of type 'VcSharesInfo'";
	}
}
return info;

}
}
