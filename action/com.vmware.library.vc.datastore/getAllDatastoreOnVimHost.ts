/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getAllDatastoreOnVimHost(vimHost?: VC.SdkConnection): Array<VC.Datastore> {var keys = new Properties();
var result = new Array();
try {
	searchInFolder(vimHost.rootFolder);
	//System.log(result.length + " datastores found");
	return result;
}
catch (ex) {
	if (vimHost != null)
		throw "Error getting datastore on " + vimHost.name + ". " + ex;
	else
		throw "Error getting datastore on null vimHost. " + ex;
}



function searchInFolder(folder) {
	//System.log("searchInFolder(" + folder.name + ")");
	if (folder.datacenter != null) {
		var childs = folder.childEntity;
		for (var i in childs) {
			if (childs[i] instanceof VcFolder) {
				System.log("a folder: " + childs[i].name);
				searchInFolder(childs[i]);
			}
			if (childs[i] instanceof VcDatacenter) {
				System.log("a datacenter: " + childs[i].name);
				addDatastore(childs[i]);
			}
		}
	}	
}

function addDatastore(datacenter) {
	var allDS = datacenter.datastore;
	for (var i in allDS) {
		if (keys.get(allDS[i].sdkId) == null) {	
			System.log(allDS[i].name + " found!");
			result.push(allDS[i]);
			keys.put(allDS[i].sdkId, allDS[i].sdkId);
		}
	}
}
}
}
