/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function getEndpointFrameworkConfigElement(): ConfigurationElement {var endpointFrameworkConfigElement = getEndpointFrameworkConfigElement();
if (endpointFrameworkConfigElement == null) {
	throw "Unable to find the 'Generic Endpoint Framework' configuration element - expected to find it in the Library\vRA folder";
}

return endpointFrameworkConfigElement;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getEndpointFrameworkConfigElement() {
	var libraryFolder = Server.getConfigurationElementCategoryWithPath("Library");
	var libraryConfigs = libraryFolder.allConfigurationElements;
	for (var config of libraryConfigs) {
		if (config.name === "Generic Endpoint Framework") {
			return config;
		}
	}
	return null;
}
}
}
