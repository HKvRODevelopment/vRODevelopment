/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function getPreferredEndpointURL(host?: SOAP.Host): string {if (host == null) {
	return "";
}

return host.preferredEndpointURL;
}
}
