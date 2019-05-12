/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function updateEndpointWorkflowMappings(endpointName?: string, endpointWorkflowMappings?: Properties): Properties {var allWorkflowMappings = com.vmware.vra.gef.getAllEndpointWorkflowMappings();

allWorkflowMappings.put(endpointName, endpointWorkflowMappings);

com.vmware.vra.gef.saveEndpointWorkflowMappings(allWorkflowMappings);
}
}
