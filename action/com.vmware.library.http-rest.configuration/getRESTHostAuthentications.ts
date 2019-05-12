/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getRESTHostAuthentications(): Array<string> {return RESTAuthenticationManager.getRESTAuthentications();
}
}
