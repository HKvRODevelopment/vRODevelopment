/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure.configuration {
export function getAzureConfigurations(attributesMap?: any): any {var attributesValuesMapResult = {};

// create (if needed) and retrieve all existing configurations
var azureConfigurations =
    com.vmware.vra.endpoint.azure.configuration.createAzureConfigurations();

for (var i = 0; i < azureConfigurations.length; i++) {
    var configurationName = azureConfigurations[i].name;
    // if the current configuration is specified check its attributes for potential matches
    if (attributesMap.hasOwnProperty(configurationName)) {
        var configurationAttributes = {};

        for (var j = 0; j < attributesMap[configurationName].length; j++) {
            var attributeName = attributesMap[configurationName][j];

            if (attributeName == "_self") {
                // append the configuration itself
                configurationAttributes["_self"] = azureConfigurations[i];
                continue;
            }

            var attribute = azureConfigurations[i].getAttributeWithKey(attributeName);
            if (attribute != null) {
                configurationAttributes[attributeName] = attribute.value;
            }
        }

        attributesValuesMapResult[configurationName] = configurationAttributes;
    }
}

return attributesValuesMapResult;
}
}
