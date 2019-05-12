/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function createWorkflowDefinition(host?: vCAC.VCACHost, name?: string, description?: string, xamlDefinition?: string, isRunOneOnly?: boolean, isProtected?: boolean, links?: Properties): vCAC.Entity {var entitySetName = "WorkflowDefinitions";
var modelName = "Metamodel.svc";

//Get all workflow definitions
var properties = new Properties();
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, modelName, entitySetName, properties, null);

//Get the last id
var lastId = 0;
for (var entity of entities){
	var id = parseInt(entity.getProperty("Id"));
	if (id >= lastId) {
		lastId = id;
	}									
}	

var properties = entity.getProperties();													
id++;
System.log(id);

properties.put("Id", String(id));
properties.put("Name", name);
properties.put("Revision", 0);
properties.put("Description", description);
properties.put("XamlDefinition", xamlDefinition);  
properties.put("IsRunOneOnly", isRunOneOnly);
properties.put("isProtected", isProtected); 

return vCACEntityManager.createModelEntity(host.id , modelName , entitySetName , properties , links , null);

}
}
