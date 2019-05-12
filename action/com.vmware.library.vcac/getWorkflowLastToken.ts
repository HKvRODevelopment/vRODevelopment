/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getWorkflowLastToken(wf?: Workflow): WorkflowToken {return wf.executions[wf.executions.length -1];

}
}
