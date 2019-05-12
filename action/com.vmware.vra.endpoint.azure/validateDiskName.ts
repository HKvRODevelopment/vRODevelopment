/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function validateDiskName(diskName?: string): string {if (diskName == null || diskName == "") {
    return "";
}

// The original Regex that Azure uses is ^[^_\W][\w-._]{0,79}(?<![-.])$ but since we can't use Negative Lookbehind in JavaScript, add additional check for . and -

var diskNameRegexp = /^[^_\W][\w-._]{0,79}$/;
if (!diskName.match(diskNameRegexp)) {
	return "The disk name should be between up to 80 characters in length, containing no special characters and cannot end with hyphen or full stop.";
} else {
    var lastChar = diskName.charAt(diskName.length - 1);
    if (lastChar == "." || lastChar == "-") {
        return "The disk name should be between up to 80 characters in length, containing no special characters and cannot end with hyphen or full stop.";
    }
}

return "";
}
}
