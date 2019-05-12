/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.snapshot {
export function getAllSnapshotResultInDatastoreBrowser(owner?: boolean, size?: boolean, type?: boolean, modif?: boolean): Array<any> {var results = new Array();

var fileQuery = new Array(new VcVmSnapshotFileQuery());

var flags = new VcFileQueryFlags();
flags.fileOwner=owner;
flags.fileSize=size;
flags.fileType=type;
flags.modification=modif;

var querySpec = new VcHostDatastoreBrowserSearchSpec();
querySpec.details=flags;
querySpec.query = fileQuery;

var datastoreProp = new Properties() ;


var datastores = VcPlugin.getAllDatastores();
for (var datastore of datastores){
	try{
		if(!datastoreProp.get(datastore.summary.url)){
			//System.log("---------------Datastore Name : " + datastore.name + " - VC Name : " + datastore.sdkConnection.id + " ---------------");
			var task = datastore.browser.searchDatastoreSubFolders_Task("[" + datastore.name + "]", querySpec);
			//var task = datastore.browser.searchDatastore_Task("[" + datastore.name + "]", querySpec);
			searchResults = com.vmware.library.vc.basic.vim3WaitTaskEnd(task,false,5);
			for (var i in searchResults) {
				results.push(searchResults[i]);
				//System.log(searchResults[i].folderPath);
			}
			datastoreProp.put(datastore.summary.url,datastore);
		}
	}catch(e){
		//System.warn(e);
	}
}
return results;
}
}
