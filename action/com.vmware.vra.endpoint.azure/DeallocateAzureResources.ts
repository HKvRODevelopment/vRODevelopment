/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function DeallocateAzureResources(requestData?: Properties): void {var deleteWorkflowId = "d9bb22cf-8c46-4f39-a657-297096ea2e9c";
var deleteWorkflow = Server.findForType("Workflow" , deleteWorkflowId);

var inputProperties = new Properties();
inputProperties.put("requestData", requestData);

deleteWorkflow.execute(inputProperties);
}
}
