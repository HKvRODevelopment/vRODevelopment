/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.mail {
export function validateEmailAddressList(list?: Array<string>): string {var ERR_MSG = "Address list contains an empty address";

if ( list == null ) 
	return ERR_MSG;

for (var i = 0; i<list.length; i++ ){
	if ( list[i] == null || list[i] == "" )
		return ERR_MSG;
}
return "";

}
}
