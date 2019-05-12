/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getInstanceDetails(series?: string, size?: string): string {// Reading from Configuraiton Element

var attributeResults = com.vmware.vra.endpoint.azure.configuration.getAzureConfigurations({'InstanceDetails': [series + "_" + size]});

return attributeResults['InstanceDetails'][series+"_"+size];


}
}
