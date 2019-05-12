/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function createVirtualScsiControllerConfigSpec(type?: string): any {// Create SCSI controller
var controller = null;
if ( type != null  &&  "LSI".equalsIgnoreCase( type.toUpperCase() ) == true )  {
	controller = new VcVirtualLsiLogicController();
}else if(type != null  &&  "PARA".equalsIgnoreCase( type.toUpperCase() ) == true){
	controller = new VcParaVirtualSCSIController();
}else if(type != null  &&  "SAS".equalsIgnoreCase( type.toUpperCase() ) == true){
	controller = new VcVirtualLsiLogicSASController();
}
else  {
	controller = new VcVirtualBusLogicController();
}
controller.key = 0;
controller.device = new Array(0);
controller.busNumber = 0;
controller.sharedBus = VcVirtualSCSISharing.noSharing;
// Create SCSI controller ConfigSpec
var deviceConfigSpec = new VcVirtualDeviceConfigSpec();
deviceConfigSpec.device = controller;
deviceConfigSpec.operation = VcVirtualDeviceConfigSpecOperation.add;

return deviceConfigSpec;

}
}
