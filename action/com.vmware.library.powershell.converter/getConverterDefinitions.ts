/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.converter {
export function getConverterDefinitions(csvDefinitions?: ResourceElement): Array<any> {var csvFileContent = csvDefinitions.getContentAsMimeAttachment().content;

//get all rows
var allRows = csvFileContent.split("\n");

var result = new Array();
for (var row of allRows){
	result.push(convertRowToDefinitionObject(row));
}

return result;

function splitCSV(csvRow, sep) {
  for (var foo = csvRow.split(sep = sep || ","), x = foo.length - 1, tl; x >= 0; x--) {
    if (foo[x].replace(/"\s+$/, '"').charAt(foo[x].length - 1) == '"') {
      if ((tl = foo[x].replace(/^\s+"/, '"')).length > 1 && tl.charAt(0) == '"') {
        foo[x] = foo[x].replace(/^\s*"|"\s*$/g, '').replace(/""/g, '"');
      } else if (x) {
        foo.splice(x - 1, 2, [foo[x - 1], foo[x]].join(sep));
      } else foo = foo.shift().split(sep).concat(foo);
    } else foo[x].replace(/""/g, '"');
  } return foo;
};

function convertRowToDefinitionObject(csvRow){
	rowAsArr = splitCSV(csvRow, null);
	return new ConverterDefinition(rowAsArr[0], 
									rowAsArr[1], 
										rowAsArr[2], 
											(rowAsArr[3]) ? rowAsArr[3] : null, 
												(rowAsArr[4]) ? rowAsArr[4] : null,
													(rowAsArr[5]) ? rowAsArr[5] : null);
}

function ConverterDefinition(fromType, toType, descriminator, powerCliGetter, typeRegExp, powerCliType){
	this.fromType = fromType;
	this.toType = toType.replace(new RegExp(";", 'g'), ",");
	this.descriminator = descriminator;
	this.powerCliGetter = powerCliGetter;
	this.typeRegExp = typeRegExp;
	this.powerCliType = powerCliType
	this.getToType = function (dunesId){
		if(this.toType.indexOf("{") >= 0){
			//it is array
			var regex = new RegExp(typeRegExp);
			var key = dunesId.match(regex)[0];
			System.debug("dunesId->" + dunesId);
			System.debug("key->" + key);
			System.debug("this.toType->" + this.toType);
			var obj = eval('(' + this.toType + ')');
			return obj[key];
		} else {
			return this.toType;
		}
	}
}
}
}
