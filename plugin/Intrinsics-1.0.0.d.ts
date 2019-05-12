

  
    // Regular classes.  
	interface Action
	{
		readonly description: String;
		readonly module: Module;
		readonly name: String;
		readonly parameters: Parameter[];
		readonly returnType: String;
		readonly script: String;
		readonly version: String;
		readonly versionHistoryItems: VersionHistoryItem[];

	}

	interface ActionConstructor {
		new(value?:any): Action;
		readonly prototype: Action;
	}

	declare const Action: ActionConstructor;

	interface ActionResult
	{

		cancel(mayInterruptIfRunning?: boolean): boolean;
		getResult(): Object;
		isDone(): boolean;
	}

	interface ActionResultConstructor {
		new(value?:any): ActionResult;
		readonly prototype: ActionResult;
	}

	declare const ActionResult: ActionResultConstructor;

	interface Attribute
	{
		readonly description: String;
		readonly name: String;
		readonly type: String;
		readonly value: Object;

	}

	interface AttributeConstructor {
		new(value?:any): Attribute;
		readonly prototype: Attribute;
	}

	declare const Attribute: AttributeConstructor;

	interface AuthorizationElement
	{
		readonly description: String;
		ldapElement: LdapGroup;
		readonly ldapElementDn: String;
		name: String;
		readonly references: AuthorizationReference[];
		readonly status: String;

		addReference(object?: Object, relation?: Object): AuthorizationReference;
		removeAllReferences(): void;
		removeReference(jsObject?: Object, relation?: Object): void;
	}

	interface AuthorizationElementConstructor {
		new(value?:any): AuthorizationElement;
		readonly prototype: AuthorizationElement;
	}

	declare const AuthorizationElement: AuthorizationElementConstructor;

	interface AuthorizationReference
	{
		readonly authorizedObjects: Object;
		readonly relationName: String;
		readonly returnType: String;
		readonly stringRepresentation: String;
		readonly type: String;
		readonly value: Object;

	}

	interface AuthorizationReferenceConstructor {
		new(value?:any): AuthorizationReference;
		readonly prototype: AuthorizationReference;
	}

	declare const AuthorizationReference: AuthorizationReferenceConstructor;

declare module ch.dunes.scripting.jsmodel
{
	export interface JSPolicy
	{

	}


}
declare module ch.dunes.scripting.jsmodel
{
	export interface JSProperties
	{

	}


}
declare module ch.dunes.scripting.jsmodel
{
	export interface JSUrl
	{

	}


}
declare module ch.dunes.scripting.jsmodel
{
	export interface JSWorkflow
	{

	}


}
declare module ch.dunes.scripting.jsmodel
{
	export interface JSWorkflowCategory
	{

	}


}
declare module ch.dunes.scripting.jsmodel
{
	export interface JSWorkflowItem
	{

	}


}
	interface char
	{

	}

	interface charConstructor {
		new(value?:any): char;
		readonly prototype: char;
	}

	declare const char: charConstructor;

	declare class Command
	{
		input: String;
		readonly output: String;
		readonly result: Number;

		constructor(cmd?: Object);
		execute(wait?: Object): Number;
		executeAndLog(filename?: String): Number;
	}

	interface ConfigurationElement
	{
		readonly attributes: Attribute[];
		readonly configurationElementCategory: Object;
		readonly description: String;
		readonly name: String;
		readonly version: String;
		readonly versionHistoryItems: VersionHistoryItem[];

		getAttributeWithKey(key?: String): Attribute;
		reload(): void;
		removeAttributeWithKey(key?: String): void;
		setAttributeWithKey(key?: String, value?: Object): void;
	}

	interface ConfigurationElementConstructor {
		new(value?:any): ConfigurationElement;
		readonly prototype: ConfigurationElement;
	}

	declare const ConfigurationElement: ConfigurationElementConstructor;

	interface ConfigurationElementCategory
	{
		readonly allConfigurationElements: ConfigurationElement[];
		readonly configurationElements: ConfigurationElement[];
		readonly description: String;
		readonly name: String;
		readonly parent: ConfigurationElementCategory;
		readonly path: String;
		readonly subCategories: ConfigurationElementCategory[];

	}

	interface ConfigurationElementCategoryConstructor {
		new(value?:any): ConfigurationElementCategory;
		readonly prototype: ConfigurationElementCategory;
	}

	declare const ConfigurationElementCategory: ConfigurationElementCategoryConstructor;

	declare class Credential
	{
		readonly password: String;
		readonly username: String;

		constructor(username?: String, password?: String);
		checkPassword(otherPassword?: String): boolean;
	}

	interface Debug
	{

		dumpVariables(): void;
		unwatch(variable?: String): void;
		watch(variable?: String): void;
	}

	declare const Debug: Debug;

	interface EncryptedString extends String
	{

	}

	declare const EncryptedString: EncryptedString;

	declare class Enumeration
	{
		readonly hasNext: boolean;
		readonly next: Object;

		constructor(value?: Object);
	}

	interface Event
	{
		readonly source: Object;
		readonly when: Number;

		consume(owner?: String): void;
	}

	interface EventConstructor {
		new(value?:any): Event;
		readonly prototype: Event;
	}

	declare const Event: EventConstructor;

	interface EventCustom
	{

	}

	declare const EventCustom: EventCustom;

	interface EventGauge
	{
		readonly device: String;
		readonly perfKey: String;
		readonly source: Object;
		readonly value: Number;
		readonly when: Number;

		consume(owner?: String): void;
	}

	interface EventGaugeConstructor {
		new(value?:any): EventGauge;
		readonly prototype: EventGauge;
	}

	declare const EventGauge: EventGaugeConstructor;

	interface EventSchedule
	{
		readonly lastExec: Number;
		readonly lastExecutionDate: Object;
		readonly nextExec: Number;
		readonly nextExecutionDate: Object;
		readonly source: Object;
		readonly when: Number;

		consume(owner?: String): void;
	}

	interface EventScheduleConstructor {
		new(value?:any): EventSchedule;
		readonly prototype: EventSchedule;
	}

	declare const EventSchedule: EventScheduleConstructor;

	interface ExecutionContext
	{

		contains(name?: String): boolean;
		getParameter(name?: String): Object;
		parameterNames(name?: String): Array;
	}

	interface ExecutionContextConstructor {
		new(value?:any): ExecutionContext;
		readonly prototype: ExecutionContext;
	}

	declare const ExecutionContext: ExecutionContextConstructor;

	declare class File
	{
		readonly directory: String;
		readonly exists: boolean;
		readonly extension: String;
		hostname: String;
		readonly isDir: boolean;
		readonly isLocal: boolean;
		readonly length: Number;
		readonly name: String;
		path: String;

		constructor(file?: String);
		canRead(): boolean;
		canWrite(): boolean;
		createDirectory(): void;
		createFile(): void;
		deleteFile(): void;
		list(extension?: Object): String[];
		renameTo(destPathName?: String): boolean;
		write(content?: String): void;
	}

	interface FileHelper
	{

	}

	interface FileHelperConstructor {
		new(value?:any): FileHelper;
		readonly prototype: FileHelper;
	}

	declare const FileHelper: FileHelperConstructor;

	declare class FileReader
	{
		readonly exists: boolean;

		constructor(file?: String);
		open(): void;
		readAll(): String;
		readLine(): String;
	}

	declare class FileWriter
	{
		readonly exists: boolean;
		lineEndType: Number;

		constructor(file?: String);
		clean(): void;
		close(): void;
		open(): void;
		write(value?: String): void;
		writeLine(value?: String): void;
	}

	interface float
	{

	}

	declare const float: float;

declare module java.util
{
	export interface Date
	{

	}


}
	interface LdapGroup
	{
		readonly commonName: String;
		readonly displayInfo: String;
		readonly displayName: String;
		readonly dn: String;
		readonly emailAddress: String;
		readonly parentGroups: LdapGroup[];
		readonly subGroups: LdapGroup[];
		readonly users: LdapUser[];

	}

	interface LdapGroupConstructor {
		new(value?:any): LdapGroup;
		readonly prototype: LdapGroup;
	}

	declare const LdapGroup: LdapGroupConstructor;

	interface LdapUser
	{
		readonly allGroups: LdapGroup[];
		readonly commonName: String;
		readonly displayInfo: String;
		readonly displayName: String;
		readonly dn: String;
		readonly emailAddress: String;
		readonly groups: LdapGroup[];
		readonly loginName: String;
		readonly userPrincipalName: String;

		isMemberOfGroup(ldapGroup?: Object): boolean;
	}

	interface LdapUserConstructor {
		new(value?:any): LdapUser;
		readonly prototype: LdapUser;
	}

	declare const LdapUser: LdapUserConstructor;

	interface LockingSystem
	{

		lock(lockId?: String, owner?: String): boolean;
		lockAndWait(lockId?: String, owner?: String): void;
		retrieveAll(): String[];
		unlock(lockId?: String, owner?: String): void;
		unlockAll(): void;
	}

	declare const LockingSystem: LockingSystem;

	interface LogEvent
	{
		readonly id: String;
		readonly logTimeStamp: java.util.Date;
		readonly longDescription: String;
		readonly originatorId: String;
		readonly originatorUri: String;
		readonly originatorUserName: String;
		readonly severity: Number;
		readonly shortDescription: String;

	}

	interface LogEventConstructor {
		new(value?:any): LogEvent;
		readonly prototype: LogEvent;
	}

	declare const LogEvent: LogEventConstructor;

	declare class LogFileWriter
	{
		readonly exists: boolean;
		lineEndType: Number;

		constructor(file?: String);
		clean(): void;
		close(): void;
		open(): void;
		write(value?: String): void;
		writeLine(value?: String): void;
	}

	declare class LogQuery
	{
		fetchLimit: Number;
		fromDate: java.util.Date;
		originatorId: String;
		severityThreshold: Number;
		targetUri: String;
		toDate: java.util.Date;

		constructor();
	}

	declare class MimeAttachment
	{
		content: String;
		mimeType: String;
		name: String;

		constructor(arg?: Object);
		write(directory?: Object, filename?: Object): void;
	}

	interface Module
	{
		readonly actions: Action[];
		readonly description: String;
		readonly name: String;

	}

	interface ModuleConstructor {
		new(value?:any): Module;
		readonly prototype: Module;
	}

	declare const Module: ModuleConstructor;

	interface NotFound
	{
		readonly originalStringRepresentation: String;
		readonly originalType: String;

	}

	interface NotFoundConstructor {
		new(value?:any): NotFound;
		readonly prototype: NotFound;
	}

	declare const NotFound: NotFoundConstructor;

	interface Package
	{
		readonly actions: Action[];
		readonly configurationElements: ConfigurationElement[];
		readonly description: String;
		readonly id: String;
		readonly name: String;
		readonly policyTemplates: PolicyTemplate[];
		readonly resourceElements: ResourceElement[];
		readonly version: String;
		readonly workflows: Workflow[];

		remove(): void;
	}

	interface PackageConstructor {
		new(value?:any): Package;
		readonly prototype: Package;
	}

	declare const Package: PackageConstructor;

	interface Parameter
	{
		readonly description: String;
		readonly name: String;
		readonly type: String;

	}

	interface ParameterConstructor {
		new(value?:any): Parameter;
		readonly prototype: Parameter;
	}

	declare const Parameter: ParameterConstructor;

	interface Path extends String
	{

	}

	declare const Path: Path;

	interface PluginModuleDescription
	{
		readonly description: String;
		readonly name: String;
		readonly types: Object[];
		readonly version: String;

	}

	interface PluginModuleDescriptionConstructor {
		new(value?:any): PluginModuleDescription;
		readonly prototype: PluginModuleDescription;
	}

	declare const PluginModuleDescription: PluginModuleDescriptionConstructor;

	interface PluginTypeDescription
	{
		readonly description: String;
		readonly kind: String;
		readonly name: String;
		readonly type: String;

	}

	interface PluginTypeDescriptionConstructor {
		new(value?:any): PluginTypeDescription;
		readonly prototype: PluginTypeDescription;
	}

	declare const PluginTypeDescription: PluginTypeDescriptionConstructor;

	interface Policy
	{
		autostart: boolean;
		credential: Object;
		readonly currentVersion: String;
		readonly description: String;
		readonly logEvents: LogEvent[];
		readonly name: String;
		readonly owner: Object;
		readonly status: String;
		readonly taggedObjects: Object[];
		readonly tags: String[];

		exit(reason?: String): void;
		forTag(value?: String): Object;
		getEventsByTag(): Properties[];
		getObjectByTag(value?: String): Object;
		remove(): void;
		start(): void;
		stop(reason?: String): void;
	}

	interface PolicyConstructor {
		new(value?:any): Policy;
		readonly prototype: Policy;
	}

	declare const Policy: PolicyConstructor;

	interface PolicyTemplate
	{
		readonly currentVersion: String;
		readonly description: String;
		readonly id: String;
		readonly name: String;
		readonly policyTemplateCategory: Object;
		readonly version: String;
		readonly versionHistoryItems: VersionHistoryItem[];

		apply(name?: String, properties?: Object): ch.dunes.scripting.jsmodel.JSPolicy;
		forTag(value?: String): Object;
		getObjectByTag(value?: String): Object;
	}

	interface PolicyTemplateConstructor {
		new(value?:any): PolicyTemplate;
		readonly prototype: PolicyTemplate;
	}

	declare const PolicyTemplate: PolicyTemplateConstructor;

	interface PolicyTemplateCategory
	{
		readonly allPolicyTemplates: PolicyTemplate[];
		readonly description: String;
		readonly name: String;
		readonly parent: PolicyTemplateCategory;
		readonly path: String;
		readonly policyTemplates: PolicyTemplate[];
		readonly subCategories: PolicyTemplateCategory[];

	}

	interface PolicyTemplateCategoryConstructor {
		new(value?:any): PolicyTemplateCategory;
		readonly prototype: PolicyTemplateCategory;
	}

	declare const PolicyTemplateCategory: PolicyTemplateCategoryConstructor;

	declare class Properties
	{
		readonly keys: String[];

		constructor(value?: Object);
		get(key?: String): Object;
		load(input?: Object): void;
		put(key?: String, value?: Object): void;
		remove(key?: String): Object;
	}

	interface QueryResult
	{
		readonly elements: Object;
		readonly partial: boolean;
		readonly totalCount: Number;

	}

	interface QueryResultConstructor {
		new(value?:any): QueryResult;
		readonly prototype: QueryResult;
	}

	declare const QueryResult: QueryResultConstructor;

	interface ResourceElement
	{
		readonly contentSize: Number;
		description: String;
		mimeType: String;
		name: String;
		readonly version: String;
		readonly versionHistoryItems: VersionHistoryItem[];

		getContentAsMimeAttachment(): MimeAttachment;
		getResourceElementCategory(): ResourceElementCategory;
		reload(): void;
		setContentFromFile(fileName?: String, mimeType?: Object): void;
		setContentFromMimeAttachment(mimeAttachment?: Object): void;
		writeContentToFile(fileName?: String): void;
	}

	interface ResourceElementConstructor {
		new(value?:any): ResourceElement;
		readonly prototype: ResourceElement;
	}

	declare const ResourceElement: ResourceElementConstructor;

	interface ResourceElementCategory
	{
		readonly allResourceElements: ResourceElement[];
		readonly description: String;
		readonly name: String;
		readonly parent: ResourceElementCategory;
		readonly path: String;
		readonly resourceElements: ResourceElement[];
		readonly subCategories: ResourceElementCategory[];

	}

	interface ResourceElementCategoryConstructor {
		new(value?:any): ResourceElementCategory;
		readonly prototype: ResourceElementCategory;
	}

	declare const ResourceElementCategory: ResourceElementCategoryConstructor;

	declare class SDKObject
	{
		readonly id: String;
		readonly type: String;

		constructor(type?: Object, id?: Object);
	}

	interface SecureString extends String
	{

	}

	declare const SecureString: SecureString;

	interface Server
	{

		createAuthorizationElement(name?: String, ldapElement?: Object, description?: String): AuthorizationElement;
		createConfigurationElement(category?: Object, name?: String): ConfigurationElement;
		createResourceElement(category?: Object, name?: String, fileNameOrMime?: Object, mimeType?: String): ResourceElement;
		error(text?: String, info?: String): void;
		fetchLogEvents(query?: LogQuery): LogEvent[];
		findAllForType(type?: String, query?: String): Object[];
		findForType(type?: String, id?: String): Object;
		findGlobalTagsForObject(Properties?: Object): Properties;
		findTagsForObject(Properties?: Object): Properties;
		findTagsInUse(): String[];
		fromStringRepresentation(rep?: StringRepresentation): Object;
		fromUri(uri?: String): Object;
		getAllConfigurationElementCategories(): ConfigurationElementCategory[];
		getAllDescriptionsForType(type?: String): String[];
		getAllDisplayNamesForType(type?: String): String[];
		getAllNamesForType(type?: String): String[];
		getAllPluginInfo(): PluginModuleDescription[];
		getAllPluginTypes(): Object[];
		getAllPolicyTemplateCategories(): PolicyTemplateCategory[];
		getAllResourceElementCategories(): ResourceElementCategory[];
		getAllWorkflowCategories(): WorkflowCategory[];
		getAuthorizationElementForName(name?: String): AuthorizationElement;
		getAuthorizationElementsForLdapElement(ldapElement?: Object): AuthorizationElement[];
		getConfigurationElementCategoryWithPath(path?: String): ConfigurationElementCategory;
		getCredential(): Credential;
		getCurrentLdapUser(): LdapUser;
		getCustomProperty(target?: Object, key?: String): Object;
		getCustomPropertyKeys(target?: Object): String[];
		getLdapElement(dn?: String): Object;
		getObjectsURIWithCustomPropertyKey(key?: String): String[];
		getObjectsWithCustomPropertyKey(key?: String): Object[];
		getPackageWithName(name?: String): Package;
		getPluginTypeInfo(type?: String): PluginTypeDescription;
		getPolicyTemplateCategoryWithPath(path?: String): PolicyTemplateCategory;
		getResourceElementCategoryWithPath(path?: String): ResourceElementCategory;
		getRunningUser(): String;
		getSignatureFingerPrint(element?: Object): String;
		getSignatureOwner(element?: Object): String;
		getWorkflowCategoryWithPath(path?: String): WorkflowCategory;
		getWorkflowTokenState(token_id?: String): String;
		getWorkflowWithId(id?: String): Workflow;
		isValidLdapCredential(credential?: Credential): boolean;
		log(text?: String, info?: String): void;
		query(type?: String, queryExp?: String, maxCount?: Number): Object[];
		queryByTags(tagQuery?: Object, type?: String): Object[];
		removeAccessRights(owner?: Object, user?: Object): void;
		removeAllCustomPropertiesForObject(target?: Object): void;
		removeAllCustomPropertiesForType(type?: String): void;
		removeAllCustomPropertiesForTypeAndKey(type?: String, key?: String): void;
		removeAuthorizationElement(authorizationElement?: AuthorizationElement): void;
		removeCustomProperty(target?: Object, key?: String): void;
		removeResourceElement(resourceElement?: ResourceElement): void;
		searchLdapGroups(query?: String, limit?: Number): LdapGroup[];
		searchLdapUsers(query?: String, limit?: Number): LdapUser[];
		setAccessRights(owner?: Object, user?: Object, rights?: String): void;
		setCustomProperty(target?: Object, key?: String, value?: Object): void;
		tag(object?: Object, tag?: String, value?: String): void;
		tagGlobally(object?: Object, tag?: String, value?: String): void;
		toStringRepresentation(object?: Object): StringRepresentation;
		toUri(object?: Object): String;
		untag(object?: Object, tags?: String[]): void;
		untagGlobally(object?: Object, tags?: String[]): void;
		warn(text?: String, info?: String): void;
	}

	declare const Server: Server;

	declare class StringRepresentation
	{
		readonly objectValue: Object;
		readonly stringValue: String;
		readonly type: String;

		constructor(repOrType?: Object, stringValue?: Object);
		toParam(): String;
	}

	interface System
	{

		appendToPath(rootPath?: Object, toAdd?: String): String;
		compareVersionNumber(v1?: String, v2?: String): Number;
		createTempFile(suffix?: String): File;
		customEventUrl(eventName?: String, secure?: boolean): URL;
		customEventUrlforServer(eventName?: String, host?: String, port?: String, secure?: boolean): URL;
		debug(text?: String): void;
		decimalToHex(value?: Number): String;
		error(text?: String): void;
		extractDirectory(fullPath?: Object): String;
		extractFileName(fullPath?: Object): String;
		extractFileNameExtension(fullPath?: Object): String;
		extractFileNameWithoutExtension(fullPath?: Object): String;
		filterAuthorized(obj?: Object): Object;
		formatBinaryValue(value?: Number): String;
		formatDate(aDate?: Date, pattern?: String): String;
		formatDuration(milisecond?: Number, showMili?: boolean, showZero?: boolean): String;
		formatNumber(aNumber?: Number, pattern?: String): String;
		getAllModules(): Module[];
		getContext(): ExecutionContext;
		getCurrentTime(): Number;
		getDate(inputString?: String, refDate?: Date): Date;
		getDateFromFormat(date?: Date, pattern?: String): Date;
		getModule(name?: String): Module;
		getObjectClassName(obj?: Object): String;
		getObjectId(obj?: Object): String;
		getObjectPluginName(obj?: Object): String;
		getObjectType(obj?: Object): String;
		getOsName(): String;
		getTempDirectory(): String;
		hexToDecimal(value?: String): Number;
		isHostReachable(hostOrIp?: String, timeout?: Number): boolean;
		isNotFound(obj?: Object): boolean;
		log(text?: String): void;
		nextUUID(): String;
		resolveHostName(hostName?: String): String;
		resolveIpAddress(ipAddress?: String): String;
		sendCustomEvent(eventKey?: String): void;
		setLogMarker(logMarker?: String): void;
		sleep(ms?: Number): boolean;
		stdout(text?: String): void;
		waitCustomEventUntil(text?: String, text2?: String, endDate?: Date): EventCustom;
		waitUntil(waitDate?: Date, milli?: Number): boolean;
		warn(text?: String): void;
	}

	declare const System: System;

	declare class TagQuery
	{

		constructor();
		hasGlobalTag(tag?: String, value?: String): void;
		hasTag(tag?: String, value?: String): void;
	}

	interface Task
	{
		readonly error: String;
		executionDate: Date;
		readonly executions: WorkflowToken[];
		readonly id: String;
		readonly isRecurrent: boolean;
		readonly name: String;
		readonly operation: String;
		parameters: Properties;
		readonly percentCompleted: float;
		restartInPast: boolean;
		readonly state: String;
		readonly workflow: Workflow;

		addParameter(key?: String, value?: Object): void;
		cancel(): void;
		resume(): void;
		suspend(): void;
	}

	interface TaskConstructor {
		new(value?:any): Task;
		readonly prototype: Task;
	}

	declare const Task: TaskConstructor;

	declare class URL
	{
		contentType: String;
		datas: String;
		readonly host: String;
		readonly port: Number;
		requestType: String;
		readonly result: String;
		readonly url: String;

		constructor(url?: Object);
		addParameter(key?: Object, value?: Object): void;
		addPath(value?: Object): void;
		escapeHost(ipAddress?: String): String;
		getContent(): String;
		getHostnameOrIPPatternStr(): String;
		getIPAddressPatternStr(): String;
		getIPv4AddressPatternStr(): String;
		getIPv6AddressPatternStr(): String;
		isValidHostname(hostname?: String): boolean;
		isValidHostnameOrIPAddress(hostOrIP?: String): boolean;
		isValidIPAddress(ipAddress?: String): boolean;
		isValidIPv4Address(ipAddress?: String): boolean;
		isValidIPv6Address(ipAddress?: String): boolean;
		post(): String;
		postContent(content?: Object): String;
		tnamePatternStr(): String;
		unescapeHost(ipAddress?: String): String;
	}

	interface VersionHistoryItem
	{
		readonly comment: String;
		readonly date: Object;
		readonly user: String;
		readonly version: String;

	}

	interface VersionHistoryItemConstructor {
		new(value?:any): VersionHistoryItem;
		readonly prototype: VersionHistoryItem;
	}

	declare const VersionHistoryItem: VersionHistoryItemConstructor;

	interface Workflow
	{
		readonly attributes: Attribute[];
		readonly description: String;
		readonly executions: WorkflowToken[];
		readonly firstItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly inParameters: Parameter[];
		readonly items: WorkflowItem[];
		readonly logEvents: LogEvent[];
		readonly name: String;
		readonly numberOfItem: Number;
		readonly outParameters: Parameter[];
		readonly parameterInfos: Properties;
		readonly version: String;
		readonly versionHistoryItems: VersionHistoryItem[];
		readonly workflowCategory: ch.dunes.scripting.jsmodel.JSWorkflowCategory;

		execute(properties?: Object, uname?: Object, pwd?: String): WorkflowToken;
		getExecutionUrl(secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		getScheduleUrl(secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		getWebviewExecutionUrl(inWebviewUrlFolder?: Object, inPage?: Object, secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		getWebviewScheduleUrl(inWebviewUrlFolder?: Object, inPage?: Object, secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		saveSchemaImageToFile(file?: String): void;
		schedule(properties?: Object, startDate?: Object, uname?: Object, pwd?: String): Task;
		scheduleRecurrently(properties?: Object, recurrencePattern?: Object, recurrenceCycle?: Object, startDate?: Object, endDate?: Object, uname?: Object, pwd?: String): Task;
	}

	interface WorkflowConstructor {
		new(value?:any): Workflow;
		readonly prototype: Workflow;
	}

	declare const Workflow: WorkflowConstructor;

	interface WorkflowCategory
	{
		readonly allWorkflows: Workflow[];
		readonly description: String;
		readonly name: String;
		readonly parent: WorkflowCategory;
		readonly path: String;
		readonly subCategories: WorkflowCategory[];
		readonly workflows: Workflow[];

	}

	interface WorkflowCategoryConstructor {
		new(value?:any): WorkflowCategory;
		readonly prototype: WorkflowCategory;
	}

	declare const WorkflowCategory: WorkflowCategoryConstructor;

	interface WorkflowCustomConditionItem
	{
		readonly description: String;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly nextItemFalse: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly nextItemTrue: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly script: String;

	}

	interface WorkflowCustomConditionItemConstructor {
		new(value?:any): WorkflowCustomConditionItem;
		readonly prototype: WorkflowCustomConditionItem;
	}

	declare const WorkflowCustomConditionItem: WorkflowCustomConditionItemConstructor;

	interface WorkflowGenericConditionItem
	{
		readonly description: String;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly nextItemFalse: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly nextItemTrue: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly script: String;

	}

	interface WorkflowGenericConditionItemConstructor {
		new(value?:any): WorkflowGenericConditionItem;
		readonly prototype: WorkflowGenericConditionItem;
	}

	declare const WorkflowGenericConditionItem: WorkflowGenericConditionItemConstructor;

	interface WorkflowInput
	{
		readonly isStillValid: boolean;
		readonly name: String;
		readonly startDate: java.util.Date;
		readonly startDateAsString: String;
		readonly state: String;

		getAnswerUrl(secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		getInteractionUrl(secure?: Object, inHost?: Object, inPort?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		getWebviewAnswerUrl(inWebviewUrlFolder?: Object, inPage?: Object, secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
	}

	interface WorkflowInputConstructor {
		new(value?:any): WorkflowInput;
		readonly prototype: WorkflowInput;
	}

	declare const WorkflowInput: WorkflowInputConstructor;

	interface WorkflowInputItem
	{
		readonly description: String;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;

	}

	interface WorkflowInputItemConstructor {
		new(value?:any): WorkflowInputItem;
		readonly prototype: WorkflowInputItem;
	}

	declare const WorkflowInputItem: WorkflowInputItemConstructor;

	interface WorkflowItem
	{
		readonly description: String;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;

	}

	interface WorkflowItemConstructor {
		new(value?:any): WorkflowItem;
		readonly prototype: WorkflowItem;
	}

	declare const WorkflowItem: WorkflowItemConstructor;

	interface WorkflowItemEnd
	{
		readonly description: String;
		readonly name: String;

	}

	interface WorkflowItemEndConstructor {
		new(value?:any): WorkflowItemEnd;
		readonly prototype: WorkflowItemEnd;
	}

	declare const WorkflowItemEnd: WorkflowItemEndConstructor;

	interface WorkflowItemWaitingEvent
	{
		readonly description: String;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;

	}

	interface WorkflowItemWaitingEventConstructor {
		new(value?:any): WorkflowItemWaitingEvent;
		readonly prototype: WorkflowItemWaitingEvent;
	}

	declare const WorkflowItemWaitingEvent: WorkflowItemWaitingEventConstructor;

	interface WorkflowItemWaitingTimer
	{
		readonly description: String;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;

	}

	interface WorkflowItemWaitingTimerConstructor {
		new(value?:any): WorkflowItemWaitingTimer;
		readonly prototype: WorkflowItemWaitingTimer;
	}

	declare const WorkflowItemWaitingTimer: WorkflowItemWaitingTimerConstructor;

	interface WorkflowLinkItem
	{
		readonly description: String;
		readonly linkedWorkflow: ch.dunes.scripting.jsmodel.JSWorkflow;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;

	}

	interface WorkflowLinkItemConstructor {
		new(value?:any): WorkflowLinkItem;
		readonly prototype: WorkflowLinkItem;
	}

	declare const WorkflowLinkItem: WorkflowLinkItemConstructor;

	interface WorkflowMultipleCallItem
	{
		readonly description: String;
		readonly linkedWorkflows: ch.dunes.scripting.jsmodel.JSWorkflow[];
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;

	}

	interface WorkflowMultipleCallItemConstructor {
		new(value?:any): WorkflowMultipleCallItem;
		readonly prototype: WorkflowMultipleCallItem;
	}

	declare const WorkflowMultipleCallItem: WorkflowMultipleCallItemConstructor;

	interface WorkflowTaskItem
	{
		readonly description: String;
		readonly isActionCall: boolean;
		readonly isStartWorkflowCall: boolean;
		readonly linkedWorkflow: ch.dunes.scripting.jsmodel.JSWorkflow;
		readonly name: String;
		readonly nextItem: ch.dunes.scripting.jsmodel.JSWorkflowItem;
		readonly script: String;
		readonly usedActions: Object;

	}

	interface WorkflowTaskItemConstructor {
		new(value?:any): WorkflowTaskItem;
		readonly prototype: WorkflowTaskItem;
	}

	declare const WorkflowTaskItem: WorkflowTaskItemConstructor;

	interface WorkflowToken
	{
		readonly attributesStack: Attribute[];
		readonly businessState: String;
		readonly currentWorkflow: Object;
		readonly endDate: String;
		readonly endDateAsDate: Object;
		readonly exception: String;
		readonly id: String;
		readonly isStillValid: boolean;
		readonly logEvents: LogEvent[];
		readonly name: String;
		readonly rootWorkflow: Object;
		readonly startDate: String;
		readonly startDateAsDate: Object;
		readonly state: String;
		readonly workflowInputId: String;

		cancel(): void;
		changeCredential(credential?: Object): void;
		getAnswerUrl(secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		getAttributes(): ch.dunes.scripting.jsmodel.JSProperties;
		getInputParameters(): ch.dunes.scripting.jsmodel.JSProperties;
		getInteractionUrl(secure?: Object, inHost?: Object, inPort?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		getOutputParameters(): ch.dunes.scripting.jsmodel.JSProperties;
		getWebviewAnswerUrl(inWebviewUrlFolder?: Object, inPage?: Object, secure?: Object, inAutologon?: Object, inHost?: Object, inPort?: Object, inUrl?: Object): ch.dunes.scripting.jsmodel.JSUrl;
		saveSchemaImageToFile(file?: String): void;
	}

	interface WorkflowTokenConstructor {
		new(value?:any): WorkflowToken;
		readonly prototype: WorkflowToken;
	}

	declare const WorkflowToken: WorkflowTokenConstructor;

	declare class ZipWriter
	{

		constructor(file?: String);
		addContent(entryName?: Object, content?: Object, encoding?: Object): void;
		addMimeAttachment(mimeAttachment?: Object): void;
		clean(): void;
		writeZip(): void;
	}

    
            
/// These definitions are here to provide:
/// - Basic ECMAScript definitions as implemented in Rhino.
/// - Some types that reflect the Java base types.


/// <reference no-default-lib="true"/>


/////////////////////////////
/// ECMAScript APIs
/////////////////////////////

declare const NaN: number;
declare const Infinity: number;

/**
  * Evaluates JavaScript code and executes it.
  * @param x A String value that contains valid JavaScript code.
  */
declare function eval(x: string): any;

/**
  * Converts A string to an integer.
  * @param s A string to convert into a number.
  * @param radix A value between 2 and 36 that specifies the base of the number in numString.
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */
declare function parseInt(s: string, radix?: number): number;

/**
  * Converts a string to a floating-point number.
  * @param string A string that contains a floating-point number.
  */
declare function parseFloat(string: string): number;

/**
  * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
  * @param number A numeric value.
  */
declare function isNaN(number: number): boolean;

/**
  * Determines whether a supplied number is finite.
  * @param number Any numeric value.
  */
declare function isFinite(number: number): boolean;

/**
  * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
  * @param encodedURI A value representing an encoded URI.
  */
declare function decodeURI(encodedURI: string): string;

/**
  * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  * @param encodedURIComponent A value representing an encoded URI component.
  */
declare function decodeURIComponent(encodedURIComponent: string): string;

/**
  * Encodes a text string as a valid Uniform Resource Identifier (URI)
  * @param uri A value representing an encoded URI.
  */
declare function encodeURI(uri: string): string;

/**
  * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  * @param uriComponent A value representing an encoded URI component.
  */
declare function encodeURIComponent(uriComponent: string): string;

/**
  * Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.
  * @param string A string value
  */
declare function escape(string: string): string;

/**
  * Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.
  * @param string A string value
  */
declare function unescape(string: string): string;

declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}

interface PropertyDescriptorMap {
    [s: string]: PropertyDescriptor;
}

interface Object {
    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
    constructor: Function;

    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns a date converted to a string using the current locale. */
    toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
      * Determines whether an object has a property with the specified name.
      * @param v A property name.
      */
    hasOwnProperty(v: PropertyKey): boolean;

    /**
      * Determines whether an object exists in another object's prototype chain.
      * @param v Another object whose prototype chain is to be checked.
      */
    isPrototypeOf(v: Object): boolean;

    /**
      * Determines whether a specified property is enumerable.
      * @param v A property name.
      */
    propertyIsEnumerable(v: PropertyKey): boolean;
}

interface ObjectConstructor {
    new(value?: any): Object;
    (): any;
    (value: any): any;

    /** A reference to the prototype for a class of objects. */
    readonly prototype: Object;

    /**
      * Returns the prototype of an object.
      * @param o The object that references the prototype.
      */
    getPrototypeOf(o: any): any;

    /**
      * Gets the own property descriptor of the specified object.
      * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
      * @param o Object that contains the property.
      * @param p Name of the property.
    */
    getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;

    /**
      * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
      * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
      * @param o Object that contains the own properties.
      */
    getOwnPropertyNames(o: any): string[];

    /**
      * Creates an object that has the specified prototype or that has null prototype.
      * @param o Object to use as a prototype. May be null.
      */
    create(o: object | null): any;

    /**
      * Creates an object that has the specified prototype, and that optionally contains specified properties.
      * @param o Object to use as a prototype. May be null
      * @param properties JavaScript object that contains one or more property descriptors.
      */
    create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;

    /**
      * Adds a property to an object, or modifies attributes of an existing property.
      * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
      * @param p The property name.
      * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
      */
    defineProperty(o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): any;

    /**
      * Adds one or more properties to an object, and/or modifies attributes of existing properties.
      * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
      * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
      */
    defineProperties(o: any, properties: PropertyDescriptorMap & ThisType<any>): any;

    /**
      * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes.
      */
    seal<T>(o: T): T;

    /**
      * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes.
      */
    freeze<T>(a: T[]): ReadonlyArray<T>;

    /**
      * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes.
      */
    freeze<T extends Function>(f: T): T;

    /**
      * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes.
      */
    freeze<T>(o: T): Readonly<T>;

    /**
      * Prevents the addition of new properties to an object.
      * @param o Object to make non-extensible.
      */
    preventExtensions<T>(o: T): T;

    /**
      * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
      * @param o Object to test.
      */
    isSealed(o: any): boolean;

    /**
      * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
      * @param o Object to test.
      */
    isFrozen(o: any): boolean;

    /**
      * Returns a value that indicates whether new properties can be added to an object.
      * @param o Object to test.
      */
    isExtensible(o: any): boolean;

    /**
      * Returns the names of the enumerable properties and methods of an object.
      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
      */
    keys(o: {}): string[];
}

/**
  * Provides functionality common to all JavaScript objects.
  */
declare const Object: ObjectConstructor;

/**
  * Creates a new function.
  */
interface Function {
    /**
      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
      * @param thisArg The object to be used as the this object.
      * @param argArray A set of arguments to be passed to the function.
      */
    apply(this: Function, thisArg: any, argArray?: any): any;

    /**
      * Calls a method of an object, substituting another object for the current object.
      * @param thisArg The object to be used as the current object.
      * @param argArray A list of arguments to be passed to the method.
      */
    call(this: Function, thisArg: any, ...argArray: any[]): any;

    /**
      * For a given function, creates a bound function that has the same body as the original function.
      * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
      * @param thisArg An object to which the this keyword can refer inside the new function.
      * @param argArray A list of arguments to be passed to the new function.
      */
    bind(this: Function, thisArg: any, ...argArray: any[]): any;

    /** Returns a string representation of a function. */
    toString(): string;

    prototype: any;
    readonly length: number;

    // Non-standard extensions
    arguments: any;
    caller: Function;
}

interface FunctionConstructor {
    /**
      * Creates a new function.
      * @param args A list of arguments the function accepts.
      */
    new(...args: string[]): Function;
    (...args: string[]): Function;
    readonly prototype: Function;
}

declare const Function: FunctionConstructor;

interface String {
    /** Returns a string representation of a string. */
    toString(): string;

    /**
      * Returns the character at the specified index.
      * @param pos The zero-based index of the desired character.
      */
    charAt(pos: number): string;

    /**
      * Returns the Unicode value of the character at the specified location.
      * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
      */
    charCodeAt(index: number): number;

    /**
      * Returns a string that contains the concatenation of two or more strings.
      * @param strings The strings to append to the end of the string.
      */
    concat(...strings: string[]): string;

    /**
      * Returns the position of the first occurrence of a substring.
      * @param searchString The substring to search for in the string
      * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
      */
    indexOf(searchString: string, position?: number): number;

    /**
      * Returns the last occurrence of a substring in the string.
      * @param searchString The substring to search for.
      * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
      */
    lastIndexOf(searchString: string, position?: number): number;

    /**
      * Determines whether two strings are equivalent in the current locale.
      * @param that String to compare to target string
      */
    localeCompare(that: string): number;

    /**
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A variable name or string literal containing the regular expression pattern and flags.
      */
    match(regexp: string | RegExp): RegExpMatchArray | null;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A string to search for.
      * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
      */
    replace(searchValue: string | RegExp, replaceValue: string): string;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A string to search for.
      * @param replacer A function that returns the replacement text.
      */
    replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;

    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags.
      */
    search(regexp: string | RegExp): number;

    /**
      * Returns a section of a string.
      * @param start The index to the beginning of the specified portion of stringObj.
      * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
      * If this value is not specified, the substring continues to the end of stringObj.
      */
    slice(start?: number, end?: number): string;

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(separator: string | RegExp, limit?: number): string[];

    /**
      * Returns the substring at the specified location within a String object.
      * @param start The zero-based index number indicating the beginning of the substring.
      * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
      * If end is omitted, the characters from start through the end of the original string are returned.
      */
    substring(start: number, end?: number): string;

    /** Converts all the alphabetic characters in a string to lowercase. */
    toLowerCase(): string;

    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
    toLocaleLowerCase(): string;

    /** Converts all the alphabetic characters in a string to uppercase. */
    toUpperCase(): string;

    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
    toLocaleUpperCase(): string;

    /** Removes the leading and trailing white space and line terminator characters from a string. */
    trim(): string;

    /** Returns the length of a String object. */
    readonly length: number;

    // IE extensions
    /**
      * Gets a substring beginning at the specified location and having the specified length.
      * @param from The starting position of the desired substring. The index of the first character in the string is zero.
      * @param length The number of characters to include in the returned substring.
      */
    substr(from: number, length?: number): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): string;

    readonly [index: number]: string;
}


interface StringConstructor {
    new(value?: any): String;
    (value?: any): string;
    readonly prototype: String;
    fromCharCode(...codes: number[]): string;
}

/**
  * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
  */
declare const String: StringConstructor;

interface Boolean {
    /** Returns the primitive value of the specified object. */
    valueOf(): boolean;
}

interface BooleanConstructor {
    new(value?: any): Boolean;
    (value?: any): boolean;
    readonly prototype: Boolean;
}

declare const Boolean: BooleanConstructor;

interface Number {
    /**
      * Returns a string representation of an object.
      * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
      */
    toString(radix?: number): string;

    /**
      * Returns a string representing a number in fixed-point notation.
      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
      */
    toFixed(fractionDigits?: number): string;

    /**
      * Returns a string containing a number represented in exponential notation.
      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
      */
    toExponential(fractionDigits?: number): string;

    /**
      * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
      * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
      */
    toPrecision(precision?: number): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): number;
}

interface NumberConstructor {
    new(value?: any): Number;
    (value?: any): number;
    readonly prototype: Number;

    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
    readonly MAX_VALUE: number;

    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
    readonly MIN_VALUE: number;

    /**
      * A value that is not a number.
      * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
      */
    readonly NaN: number;

    /**
      * A value that is less than the largest negative number that can be represented in JavaScript.
      * JavaScript displays NEGATIVE_INFINITY values as -infinity.
      */
    readonly NEGATIVE_INFINITY: number;

    /**
      * A value greater than the largest number that can be represented in JavaScript.
      * JavaScript displays POSITIVE_INFINITY values as infinity.
      */
    readonly POSITIVE_INFINITY: number;
}

/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare const Number: NumberConstructor;


interface Math {
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    readonly E: number;
    /** The natural logarithm of 10. */
    readonly LN10: number;
    /** The natural logarithm of 2. */
    readonly LN2: number;
    /** The base-2 logarithm of e. */
    readonly LOG2E: number;
    /** The base-10 logarithm of e. */
    readonly LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    readonly SQRT1_2: number;
    /** The square root of 2. */
    readonly SQRT2: number;
    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
    abs(x: number): number;
    /**
      * Returns the arc cosine (or inverse cosine) of a number.
      * @param x A numeric expression.
      */
    acos(x: number): number;
    /**
      * Returns the arcsine of a number.
      * @param x A numeric expression.
      */
    asin(x: number): number;
    /**
      * Returns the arctangent of a number.
      * @param x A numeric expression for which the arctangent is needed.
      */
    atan(x: number): number;
    /**
      * Returns the angle (in radians) from the X axis to a point.
      * @param y A numeric expression representing the cartesian y-coordinate.
      * @param x A numeric expression representing the cartesian x-coordinate.
      */
    atan2(y: number, x: number): number;
    /**
      * Returns the smallest integer greater than or equal to its numeric argument.
      * @param x A numeric expression.
      */
    ceil(x: number): number;
    /**
      * Returns the cosine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    cos(x: number): number;
    /**
      * Returns e (the base of natural logarithms) raised to a power.
      * @param x A numeric expression representing the power of e.
      */
    exp(x: number): number;
    /**
      * Returns the greatest integer less than or equal to its numeric argument.
      * @param x A numeric expression.
      */
    floor(x: number): number;
    /**
      * Returns the natural logarithm (base e) of a number.
      * @param x A numeric expression.
      */
    log(x: number): number;
    /**
      * Returns the larger of a set of supplied numeric expressions.
      * @param values Numeric expressions to be evaluated.
      */
    max(...values: number[]): number;
    /**
      * Returns the smaller of a set of supplied numeric expressions.
      * @param values Numeric expressions to be evaluated.
      */
    min(...values: number[]): number;
    /**
      * Returns the value of a base expression taken to a specified power.
      * @param x The base value of the expression.
      * @param y The exponent value of the expression.
      */
    pow(x: number, y: number): number;
    /** Returns a pseudorandom number between 0 and 1. */
    random(): number;
    /**
      * Returns a supplied numeric expression rounded to the nearest number.
      * @param x The value to be rounded to the nearest number.
      */
    round(x: number): number;
    /**
      * Returns the sine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    sin(x: number): number;
    /**
      * Returns the square root of a number.
      * @param x A numeric expression.
      */
    sqrt(x: number): number;
    /**
      * Returns the tangent of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    tan(x: number): number;
}
/** An intrinsic object that provides basic mathematics functionality and constants. */
declare const Math: Math;

/** Enables basic storage and retrieval of dates and times. */
interface Date {
    /** Returns a string representation of a date. The format of the string depends on the locale. */
    toString(): string;
    /** Returns a date as a string value. */
    toDateString(): string;
    /** Returns a time as a string value. */
    toTimeString(): string;
    /** Returns a value as a string value appropriate to the host environment's current locale. */
    toLocaleString(): string;
    /** Returns a date as a string value appropriate to the host environment's current locale. */
    toLocaleDateString(): string;
    /** Returns a time as a string value appropriate to the host environment's current locale. */
    toLocaleTimeString(): string;
    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
    valueOf(): number;
    /** Gets the time value in milliseconds. */
    getTime(): number;
    /** Gets the year, using local time. */
    getFullYear(): number;
    /** Gets the year using Universal Coordinated Time (UTC). */
    getUTCFullYear(): number;
    /** Gets the month, using local time. */
    getMonth(): number;
    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
    getUTCMonth(): number;
    /** Gets the day-of-the-month, using local time. */
    getDate(): number;
    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
    getUTCDate(): number;
    /** Gets the day of the week, using local time. */
    getDay(): number;
    /** Gets the day of the week using Universal Coordinated Time (UTC). */
    getUTCDay(): number;
    /** Gets the hours in a date, using local time. */
    getHours(): number;
    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
    getUTCHours(): number;
    /** Gets the minutes of a Date object, using local time. */
    getMinutes(): number;
    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
    getUTCMinutes(): number;
    /** Gets the seconds of a Date object, using local time. */
    getSeconds(): number;
    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCSeconds(): number;
    /** Gets the milliseconds of a Date, using local time. */
    getMilliseconds(): number;
    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCMilliseconds(): number;
    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
    getTimezoneOffset(): number;
    /**
      * Sets the date and time value in the Date object.
      * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
      */
    setTime(time: number): number;
    /**
      * Sets the milliseconds value in the Date object using local time.
      * @param ms A numeric value equal to the millisecond value.
      */
    setMilliseconds(ms: number): number;
    /**
      * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
      * @param ms A numeric value equal to the millisecond value.
      */
    setUTCMilliseconds(ms: number): number;

    /**
      * Sets the seconds value in the Date object using local time.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setSeconds(sec: number, ms?: number): number;
    /**
      * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCSeconds(sec: number, ms?: number): number;
    /**
      * Sets the minutes value in the Date object using local time.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setMinutes(min: number, sec?: number, ms?: number): number;
    /**
      * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCMinutes(min: number, sec?: number, ms?: number): number;
    /**
      * Sets the hour value in the Date object using local time.
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    /**
      * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
    /**
      * Sets the numeric day-of-the-month value of the Date object using local time.
      * @param date A numeric value equal to the day of the month.
      */
    setDate(date: number): number;
    /**
      * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
      * @param date A numeric value equal to the day of the month.
      */
    setUTCDate(date: number): number;
    /**
      * Sets the month value in the Date object using local time.
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
      * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
      */
    setMonth(month: number, date?: number): number;
    /**
      * Sets the month value in the Date object using Universal Coordinated Time (UTC).
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
      * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
      */
    setUTCMonth(month: number, date?: number): number;
    /**
      * Sets the year of the Date object using local time.
      * @param year A numeric value for the year.
      * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
      * @param date A numeric value equal for the day of the month.
      */
    setFullYear(year: number, month?: number, date?: number): number;
    /**
      * Sets the year value in the Date object using Universal Coordinated Time (UTC).
      * @param year A numeric value equal to the year.
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
      * @param date A numeric value equal to the day of the month.
      */
    setUTCFullYear(year: number, month?: number, date?: number): number;
    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
    toUTCString(): string;
    /** Returns a date as a string value in ISO format. */
    toISOString(): string;
    /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
    toJSON(key?: any): string;
}

interface DateConstructor {
    new(): Date;
    new(value: number | string): Date;
    new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
    (): string;
    readonly prototype: Date;
    /**
      * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
      * @param s A date string
      */
    parse(s: string): number;
    /**
      * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
      * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
      * @param month The month as an number between 0 and 11 (January to December).
      * @param date The date as an number between 1 and 31.
      * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
      * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
      * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
      * @param ms An number from 0 to 999 that specifies the milliseconds.
      */
    UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
    now(): number;
}

declare const Date: DateConstructor;


interface RegExpMatchArray extends Array<string> {
    index?: number;
    input?: string;
}

interface RegExpExecArray extends Array<string> {
    index: number;
    input: string;
}

interface RegExp {
    /**
      * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
      * @param string The String object or string literal on which to perform the search.
      */
    exec(string: string): RegExpExecArray | null;

    /**
      * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
      * @param string String on which to perform the search.
      */
    test(string: string): boolean;

    /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
    readonly source: string;

    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
    readonly global: boolean;

    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
    readonly ignoreCase: boolean;

    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
    readonly multiline: boolean;

    lastIndex: number;

    // Non-standard extensions
    compile(): this;
}

interface RegExpConstructor {
    new(pattern: RegExp | string): RegExp;
    new(pattern: string, flags?: string): RegExp;
    (pattern: RegExp | string): RegExp;
    (pattern: string, flags?: string): RegExp;
    readonly prototype: RegExp;

    // Non-standard extensions
    $1: string;
    $2: string;
    $3: string;
    $4: string;
    $5: string;
    $6: string;
    $7: string;
    $8: string;
    $9: string;
    lastMatch: string;
}

declare const RegExp: RegExpConstructor;

interface JSON {
    /**
      * Converts a JavaScript Object Notation (JSON) string into an object.
      * @param text A valid JSON string.
      * @param reviver A function that transforms the results. This function is called for each member of the object.
      * If a member contains nested objects, the nested objects are transformed before the parent object is.
      */
    parse(text: string, reviver?: (key: any, value: any) => any): any;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
    stringify(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}

/**
  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
  */
declare const JSON: JSON;

/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

interface ReadonlyArray<T> {
    /**
      * Gets the length of the array. This is a number one higher than the highest element defined in an array.
      */
    readonly length: number;
    /**
      * Returns a string representation of an array.
      */
    toString(): string;
    /**
      * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
      */
    toLocaleString(): string;
    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
    concat(...items: ConcatArray<T>[]): T[];
    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
    concat(...items: (T | ConcatArray<T>)[]): T[];
    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
      */
    join(separator?: string): string;
    /**
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
    slice(start?: number, end?: number): T[];
    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
      * Returns the index of the last occurrence of a specified value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
      */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    every(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => boolean, thisArg?: any): boolean;
    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    some(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => boolean, thisArg?: any): boolean;
    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    forEach(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void, thisArg?: any): void;
    /**
      * Calls a defined callback function on each element of an array, and returns an array that contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    map<U>(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => U, thisArg?: any): U[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    filter<S extends T>(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => value is S, thisArg?: any): S[];
    /**
      * Returns the elements of an array that meet the condition specified in a callback function.
      * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    filter(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => any, thisArg?: any): T[];
    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T, initialValue: T): T;
    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U, initialValue: U): U;
    /**
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T, initialValue: T): T;
    /**
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U, initialValue: U): U;

    readonly [n: number]: T;
}

interface ConcatArray<T> {
    readonly length: number;
    readonly [n: number]: T;
    join(separator?: string): string;
    slice(start?: number, end?: number): T[];
}

interface Array<T> {
    /**
      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
      */
    length: number;
    /**
      * Returns a string representation of an array.
      */
    toString(): string;
    /**
      * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
      */
    toLocaleString(): string;
    /**
      * Appends new elements to an array, and returns the new length of the array.
      * @param items New elements of the Array.
      */
    push(...items: T[]): number;
    /**
      * Removes the last element from an array and returns it.
      */
    pop(): T | undefined;
    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
    concat(...items: ConcatArray<T>[]): T[];
    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
    concat(...items: (T | ConcatArray<T>)[]): T[];
    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
      */
    join(separator?: string): string;
    /**
      * Reverses the elements in an Array.
      */
    reverse(): T[];
    /**
      * Removes the first element from an array and returns it.
      */
    shift(): T | undefined;
    /**
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
    slice(start?: number, end?: number): T[];
    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
      */
    sort(compareFn?: (a: T, b: T) => number): this;
    /**
      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
      * @param start The zero-based location in the array from which to start removing elements.
      * @param deleteCount The number of elements to remove.
      */
    splice(start: number, deleteCount?: number): T[];
    /**
      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
      * @param start The zero-based location in the array from which to start removing elements.
      * @param deleteCount The number of elements to remove.
      * @param items Elements to insert into the array in place of the deleted elements.
      */
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    /**
      * Inserts new elements at the start of an array.
      * @param items  Elements to insert at the start of the Array.
      */
    unshift(...items: T[]): number;
    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
      * Returns the index of the last occurrence of a specified value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
      */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    /**
      * Calls a defined callback function on each element of an array, and returns an array that contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    /**
      * Returns the elements of an array that meet the condition specified in a callback function.
      * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];
    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    /**
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    [n: number]: T;
}

interface ArrayConstructor {
    new(arrayLength?: number): any[];
    new <T>(arrayLength: number): T[];
    new <T>(...items: T[]): T[];
    (arrayLength?: number): any[];
    <T>(arrayLength: number): T[];
    <T>(...items: T[]): T[];
    isArray(arg: any): arg is Array<any>;
    readonly prototype: Array<any>;
}

declare const Array: ArrayConstructor;

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> { }


/**
 * Definitions that appear in multiple plugins.
 */
interface byte {

}

interface byteConstructor {
    new(value?: any): byte;
    readonly prototype: byte;
}

declare const byte: byteConstructor;

interface int {

}

interface intConstructor {
    new(value?: any): int;
    readonly prototype: int;
}

declare const int: intConstructor;

interface Integer {

}

interface IntegerConstructor {
    new(value?: any): Integer;
    readonly prototype: Integer;
}

declare const Integer: IntegerConstructor;

interface Trigger {

}

interface TriggerConstructor {
    new(value?: any): Trigger;
    readonly prototype: Trigger;
}

declare const Trigger: TriggerConstructor;
