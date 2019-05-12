/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getvCOMachineMenuWorkflowNames(host?: vCAC.VCACHost): Array<string> {if (host == null) return null;
var entitySetName = "WorkflowDefinitions";
var modelName = "Metamodel.svc";

//Get all  definitions
var properties = new Properties();
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, modelName, entitySetName, properties, null);

var names = new Array();
for (var entity of entities) {
	var name = entity.getProperty("Name");
	if (name.indexOf("WFvCOMachineMenu") > -1) names.push(name);
}
return names;
}
}
