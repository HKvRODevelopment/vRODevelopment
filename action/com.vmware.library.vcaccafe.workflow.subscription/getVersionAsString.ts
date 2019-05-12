/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function getVersionAsString(subscription?: vCACCAFE.WorkflowSubscription): string {return subscription.getVersion().getVersion();

}
}
