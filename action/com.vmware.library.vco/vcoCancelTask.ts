/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vco {
export function vcoCancelTask(token?: VCO.RemoteWorkflowToken): void {token.cancel();return token;
}
}
