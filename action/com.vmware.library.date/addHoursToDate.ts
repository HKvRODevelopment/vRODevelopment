/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.date {
export function addHoursToDate(date?: Date, hours?: number): Date {return new Date(date.getTime() + hours * 60 * 60 * 1000)
}
}
