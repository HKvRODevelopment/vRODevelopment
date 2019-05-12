/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function createEventDefinition(host?: vCAC.VCACHost, create?: boolean, update?: boolean, del?: boolean, links?: Properties): vCAC.Entity {var entitySetName = "EntityEventDefinitions";
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

// Ugly work around for having an entity created with a CreatedDateTime of type org.joda.time.LocalDateTime (bug 1033984)
var properties = entity.getProperties();											
id++;
System.log(id);

//var properties = new Properties();
properties.put("Id", String(id));
properties.put("Create", create);
properties.put("Update", update);
properties.put("Delete", del);
return vCACEntityManager.createModelEntity(host.id , modelName , entitySetName , properties , links , null);
}
}
