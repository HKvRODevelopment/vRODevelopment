/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.powershell {
export function executePowershellScriptFromResourceOnHostByName(hostName?: string, scriptResourcePath?: string, scriptResourceName?: string): Properties {if(!scriptResourceName) {
	throw "Specify a resource name";
}

if(!scriptResourcePath) {
	throw "Specify a resource path";
}

var resource = findResourceByPathAndName(scriptResourcePath, scriptResourceName);

if(!resource) {
	throw "Resource '" + scriptResourceName + "' not found in '" + scriptResourcePath + "'"; 
}

var script =  resource.getContentAsMimeAttachment().content;

var output = com.vmware.vra.powershell.executePowerShellScriptOnHostByName(hostName, script);
var outputType = System.getObjectClassName(output);

if(outputType === "Properties") {
	return output;
} else {
	throw "Powershell Script has to return a Dictionary, actual output is '" + output.toString() + "' of type '" + outputType + "'";
}

function findResourceByPathAndName(path, name) {
	var category = Server.getResourceElementCategoryWithPath(path);

	for (var resourceElement of category.resourceElements) {
		if (resourceElement.name == name) {
			return resourceElement;
		}
	}
}
}
}
