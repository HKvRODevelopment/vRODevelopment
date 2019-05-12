/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getAzureEnvironment(connection?: Azure.Connection): Array<string> {var result = [];
var existingValue = connection.azureEnvironment;

// Mainly for previous versions. This field will not be there.
if (existingValue == null || existingValue == "") {
   result.push("AZURE");
   result.push("AZURE_CHINA");
   result.push("AZURE_GERMANY");
   result.push("AZURE_US_GOVERNMENT");
} else {
   result.push(existingValue);
}

return result;
}
}
