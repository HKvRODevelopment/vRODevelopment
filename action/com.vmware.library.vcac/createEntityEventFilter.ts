/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function createEntityEventFilter(host?: vCAC.VCACHost, expression?: string, propertyName?: string, value?: string): vCAC.Entity {var entitySetName = "EntityEventFilters";
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

//var properties = new Properties();
properties.put("Id", String(id));
properties.put("Expression", expression);
properties.put("PropertyName", propertyName);
properties.put("Value", value);
return vCACEntityManager.createModelEntity(host.id , modelName , entitySetName , properties , null , null);
}
}
