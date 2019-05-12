/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getConnectionCredentialEntityByName(vcacHost?: vCAC.VCACHost, credentialName?: string): vCAC.Entity {if (vcacHost == null) return null;
var model = "ManagementModelEntities.svc";
var entitySetName = "ConnectionCredentials";

var connectionCredentialProperty = {
	CredentialName:credentialName,
}

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, model, entitySetName, connectionCredentialProperty, null);
if (entities != null){
	return entities[0];
}else{
	System.warn("No Connection Credential found with name: "+credentialName);
	return null;
}
}
}
