/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.snapshot {
export function getAllSnapshotsOfVM(vm?: VC.VirtualMachine): Array<VC.VirtualMachineSnapshot> {var snapshots = new Array();
if(vm.snapshot){
	var snapshotTrees = vm.snapshot.rootSnapshotList;
	for (var i in snapshotTrees){
		getSnapshotsOfVM(snapshotTrees[i]);
	}
}
return snapshots;


function getSnapshotsOfVM(tree) {
	snapshots.push(tree.snapshot);
	var trees = tree.childSnapshotList;
	if (trees != null) {
		for (var index in trees) {
			if (trees[index] != null)
				getSnapshotsOfVM(trees[index]);
		}
	}
}


}
}
