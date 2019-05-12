/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function getAllEndpointWorkflowMappings(): Properties {var resourceElement = com.vmware.vra.gef.getAllEndpointWorkflowMappingsResourceElement();
System.log("getAllEndpointWorkflowMappings - resourceElement: " + resourceElement);
return extractProperties(resourceElement);

function extractProperties(resourceElement) {
	var mimeAttachment = resourceElement.getContentAsMimeAttachment();
	if (mimeAttachment != null) {
		var content = mimeAttachment.content;
		if (content != "") {
			var stringRepresentation = new StringRepresentation("Properties" , content);
			System.log("getAllEndpointWorkflowMappings - stringRepresentation: " + stringRepresentation);
			return Server.fromStringRepresentation(stringRepresentation);
		}
	}
	return new Properties();
}
}
}
