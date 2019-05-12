/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function getProviderWorkflow(workflowMapping?: string, workflowType?: string): Workflow {// Trim spaces and replace carriage returns and line feeds with just carriage returns.
var providerMappingContentWithoutCarriageReturn  = workflowMapping.replace(/\s*?[\r\n]\s*/g, "\n");

var workflowMappingContent = providerMappingContentWithoutCarriageReturn.split("\n");
for (var mappingStr ing of workflowMappingContent)
{
    // Provider resource mappings will be specified in the frmat WorkflowType:WorkflowID
    var mapping = mappingString.split(":");
    if (workflowType == mapping[0])
    {
        return Server.getWorkflowWithId(mapping[1]);
    }
}

return null;
}
}
