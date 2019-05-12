/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function saveEndpointWorkflowMappings(prop?: Properties): void {var resourceElement = com.vmware.vra.gef.getAllEndpointWorkflowMappingsResourceElement();

var mimeAttachment = new MimeAttachment();
mimeAttachment.content = Server.toStringRepresentation(prop).stringValue;
mimeAttachment.mimeType = "text/plain";
mimeAttachment.name = resourceElement.name;
resourceElement.setContentFromMimeAttachment(mimeAttachment);
}
}
