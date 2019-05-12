/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.basic {
export function createDirectory(directory?: Path): void {var file = new File(directory) ;
if (!file.exists) {
	System.log("Creating directory : '" + directory + "'");
	file.createDirectory() ;
	System.log("Directory '" + directory + "' created.") ;
}

}
}
