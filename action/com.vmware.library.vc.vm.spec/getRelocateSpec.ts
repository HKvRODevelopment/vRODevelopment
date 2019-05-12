/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getRelocateSpec(datastore?: VC.Datastore, disk?: Array<any>, host?: VC.HostSystem, pool?: VC.ResourcePool, transform?: VC.VirtualMachineRelocateTransformation): any {try {
	simpleCheckParams();
	consistencyCheckParams();
	var relocateSpec = new VcVirtualMachineRelocateSpec();
	affectParams();
	return relocateSpec;
}
catch (ex) {
	throw "Unable to create VcVirtualMachineRelocateSpec: " + ex;
}

function consistencyCheckParams() {
	//if resource pool is not specified, current host is used. 
	if (pool == null && host == null) return; // throw "pool and host cannot be all two set to null";
	if (pool == null) {
		// host is not null
		pool = host.parent.resourcePool;
		checkDatastoreAccessOkFromHost(host);
	}
	else {
		cluster = pool.parent;
		while (! (cluster instanceof VcComputeResource) && ! (cluster instanceof VcClusterComputeResource)) {
			cluster = cluster.parent;
		}
		//if resource pool is specified, and the target pool represents a stand-alone host, the host is used. 
		if (cluster instanceof VcComputeResource) {
			if (host != null && (cluster != host.parent)) {
				throw "pool and host do not represent the same compute resource";
			}
		}
		else if (cluster instanceof VcClusterComputeResource) {
			if (cluster.configuration.drsConfig.enabled ) {
				//if resource pool is specified, and the target pool represents a DRS-enabled cluster, a host selected by DRS is used. 
				if (host != null && (cluster != host.parent)) {
					throw "pool and host do not represent the same compute resource";						
				}
			}
			else {
			//if resource pool is specified and the target pool represents a cluster without DRS enabled, an InvalidArgument exception be thrown. 	
				if (host == null) {
					throw "pool is in a cluster without drs. You must define host";
				}
			}
		}
	}
}

function checkDatastoreAccessOkFromHost(myHost) {
	var allDS = myHost.datastore;
	var found = false;
	
	if (datastore == null) {
		return;
	}
	
	for (var i in allDS) {
		if (allDS[i] == datastore) {
			found = true;
			break;
		}
	}
	if (found == false) {
		var hostName = myHost == null ? "Unknown Host" : myHost.name;
		var datastoreName = datastore == null ? "Unknown Datastore" : datastore.name;
		throw "host " + hostName + " have no access to datastore " + datastoreName;
	}
}

function checkDatastoreAccessOkFromCluster(myCluster) {
	var allDS = myCluster.datastore;
	var found = false;
	
	if (datastore == null) {
		return;
	}
	
	for (var i in allDS) {
		if (allDS[i] == datastore) {
			found = true;
			break;
		}
	}
	if (found == false) {
		var clusterName = myCluster == null ? "Unknown Cluster" : myCluster.name;
		var datastoreName = datastore == null ? "Unknown Datastore" : datastore.name;		
		throw "cluster " + clusterName + " have no access to datastore " + datastoreName;
	}
}

function affectParams() {
	if (datastore != null)
		relocateSpec.datastore = datastore.reference;
	if (disk != null && disk.length > 0) 
		relocateSpec.disk = disk;
	if (host != null)
		relocateSpec.host = host.reference;
	if (pool != null)
		relocateSpec.pool = pool.reference;
	if (transform != null)
		relocateSpec.transform = VcVirtualMachineRelocateTransformation.fromString(transform.name);
}


function simpleCheckParams() {
	if (disk != null) {
		for (var i in disk) {
			if ((disk[i] instanceof VcVirtualMachineRelocateSpecDiskLocator) == false) {
				throw "disk must be of type 'Array of VcVirtualMachineRelocateSpecDiskLocator'";
			}
		}
	}
}
}
}
