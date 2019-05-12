/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.o11n.plugin.dynamictypes.configuration {
export function getResourceElementByName(name?: string): ResourceElement {if (name == null) {
  System.log("getResourceElementByName() --> name is null");
  return null;
}

var rpath = null;
var rname = name;

var idx = rname.lastIndexOf("/");
if (idx != -1) {
  rpath = rname.substr(0, idx);
  rname = rname.substr(idx + 1);
}

var category = Server.getResourceElementCategoryWithPath(rpath);
if (category == null) {
  System.log("getResourceElementByName() --> category not found: " + rpath);
  return null;
}

var elements = category.resourceElements;
for (var i in elements) {
  var resource = elements[i];
  if (resource.name == rname) {
    return resource;
  }
}

System.log("getResourceElementByName() --> resource not found: " + name);

return null;
}
}
