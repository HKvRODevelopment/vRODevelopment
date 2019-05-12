/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function getResourceElementContent(resourcePath?: string, resourceName?: string): string {var category = Server.getResourceElementCategoryWithPath(resourcePath);

for (var resourceElement of category.resourceElements) 
{
	if (resourceElement.name == resourceName) 
	{
		return resourceElement.getContentAsMimeAttachment().content;
	}
}

return null;
}
}
