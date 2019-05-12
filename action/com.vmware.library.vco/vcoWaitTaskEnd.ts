/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vco {
export function vcoWaitTaskEnd(token?: VCO.RemoteWorkflowToken, pollRate?: number): string {var tokenState;
var tokenFinished;

while(true) {
	tokenState = token.state;
	tokenFinished = (tokenState == "completed" || tokenState == "failed" || tokenState == "canceled");
	if(tokenFinished) {
		break;
	}
	System.sleep(pollRate * 1000);
}

return token;

}
}
