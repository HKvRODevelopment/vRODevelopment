/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function invokeSOAPOperation(operation?: SOAP.Operation, header?: Properties, parameter?: Properties, attribute?: Properties): Properties {System.log("creating request...");
var request = operation.createSOAPRequest();
var inHeaders = header.keys;

System.log("in headers:");
for (var i = 0; i < inHeaders.length; i++) {
	var name = inHeaders[i];
	var value = header.get(name);
	request.setInHeader(name, value);
	System.log("  + name: '" + name + "', value: '" + value + "'");
}

var keysIn = parameter.keys;
System.log("in parameters:");
for (var i = 0; i < keysIn.length; i++) {
	var name = keysIn[i];
	var value = parameter.get(name);
	request.setInParameter(name, value);
	System.log("  + name: '" + name + "', value: '" + value + "'");
}

var inAttributes = attribute.keys;
System.log("in attributes:");
for (var i = 0; i < inAttributes.length; i++) {
	var name = inAttributes[i];
	var value = attribute.get(name);
	var attributeName = name.substring(name.lastIndexOf('(')+1, name.lastIndexOf(')'));
    var parameterName = name.substring(0, name.lastIndexOf('('));

    request.addInParameterAttribute(parameterName, attributeName, value);
}

System.log("invoking '" + operation.name + "' operation...");
var response = operation.invoke(request);
System.log("operation '" + operation.name + "' successfully invoked.");

System.log("processing response...");
var result = new Properties();

System.log("processing headers...");
var outHeaders = new Properties();
var headerNames = response.getOutHeaders();
if (headerNames.length > 0) {
    System.log("out headers available:");
    for (var i = 0; i < headerNames.length; i++) {
        var name = headerNames[i];
        var value = response.getOutHeader(name);
        outHeaders.put(name, value);
        System.log("  + header: '" + name + "', value: '" + value + "'");
    }
}


var outParamNames = response.getOutParameters();
var outParameters = new Properties();
if (outParamNames.length > 0) {
	System.log("out parameters available:");	
	for (var i = 0; i < outParamNames.length; i++) {
		var name = outParamNames[i];
		var value = response.getOutParameter(name);
		outParameters.put(name, value);
		System.log("  + name: '" + name + "', value: '" + value + "'");
	}
}

result.put("SOAP_OUT_HEADERS", outHeaders);
result.put("SOAP_OUT_PARAMETERS", outParameters);
return result;

}
}
