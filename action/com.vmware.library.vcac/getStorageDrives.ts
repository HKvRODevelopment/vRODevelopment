/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getStorageDrives(selectedValues?: Array<string>): Array<string> {var availableDrives = ["xvdf","xvdg","xvdh","xvdi","xvdj","xvdk","xvdl","xvdm","xvdn","xvdo","/dev/sdf",
"/dev/sdg","/dev/sdh","/dev/sdi","/dev/sdj","/dev/sdk","/dev/sdl","/dev/sdm","/dev/sdn","/dev/sdo"];
if (selectedValues == null) {
	return availableDrives;
}

for (var i in selectedValues) {
	availableDrives.remove[selectedValues[i]];
}

return availableDrives;
}
}
