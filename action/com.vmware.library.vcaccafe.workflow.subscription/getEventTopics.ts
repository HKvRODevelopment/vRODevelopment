/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function getEventTopics(host?: vCACCAFE.VCACHost): Array<vCACCAFE.EventTopic> {return vCACCAFEEntitiesFinder.findEventTopics(host);
}
}
