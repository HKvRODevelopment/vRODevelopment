/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest {
export function xml2json(xml?: string): any {return eval('('+RESTUtils.xml2json(xml)+')');
}
}
