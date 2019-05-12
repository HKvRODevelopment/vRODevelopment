/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getAzureEnvironmentUri(environment?: string, fieldName?: string): string {// Reading from Configuraiton Element
var attributeResults = com.vmware.vra.endpoint.azure.configuration.getAzureConfigurations({'EnvironmentUri': [environment + "_" + fieldName]});

return attributeResults['EnvironmentUri'][environment+"_"+fieldName];
}
}
