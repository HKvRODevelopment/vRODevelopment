/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function removeEntityLink(vcacHost?: vCAC.VCACHost, entity?: vCAC.Entity, linkType?: string, linkedEntityToRemove?: vCAC.Entity): vCAC.Entity {hostId = entity.hostId;
modelName = entity.modelName;
entitySetName = entity.entitySetName;
entityIdString = entity.keyString;

var properties = entity.getProperties();
var links = entity.getLinks(vcacHost);

var elements = links.get(linkType);

var array = new Array();
for (var element of elements) {
if (element != linkedEntityToRemove) {
	array.push(element);	
	}
}
links.put(linkType, array);

return vCACEntityManager.updateModelEntityBySerializedKey(hostId, modelName, entitySetName, entityIdString, properties, links, null);
}
}
