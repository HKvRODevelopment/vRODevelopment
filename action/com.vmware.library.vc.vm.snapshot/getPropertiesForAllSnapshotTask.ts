/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.snapshot {
export function getPropertiesForAllSnapshotTask(): Properties {var vms = VcPlugin.getAllVirtualMachines();
var snapshotProperties = new Properties();

for (var i in vms){
	var vm = vms[i];
	if(vm.runtime.connectionState.value=="connected" && !vm.config.template){
		var vmLayout = vm.layoutEx;
		if(vmLayout!=null){
			var layoutFiles = vmLayout.file;
			var layoutSnapshots = vmLayout.snapshot;
			for (var l in layoutSnapshots){
				var layoutSnapshot = layoutSnapshots[l];
				var dataKey = layoutSnapshot.dataKey;
				for (var m in layoutFiles){
					if(layoutFiles[m].key==dataKey){
						snapshotProperties.put(layoutFiles[m].name,VcPlugin.convertToVimManagedObject(vm,layoutSnapshot.key));
						//System.log("Name : " +layoutFiles[m].name + " - Size : " + layoutFiles[m].size);
					}
				}
			}
		}
	}
}
return snapshotProperties;
}
}
