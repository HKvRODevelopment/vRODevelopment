/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllTasksToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
	"Task Name" 
	+ "," + "Execution Date"
	+ "," + "State"
	+ "," + "Workflow"
	+ "\n");	

var tasks = Server.findAllForType('Task');

for (var i = 0;i<tasks.length;i++){
	
	csvFile.write(
	"\"" + tasks[i].name  + "\""
	+ "," + "\"" + tasks[i].executionDate + "\""
	+ "," + "\"" + tasks[i].state + "\""
	+ "," + "\"" + tasks[i].workflow.name + "\""
	+ "\n");	
}

csvFile.close();

}
}
