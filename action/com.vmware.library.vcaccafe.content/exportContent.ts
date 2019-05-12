/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.content {
export function exportContent(sourceHost?: vCACCAFE.VCACHost, resourceElementCategory?: ResourceElementCategory, name?: string): MimeAttachment {var filter =  {
    "tenantId": sourceHost.tenant,
    "jsonAccepted": false
};
System.log("Source host: " + sourceHost.url);
System.log("Source tenant: " + sourceHost.tenant);

var contentClientExport = sourceHost.createContentManagementClient();

System.log("Exporting...");
var content = contentClientExport.getFile("content/bundles/filters", filter);
content.name = name;
if(resourceElementCategory != null) {
	Server.createResourceElement(resourceElementCategory , name , content, "application/zip");
}
System.log("Export successful");
return content;
}
}
