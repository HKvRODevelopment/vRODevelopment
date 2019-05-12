/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.content {
export function transferContent(sourceHost?: vCACCAFE.VCACHost, targetHost?: vCACCAFE.VCACHost): void {var filter =  {
    "tenantId": sourceHost.tenant,
    "jsonAccepted": false
};
System.log("Source host: " + sourceHost.url);
System.log("Source tenant: " + sourceHost.tenant);

var contentClientExport = sourceHost.createContentManagementClient();
System.log("Exporting...");
var content = contentClientExport.getFile("content/bundles/filters", filter);
System.log("Export successful");

System.log("--------------------------------");

System.log("Target host: " + targetHost.url);
System.log("Target tenant: " + targetHost.tenant);

var contentClientImport = targetHost.createContentManagementClient();
System.log("Importing...");
contentClientImport.postFile("content/bundles", content);
System.log("Import successful");
}
}
