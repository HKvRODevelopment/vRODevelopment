/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.content {
export function validateContent(content?: MimeAttachment, host?: vCACCAFE.VCACHost): string {System.log("Target host: " + host.url);
System.log("Target tenant: " + host.tenant);
System.log("Content file: " + content.name);

var contentClientImport = host.createContentManagementClient();
System.log("Validating...");
var result = contentClientImport.postFile("content/validation/bundles", content);
var status = result.getProperty("status");
System.log("Validation Result: " + status);
return status;
}
}
