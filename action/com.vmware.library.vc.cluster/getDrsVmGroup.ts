/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.cluster {
export function getDrsVmGroup(cluster?: VC.ClusterComputeResource, group_name?: string): any {// Searching for a Cluster VM group by name 
System.log("Searching for a Cluster VM group by name ");
for (var i in cluster.configurationEx.group) {
	if (cluster.configurationEx.group[i].name == group_name) {
	if (cluster.configurationEx.group[i] instanceof VcClusterVmGroup){
	System.log ("A group with the same name " + group_name +  " found: " +  cluster.configurationEx.group[i]);
	return cluster.configurationEx.group[i];
	}	
	}
}
System.log ("There is no group with such a name");
return null;


}
}
