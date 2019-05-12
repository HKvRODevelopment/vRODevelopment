/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function processOutParameters(response?: any): Properties {var parameters = new Properties();
var parameterNames = response.getOutParameters();
if (parameterNames.length > 0) {
	System.log("out parameters available:");	
	for (var i = 0; i < parameterNames.length; i++) {
		var parameterName = parameterNames[i];
		var parameterValue = response.getOutParameter(parameterName);
		parameters.put(parameterName, parameterValue);
		System.log("  + parameter name: '" + parameterName + "', value: '" + parameterValue + "'");
		processParameterAttributes(response, parameterName, parameters);
	}
}
processParameterAttributes(response, ".", parameters);
return parameters;

// helper function
function processParameterAttributes(response, parameterName, parameters) {
	var attributeNames = response.getOutParameterAttributes(parameterName);
	if (attributeNames != null) {
		for (var j = 0; j < attributeNames.length; j++) {
			var attributeName = attributeNames[j];
			var attributeValue = response.getOutParameterAttribute(parameterName, attributeName);
			var attributeParameterName = parameterName + "(" + attributeName + ")";
			parameters.put(attributeParameterName, attributeValue);
			System.log("  + parameter attribute name: '" + attributeParameterName + "', value: '" + attributeValue + "'");
		}
	}
}
}
}
