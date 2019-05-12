/// <reference path="./../../includes.d.ts"/>

namespace test {
export function BuildDiskLayout(in_template_disks?: string): Array<Properties> {var disks = []
var disk_number = 0

for (var disk_size of in_template_disks.split("|")) {
     disks.push({"is_clone":true,
     "initial_location":null,
     "volumeId":disk_number,
     "id":null,
     "label":null,
     "userCreated":false,
     "storage_reservation_policy":null,
     "capacity":disk_size})
disk_number++
}
return disks

}
}
