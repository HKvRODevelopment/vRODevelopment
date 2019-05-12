/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.snapshot {
export function removeOldestSnapshotOfVM(vm?: VC.VirtualMachine, numberOfSnapshotToDelete?: number): void {var snapshotProperties = com.vmware.library.vc.vm.snapshot.getPropertiesForSnapshotTask(vm) ;
var searchResults = com.vmware.library.vc.vm.snapshot.getAllSnapshotResultInDatastoreBrowser(false,false,false,true) ;
		


//var instance = new VcManagedObjectReference();
//instance.type = "ServiceInstance";
//instance.value = "ServiceInstance";
//var instanceObject = VcPlugin.convertToVimManagedObject(vm , instance);

var time = 0;

var snapshotNameToRemove;
var snapshotToRemove;
var index=0;
var indexToRemove;
var files;
var folderPath;
for (var i in searchResults) {
	files = searchResults[i].file;
	while(index<numberOfSnapshotToDelete){
		for (var j in files) {
			if(files[j]!=null){
			    folderPath = searchResults[i].folderPath;
			    folderPath = folderPath.charAt(folderPath.length - 1) === '/' ? folderPath : folderPath + '/';
				if(snapshotProperties.get(folderPath+files[j].path)){
					if(time==0 || files[j].modification.getTime()<time){
						time = files[j].modification.getTime();
						snapshotNameToRemove = folderPath + files[j].path;
						indexToRemove = j;
					}
							
				}	
			}
		}
		if(snapshotNameToRemove){
			files[indexToRemove]=null;
			snapshotToRemove = snapshotProperties.get(snapshotNameToRemove);
			var task = snapshotToRemove.removeSnapshot_Task(false);
			var actionResult = com.vmware.library.vc.basic.vim3WaitTaskEnd(task) ;
			snapshotProperties.remove(snapshotNameToRemove);
		}
		index++;
		time = 0;
		snapshotNameToRemove=null;
		indexToRemove=null;
	}
	index=0;
}
	

}
}
