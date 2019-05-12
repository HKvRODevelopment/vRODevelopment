/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.converter {
export function isSame(converterDefinitionsCSV?: ResourceElement, objectX?: any, objectY?: any): boolean {System.debug("objectX type->" + objectX);
System.debug("objectY type->" + objectY);

if(objectX == null || objectY == null){
	throw "Null references can't be checked for equality!";
}

var vcObj = null;
var psObj = null;

var definitions =  com.vmware.library.powershell.converter.getConverterDefinitions(converterDefinitionsCSV);

System.debug("objectX type->" +  System.getObjectType(objectX));
System.debug("objectY type->" + System.getObjectType(objectY));

if(isRepresentingArray(objectX) || isRepresentingArray(objectY)){
	if(checkForArrayWithSizeOne(objectX) || checkForArrayWithSizeOne(objectY)){
		if(checkForArrayWithSizeOne(objectX)){
			objectX = getArrayElement(objectX,0);
		}
		if(checkForArrayWithSizeOne(objectY)){
			objectY = getArrayElement(objectY,0);		
		}
	} else if(checkForArraysWithSameSize(objectX, objectY)){//throws exception or is true
		var arrXLength = getArrayLength(objectX);
		var arrYLength = getArrayLength(objectY);
		//here we know we have two arrays with same size to check.
		for (var i = 0; i < arrXLength; i++) {
			var objXFoundInY = false;
	    	for (var j = 0; j < arrYLength; j++) {
				if(checkArrElementsSame(objectX, i, objectY, j)){
					objXFoundInY = true;
					break;
				}
			}
			if(!objXFoundInY){
				return false;
			}			
		}
		
		//everything in X found in Y or objectX.length = objectY.length = 0
		return true;
	}
	
}

//here we know we have to compare objects that are not arrays

setObjectsToCheck(objectX, objectY);
return checkSame();


function checkForArrayWithSizeOne(arr){
	return getArrayLength(arr) == 1;
}

function checkArrElementsSame(objX, i, objY, j){
System.debug("checkArrElementsSame->   " + i + "  " + j);

	var xObj = getArrayElement(objX,i);
	var yObj = getArrayElement(objY,j);
	var psObjIndex = null;
	
	var xType = System.getObjectType(xObj);
	if(xType.indexOf("VC:") == 0){
		vcObj = xObj;
	} else if(xType.equals("PowerShell:PowerShellRemotePSObject")){
		psObj = xObj;
		psObjIndex = i;
	} else {
		throw "Validation error. One of input params is neither VC:<Object> nor instance of PowerShellRemotePSObject";
	}
	
	var yType = System.getObjectType(yObj);
	if(yType.indexOf("VC:") == 0){
		vcObj = yObj;
	} else if(yType.equals("PowerShell:PowerShellRemotePSObject")){
		psObj = yObj;
		psObjIndex = j;
	} else {
		throw "Validation error. One of input params is neither VC:<Object> nor instance of PowerShellRemotePSObject";
	}
	
	return checkSame(psObjIndex);
}

function getArrayElement(arrX, index){
	var arrObjType = System.getObjectType(arrX);
	if(arrObjType.equals("Array")){
		return arrX[index];
	} else if(arrObjType.equals("PowerShell:PowerShellRemotePSObject")){
		if(arrX.getRootObject() instanceof Array){
			return arrX;
		}
	}
	throw "Can't get array for object that doesn't represent array."
}

function checkForArraysWithSameSize(arrX, arrY){
	if(!(isRepresentingArray(arrX) && isRepresentingArray(arrY))){
		throw "Validation error. One of input params is Array but the other one is not.";
	}
	var arrXLength = getArrayLength(arrX);
	var arrYLength = getArrayLength(arrY);
	
	if(arrXLength != arrYLength && arrXLength >= 0){
		throw "Validation error. The two arrays has different size.";
	}
	
	return true;
}

function getArrayLength(obj){
	var arrObjType = System.getObjectType(obj);
	System.debug("arrObjType->" + arrObjType);
	if(arrObjType.equals("Array")){
		return obj.length;
	} else if(arrObjType.equals("PowerShell:PowerShellRemotePSObject")){
		if(obj.getRootObject() instanceof Array){
			return obj.getRootObject().length;
		}
	}
	return -1;//not an array
}

function isRepresentingArray(obj){
	var isObjArray = false;
	var arrObjType = System.getObjectType(obj);
	if(arrObjType.equals("Array")){
		isObjArray = true;
	} else if(arrObjType.equals("PowerShell:PowerShellRemotePSObject")){
		if(obj.getRootObject() instanceof Array){
			isObjArray = true;
		}
	}
	return isObjArray
}

function setObjectsToCheck(x, y){
	System.debug("x->" + x);
	System.debug("y->" + y);
	

	var xType = System.getObjectType(x);
	var yType = System.getObjectType(y);
	
	System.debug("yType->" + yType);
	
	if(xType.indexOf("VC:") == 0){
		vcObj = x;
	} else if(xType.equals("PowerShell:PowerShellRemotePSObject")){
		psObj = x;
	} else {
		throw "Validation error. One of input params is neither VC:<Object> nor instance of PowerShellRemotePSObject";
	}
	
	if(yType.indexOf("VC:") == 0){
		vcObj = y;
	} else if(yType.equals("PowerShell:PowerShellRemotePSObject")){
		psObj = y;
	} else {
		throw "Validation error. One of input params is neither VC:<Object> nor instance of PowerShellRemotePSObject";
	}
	
	System.debug("type inside psObj->" + System.getObjectType(psObj.getRootObject()));
	if(psObj.getRootObject() instanceof Array){
		throw "Validation error. One of the input params is VC:<Object> the other one is PowerShellRemotePSObject representing array";
	}
}

function checkSame(psObjArrIndex){
	System.debug("vcObj type" + System.getObjectType(vcObj) );
	System.debug("psObj type" + System.getObjectType(psObj));
	
	var dunesId = System.getObjectId(vcObj);
	
	var converterPsObj = com.vmware.library.powershell.converter.getConverter(definitions, psObj, psObjArrIndex);
	System.debug("converterPsObj->" + converterPsObj + " " + psObjArrIndex);
	System.debug("converterPsObj.converterDefinition->" + converterPsObj.converterDefinition);
	System.debug("converterPsObj.converterDefinition.getToType(dunesId)->" + converterPsObj.converterDefinition.getToType(dunesId));
	var converterDefinitionToType = converterPsObj.converterDefinition.getToType(dunesId);
	var checkTypes = converterDefinitionToType.equals(System.getObjectType(vcObj));
	System.debug("ccheckTypes->" + checkTypes);
	var checkIds = false;
	if(psObjArrIndex >= 0){
		System.debug("1->");
		var psObjDunesId = "";
		if(psObj.getRootObject() instanceof Array){
			psObjDunesId = converterPsObj.getVcoObjDunesId(psObj.getRootObject()[psObjArrIndex]);
		} else {
			psObjDunesId = converterPsObj.getVcoObjDunesId(psObj.getRootObject());
		}
		System.debug("psObjDunesId->" + psObjDunesId + "  |  " + dunesId + "<-dunesId(from obj)");
		checkIds = psObjDunesId.equals(dunesId);
		if(!checkIds){
			checkIds = dunesId.indexOf(psObjDunesId) == 0;
			if(checkIds){
				System.warn("dunesId doesn't match exacty after conversion");
			}

		}
	} else {
		System.debug("2->");
		checkIds = converterPsObj.getVcoObjDunesId(psObj.getRootObject()).equals(dunesId);
		if(!checkIds){
			checkIds = dunesId.indexOf(converterPsObj.getVcoObjDunesId(psObj.getRootObject())) == 0;
			if(checkIds){
				System.warn("dunesId doesn't match exacty after conversion");
			}
		}
	}
	System.debug("checkIds->" + checkIds);
	return checkTypes && checkIds;
}
}
}
