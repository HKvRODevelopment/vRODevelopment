/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getUplinkPortGroupsForSwitch(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<any> {var result = new Array();
if (dvSwitch != null) {
	for (var i in dvSwitch.portgroup) {
		var port = VcPlugin.convertToVimManagedObject(dvSwitch, dvSwitch.portgroup[i]);
		result.push(port);
	}
}
return result;

}
}
