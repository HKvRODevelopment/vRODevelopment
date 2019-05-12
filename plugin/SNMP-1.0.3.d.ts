/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module java.lang
{
	export interface Number
	{

	}


}
	interface SnmpService
	{

		addQuery(device?: SNMPSnmpDevice, query?: SNMPSnmpQuery): SNMPSnmpQuery;
		createSnmpDeviceV1V2c(address?: String, name?: String, port?: int, community?: String, version?: String): SNMPSnmpDevice;
		createSnmpDeviceV3(address?: String, name?: String, port?: int, user?: String, password?: String): SNMPSnmpDevice;
		createTrigger(device?: SNMPSnmpDevice, oid?: String): Trigger;
		editSnmpDevice(device?: SNMPSnmpDevice, address?: String, name?: String, port?: int, community?: String, user?: String, password?: String, version?: String): SNMPSnmpDevice;
		removeQuery(query?: SNMPSnmpQuery): SNMPSnmpDevice;
		removeSnmpDevice(device?: SNMPSnmpDevice): SNMPSnmpDevice;
		retrievePolicyData(key?: String): SNMPSnmpResult;
		retrieveTriggerData(trigger?: Trigger): SNMPSnmpResult;
		runQuery(query?: SNMPSnmpQuery): SNMPSnmpResult;
		sendTrap(address?: String, port?: int, enterprise?: String, type?: String, oid?: String, value?: String): void;
		snmpGet(device?: SNMPSnmpDevice, oid?: String): SNMPSnmpResult;
		snmpGetBulk(device?: SNMPSnmpDevice, oid?: String, number?: int): SNMPSnmpResult;
		snmpGetNext(device?: SNMPSnmpDevice, oid?: String): SNMPSnmpResult;
		updateQuery(query?: SNMPSnmpQuery, type?: String, oid?: String, name?: String): SNMPSnmpQuery;
	}

	declare const SnmpService: SnmpService;

	interface SNMPSnmpDevice
	{
		address: String;
		credentials: String;
		name: String;
		port: int;
		queries: SNMPSnmpQuery[];
		version: String;

		get(oid?: String): SNMPSnmpResult;
		getBulk(oid?: String, number?: int): SNMPSnmpResult;
		getNext(oid?: String): SNMPSnmpResult;
		validateAndSetAddress(address?: String): void;
		validateAndSetName(name?: String): void;
		validateAnsSetPort(port?: int): void;
	}

	interface SNMPSnmpDeviceConstructor {
		new(value?:any): SNMPSnmpDevice;
		readonly prototype: SNMPSnmpDevice;
	}

	declare const SNMPSnmpDevice: SNMPSnmpDeviceConstructor;

	interface SNMPSnmpQuery
	{
		displayName: String;
		name: String;
		oid: String;
		type: String;

		validateAndSetName(name?: String): void;
		validateAndSetOid(oid?: String): void;
		validateAndSetType(type?: String): void;
	}

	interface SNMPSnmpQueryConstructor {
		new(value?:any): SNMPSnmpQuery;
		readonly prototype: SNMPSnmpQuery;
	}

	declare const SNMPSnmpQuery: SNMPSnmpQueryConstructor;

	interface SNMPSnmpResult
	{
		arrayValue: SNMPSnmpResult[];
		enterprise: String;
		numberValue: java.lang.Number;
		oid: String;
		snmpType: String;
		stringValue: String;
		type: String;

	}

	interface SNMPSnmpResultConstructor {
		new(value?:any): SNMPSnmpResult;
		readonly prototype: SNMPSnmpResult;
	}

	declare const SNMPSnmpResult: SNMPSnmpResultConstructor;

	interface SNMPTrapHost
	{
		port: int;

		changePort(port?: int): void;
		start(): void;
		stop(): void;
	}

	declare const SNMPTrapHost: SNMPTrapHost;

    
    // Finder objects.
declare namespace SNMP {
	interface SnmpDevice extends SNMPSnmpDevice
	{
		address: any;
		credentials: any;
		name: any;
		port: any;
		queries: any;
		version: any;

		SNMPSnmpQuery(): SnmpQuery;
	}

	interface SnmpDeviceConstructor {
		new(value?:any): SnmpDevice;
		readonly prototype: SnmpDevice;
	}

	const SnmpDevice: SnmpDeviceConstructor;

	interface SnmpQuery extends SNMPSnmpQuery
	{
		displayName: any;
		name: any;
		oid: any;
		type: any;

	}

	interface SnmpQueryConstructor {
		new(value?:any): SnmpQuery;
		readonly prototype: SnmpQuery;
	}

	const SnmpQuery: SnmpQueryConstructor;

	interface SnmpResult extends SNMPSnmpResult
	{
		arrayValue: any;
		enterprise: any;
		numberValue: any;
		oid: any;
		snmpType: any;
		stringValue: any;
		type: any;

	}

	interface SnmpResultConstructor {
		new(value?:any): SnmpResult;
		readonly prototype: SnmpResult;
	}

	const SnmpResult: SnmpResultConstructor;

	interface TrapHost extends SNMPTrapHost
	{
		port: any;

	}

	interface TrapHostConstructor {
		new(value?:any): TrapHost;
		readonly prototype: TrapHost;
	}

	const TrapHost: TrapHostConstructor;

    }    
