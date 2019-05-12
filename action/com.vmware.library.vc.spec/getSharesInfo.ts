/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.spec {
export function getSharesInfo(level?: VC.SharesLevel, shares?: number): any {if (level == null) {
 	throw "ReferenceError: level cannot be null";
}
var info = new VcSharesInfo();
info.level = VcSharesLevel.fromString(level.name);
if (info.level == VcSharesLevel.custom) {
	if (shares == null) {
		throw "ReferenceError: shares cannot be null";
	}
	info.shares = shares;
}
return info;

}
}
