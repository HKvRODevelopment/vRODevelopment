/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.converter {
export function getConverter(converterDefinitions?: Array<any>, objToConvert?: any, listIndex?: number): any {return new Converter(converterDefinitions, objToConvert, listIndex);


function Converter(converterDefs, objToConvert, listIndex){
	this.converterDefs = converterDefs;
	this.objToConvert = objToConvert;
	this.numberOfFinderRetries = 4;//0s, 2s, 4s and 8seconds delay = Total 14seconds
	
	this.isList = function(element){
		System.debug("System.getObjectClassName(element)->" + System.getObjectClassName(element));
		return System.getObjectClassName(element).indexOf("Array") >= 0;
	}
	
	this.getConverterDefinition = function(){
		if(this.converterDefinition){
			return this.converterDefinition;
		}
		
		var fromType = null;
		if(objToConvert instanceof PowerShellRemotePSObject){ //check for PowerShellRemotePSObject
			var root = objToConvert.getRootObject();
			if(this.isList(root)){
				fromType = root[0].getTypes()[0];//getting the type of the first element of the array
			} else {
				fromType = root.getTypes()[0];
			}
		} else { //we are here in case of VC:<Object> to PowerShellRemotePSObject conversion
			if(objToConvert instanceof Array){//if is array
				fromType = System.getObjectType(objToConvert[0]);
			}else {
				fromType = System.getObjectType(objToConvert);
			}
		}
		
		for (var conv of converterDefs){
			if(conv.fromType == fromType){
				return conv;
			}
		}
		
		throw "Can't convert. No converter definition was found for type:" + fromType;
	}
	
	this.converterDefinition = this.getConverterDefinition();
	
	this.getVcoObjDunesId = function(element){
		//get discriminator value
		var props = this.converterDefinition.descriminator.split(".");

		for (var prop of props){
			element = element.getProperty(prop);
		}
		
		// example Uid - /VIServer=o11nadmin1@o11n.vmware@10.23.164.127:443/Datacenter=datacenter-2/
		// the hostname - '10.23.164.127' needs to be extracted
		// some preceding usernames could containg '@' so check is made to guarantee the expected separator is fetched
		var startDescriminator = element.indexOf("@");
		var candidate = element.indexOf("@", startDescriminator + 1);
		if (candidate && candidate != -1) {
			startDescriminator = candidate;
		}
		
		// parse discriminator and extract VC object id e.g. dunesid
		var vcObjIdPrefix = element.substring(startDescriminator + 1, element.indexOf(":"));
		
		var vcObjIdSuffix = element.substring(element.indexOf(":")+1);
		vcObjIdSuffix = vcObjIdSuffix.substring(vcObjIdSuffix.indexOf("=")+1);
		vcObjIdSuffix = vcObjIdSuffix.substring(0, vcObjIdSuffix.indexOf("/"));

		vcObjId = vcObjIdPrefix + "/" + vcObjIdSuffix.substring(vcObjIdSuffix.indexOf("-")+1);	
		return vcObjId;
	}
	
	this.convertObject = function(element){
	    var vcObjId = this.getVcoObjDunesId(element);
		//find the VC object
		var type = this.converterDefinition.getToType(vcObjId);
		var i;
		var res = null;
		var sleepTime = 2000;//two secconds before next retry
		for (var i = 1; i <= this.numberOfFinderRetries; i++){
			System.debug("Rinning finder for type:" + type + " and dunes id:" + vcObjId + ", iteration:"+ i);
			res = Server.findForType(type, vcObjId);
			if(res != null){
				break;
			}
			System.sleep(sleepTime);
			sleepTime *= 2;
		}
		
		if(res == null){
			System.warn("Can't convert to vCO Object. Finder returned null for type:" + type + " and dunesId:" + vcObjId);
			System.warn("Check that you have configured VC Plugin to be connected to the right vCenter Server.");
			throw "Can't convert to vCO Object. Check that you have configured VC Plugin to be connected to the right vCenter Server.";
		}
		return res;
	}
	
	
	this.convertToVcObj = function(){
		var element = objToConvert.getRootObject();
		var result = new Array();
		if(this.isList(element)){ //check for list
			if(listIndex != null && listIndex >=0 ){
				result.push(this.convertObject(element[listIndex]));
			}else{
				for (var item of element){
					result.push(this.convertObject(item));
				}
			}
		} else {
			result.push(this.convertObject(element));
		}
		return result;
	}
	
	this.convertToPowerCli = function(obj){
		var vcObjType = System.getObjectType(obj);
		var powerCliType = vcObjType.substring(vcObjType.indexOf(":")+1);
		if(this.converterDefinition.powerCliType){
			powerCliType = this.converterDefinition.powerCliType
		}
		var powerCliId = powerCliType + "-" + obj.id;
		var dunesId = System.getObjectId(obj);
		var serverId = dunesId.substring(0, dunesId.indexOf("/"));
		var vcObjName = obj.name;
		var powerCliGetter = this.converterDefinition.powerCliGetter.replace(new RegExp("{Id}", 'g'), powerCliId).replace(new RegExp("{Server}", 'g'), serverId).replace(new RegExp("{Name}", 'g'), vcObjName);
		System.debug("powerCliGetter bfore->" + powerCliGetter);
		var expressions = powerCliGetter.match(new RegExp("({.*?})", 'g'));
		for (var exp in expressions){
			var expStr = "" + expressions[exp] + "";
			System.debug("expStr->" + expStr);
			var expName = expStr.substring(1, expStr.length -1);
			var re = new RegExp(expStr, 'g');
			System.debug("->" + expName);
			if(expName){
				try{
					var value = eval("(" + "obj." + expName + ")");
					System.debug("value:" + value);
					powerCliGetter = powerCliGetter.replace(re, value);
				}catch(e){
				}
			}
		}
		System.debug("powerCliGetter->" + powerCliGetter);
		return powerCliGetter;
	}
	
	this.convertToPowerCliGetter = function(){
		var result = new Array();
		if(objToConvert instanceof Array){
			for (var obj of objToConvert){
				result.push(this.convertToPowerCli(obj));
			}
		} else {
			result.push(this.convertToPowerCli(objToConvert));
		}
		return result;
	}
	
	this.convert = function(){
		System.debug("convert method started. this.objToConvert->" + objToConvert);
		var type = System.getObjectType(this.objToConvert);
		if(type.equals("Array")){
			type = System.getObjectType(this.objToConvert[0]);
		}
		if(type.indexOf("VC:") == 0){
			return this.convertToPowerCliGetter();
		} else if(type.equals("PowerShell:PowerShellRemotePSObject")){
			return this.convertToVcObj();
		} else {
			throw "Object to convert is neither VC:<Object> nor instance of PowerShellRemotePSObject";
		}
	}
}



}
}
