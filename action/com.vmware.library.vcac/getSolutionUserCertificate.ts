/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getSolutionUserCertificate(host?: vCAC.VCACHost): vCAC.Entity {var modelName = "CoreModel.svc";
var entitySetName = "GlobalPropertyItems";
var filter = "Name eq 'Installation.Cafe.SolutionUserCert'";
var orderBy = null;
var select = null;
var top = 1;
var skip = 0;
var headers = null;

var entities = vCACEntityManager.readModelEntitiesBySystemQuery(host.id, modelName, entitySetName, filter, orderBy, select, top, skip, headers);
if (entities == null) {
	return null;
}
return entities[0];
}
}
