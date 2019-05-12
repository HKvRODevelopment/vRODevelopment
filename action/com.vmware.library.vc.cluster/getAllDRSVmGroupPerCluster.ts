/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function getAllDRSVmGroupPerCluster(cluster?: VC.ClusterComputeResource): Array<string> {//Liste Virtual Machine Groups in a given cluster
var groupArray = new Array ();
System.log("Searching for a Cluster VM group by name ");
for (var i in cluster.configurationEx.group) {	
	if (cluster.configurationEx.group[i] instanceof VcClusterVmGroup){
	groupArray.push(cluster.configurationEx.group[i].name);
	}	
}
return groupArray;


}
}
