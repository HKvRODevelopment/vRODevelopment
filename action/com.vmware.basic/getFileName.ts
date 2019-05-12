/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.basic {
export function getFileName(fileName?: Path): Path {if ( fileName != null )  {
	var index = fileName.lastIndexOf( "/" );
	return fileName.substring( index+1, fileName.length );
}
return null;

}
}
