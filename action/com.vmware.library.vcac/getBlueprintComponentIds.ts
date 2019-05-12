/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getBlueprintComponentIds(blueprint?: vCACCAFE.CompositeBlueprint): Array<string> {if (!blueprint) {
	throw "Composite blueprint cannot be null.";
}
var components = blueprint.getComponents();
return components.keys;
}
}
