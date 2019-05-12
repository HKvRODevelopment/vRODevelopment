/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function processOutHeaders(response?: any): Properties {var headers = new Properties();
var headerNames = response.getOutHeaders();
if (headerNames.length > 0) {
    System.log("out headers available:");
    for (var i = 0; i < headerNames.length; i++) {
        var headerName = headerNames[i];
        var headerValue = response.getOutHeader(headerName);
        headers.put(headerName, headerValue);
        System.log("  + header name: '" + headerName + "', value: '" + headerValue + "'");
		processHeaderAttributes(response, headerName, headers);
    }
}
processHeaderAttributes(response, ".", headers);
return headers;

// helper function
function processHeaderAttributes(response, headerName, headers) {
	var attributeNames = response.getOutHeaderAttributes(headerName);
	if (attributeNames != null) {
		for (var j = 0; j < attributeNames.length; j++) {
			var attributeName = attributeNames[j];
			var attributeValue = response.getOutHeaderAttribute(headerName, attributeName);
			var attributeHeaderName = headerName + "(" + attributeName + ")";
			headers.put(attributeHeaderName, attributeValue);
			System.log("  + header attribute name: '" + attributeHeaderName + "', value: '" + attributeValue + "'");
		}
	}
}
}
}
