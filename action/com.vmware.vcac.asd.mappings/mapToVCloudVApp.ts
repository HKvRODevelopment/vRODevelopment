/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd.mappings {
export function mapToVCloudVApp(vAppProperties?: Properties): vCloud.VApp {var type = 'vCloud:VApp';
var vAppHref = vAppProperties.get('EXTERNAL_REFERENCE_ID');
var foundVApp = com.vmware.vcac.asd.findVcdObjectByHref(type,vAppHref) ;
if (!foundVApp) {
	System.warn('No vApps with href ' + vAppHref + ' were found');
} 	
return foundVApp;
}
}
