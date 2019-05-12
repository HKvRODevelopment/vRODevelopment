/// <reference path="./../../includes.d.ts"/>

namespace test {
export function Build1DiskLayout(in_template_disks?: string): Array<Properties> {var disks = []
var disk_number = 1

//for (var disk_size of in_template_disks.split("|")) {
	disk_size = in_template_disks
	if(disk_size == "0"){
		return disks
	}
     disks.push({"is_clone":false,
     "initial_location":"E",
     "volumeId":disk_number,
     "id":null,
     "label":"Extra Disk 1",
     "userCreated":false,
     "storage_reservation_policy":null,
     "capacity":disk_size})
//disk_number++
//}
return disks

}
}
