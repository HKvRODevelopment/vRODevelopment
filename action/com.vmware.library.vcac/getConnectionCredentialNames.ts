/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getConnectionCredentialNames(vcacHost?: vCAC.VCACHost): Array<string> {if (vcacHost == null) return null;
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, "ManagementModelEntities.svc", "ConnectionCredentials", null, null);
System.log("Connection Credentials found: "+entities.length);
var prop = new Properties();
for (var entity of entities) {
	prop.put(entity.getProperty("CredentialName"));
}
return prop.keys.sort();


}
}
