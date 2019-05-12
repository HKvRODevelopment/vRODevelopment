/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.folder {
export function getRootVmFolder(): any {var vimHosts = VcPlugin.getVimHosts();

if (vimHosts.length == 1) {
	var rootFolder = vimHosts[0].rootFolder;	
	var datacenters = getAllDatacenters(rootFolder);
	
 	if  (datacenters.length == 1) {
		//System.log(datacenters[0].name);	
		return datacenters[0].vmFolder;
	}		
}

return null;


function getAllDatacenters (folder)
{var allDatacenters = new Array();
 //System.log("folder: "+ folder.name);
 var datacenters = folder.datacenter;
 if  (datacenters != null) {
	for (var i = 0; i < datacenters.length; i++) {
			allDatacenters.push(datacenters[i]);
			//System.log("Datacenter: " + datacenters[i].name);	
		}
	}
		
 var subFolders = folder.folder;

 if  (subFolders != null) {
	for (var i = 0; i < subFolders.length; i++) {
			var datacenters = getAllDatacenters(subFolders[i]);	
			if  (datacenters != null) {
					for (var j = 0; j < datacenters.length; j++) {
						allDatacenters.push(datacenters[j]);
						}
				}		
		}
	}
return allDatacenters;
}

}
}
