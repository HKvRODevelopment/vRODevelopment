/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.composition.blueprint {
export function importCompositeBlueprint(host?: vCACCAFE.VCACHost, file?: MimeAttachment): string {System.log("Importing a composite blueprint...");
var id = vCACCAFECompositeBlueprintHelper.importBlueprint(host, file);
System.log("Import successful");
return id;
}
}
