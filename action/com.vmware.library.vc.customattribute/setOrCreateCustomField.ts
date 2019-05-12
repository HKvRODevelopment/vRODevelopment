/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.customattribute {
export function setOrCreateCustomField(managedEntity?: any, customFieldName?: string, newCustomFieldValue?: string): void {var customFieldValue = com.vmware.library.vc.customattribute.getCustomField(managedEntity, customFieldName);

var vimHost = managedEntity.vimHost;

var key;
if (customFieldValue == null) {
	// Custom field does not exist --> create it
	var customFieldDef = vimHost.customFieldsManager.addCustomFieldDef(customFieldName);
	System.sleep(3*1000);
	key = customFieldDef.key;	
}
else {
	var customFieldDefs = vimHost.customFieldsManager.field;
	for (var i = 0; i < customFieldDefs.length; i++) {
		if (customFieldDefs[i].name == customFieldName) {
			key = customFieldDefs[i].key;
			break;
		}
	}	
}

vimHost.customFieldsManager.setField(managedEntity, key, newCustomFieldValue);


}
}
