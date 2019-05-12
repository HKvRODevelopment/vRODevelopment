/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function getAllClusterComputeResourceForVimHost(vimHost?: VC.SdkConnection): Array<VC.ClusterComputeResource> {var result = new Array();
findComputeResourceInDataCenterFolder(vimHost.rootFolder);
return result;


function findComputeResourceInDataCenterFolder(hostFolder) {
	for (var dc of hostFolder.childEntity) {
		if (dc instanceof VcDatacenter) {
			findComputeResourceInDataCenter(dc);
		}
	}
	
	for (var folder of hostFolder.childEntity) {
		if (folder instanceof VcFolder) {
			findComputeResourceInDataCenterFolder(folder);
		}
	}
}

function findComputeResourceInDataCenter (datacenter) {
	findComputeResourceInHostFolder(datacenter.hostFolder);
}

function findComputeResourceInHostFolder (hostFolder) {
	for (var item of hostFolder.childEntity) {
		if (item instanceof VcClusterComputeResource) {
			result.push(item);
		}
	}
		
	for (var folder of hostFolder.childEntity) {
		if (folder instanceof VcFolder) {
			findComputeResourceInHostFolder(folder);
		}
	}
}




}
}
