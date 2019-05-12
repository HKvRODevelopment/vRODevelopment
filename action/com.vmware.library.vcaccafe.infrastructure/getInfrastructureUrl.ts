/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.infrastructure {
export function getInfrastructureUrl(host?: vCACCAFE.VCACHost): string {if (host == null) {
	return "";
}

System.log("Getting Infrastructure URL for host '" + host.name + "'...");
var url = host.createInfrastructureClient().getUrl();
url = url.substring(0, url.lastIndexOf("/"));
System.log("Infrastructure URL: " + url);
return url;
}
}
