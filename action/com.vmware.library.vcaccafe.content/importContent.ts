/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.content {
export function importContent(host?: vCACCAFE.VCACHost, contentFile?: MimeAttachment): void {System.log("Target host: " + host.url);
System.log("Target tenant: " + host.tenant);
System.log("Content file: " + contentFile.name);

var contentClientImport = host.createContentManagementClient();
System.log("Importing...");
contentClientImport.postFile("content/bundles", contentFile);
System.log("Import successful");
}
}
