/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.customattribute {
export function getCustomField(managedEntity?: any, customFieldName?: string): string {var vimHost;
try {
	vimHost = managedEntity.vimHost;
}
catch (exeption) {
	throw "You can get/set custom attribute only on VC ManagedEntities";
}

var customFieldDefs = vimHost.customFieldsManager.field;

var key = null;
for (var i = 0; i < customFieldDefs.length; i++) {
	if (customFieldDefs[i].name == customFieldName) {
		key = customFieldDefs[i].key;
		break;
	}
}

if (key == null) {
	return null;
}

var customFieldValues = managedEntity.customValue;
for (var i = 0; i < customFieldValues.length; i++) {
	if (customFieldValues[i].key == key) {
		return customFieldValues[i].value;
	}
}

return "";
}
}
