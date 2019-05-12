/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module java.util
{
	export interface Map
	{

	}


}
	interface Message
	{

	}

	declare const Message: Message;

	interface VCODeploymentManager
	{

		deletePackageWithContent(pckg?: VCORemotePackage, keepShared?: boolean): void;
		deletePackageWithContentByName(server?: VCORemoteServer, name?: String, keepShared?: boolean): void;
		deleteWorkflow(rmtWorkflow?: VCORemoteWorkflow, force?: boolean): void;
		deployPackage(pkg?: Package, servers?: VCORemoteServer[], override?: boolean): VCODeploymentStatus[];
		deployRemotePackage(pkg?: VCORemotePackage, targets?: VCORemoteServer[], override?: boolean): VCODeploymentStatus[];
		deployRemoteWorkflow(server?: VCORemoteServer, source?: VCORemoteWorkflow, path?: String, override?: boolean): void;
		deployWorkflow(server?: VCORemoteServer, source?: Workflow, path?: String, override?: boolean): void;
	}

	declare const VCODeploymentManager: VCODeploymentManager;

	interface VCODeploymentStatus
	{

		getElementName(): String;
		getMessages(): Message[];
		getStatusAsString(): String;
		getTargetName(): String;
	}

	interface VCODeploymentStatusConstructor {
		new(value?:any): VCODeploymentStatus;
		readonly prototype: VCODeploymentStatus;
	}

	declare const VCODeploymentStatus: VCODeploymentStatusConstructor;

	declare class VCOHostValidator
	{

		constructor(scheme?: String, host?: String, port?: int);
		constructor(host?: String, port?: int);
		getCertificateInfo(): Properties;
		installCertificates(): void;
	}

	interface VCOPlugin
	{
		readonly id: String;
		readonly name: String;

		findRemoteServerByName(name?: String): VCORemoteServer;
		findRemoteServersByHost(host?: String): VCORemoteServer[];
		getAvailableRemoteServers(): VCORemoteServer[];
		getRemoteServers(): VCORemoteServer[];
	}

	declare const VCOPlugin: VCOPlugin;

	interface VCOProxyWorkflowManager
	{

		createAllProxies(server?: VCORemoteServer, synchronos?: boolean): void;
		createProxies(remotePathId?: String, recursive?: boolean, synchronos?: boolean): void;
		createProxy(remoteWorkflowId?: String, synchronous?: boolean): void;
		createProxyActionForLocal(actionName?: String, moduleName?: String, workflow?: Workflow): void;
		createProxyActionForRemote(actionName?: String, moduleName?: String, workflow?: VCORemoteWorkflow): void;
		deleteProxies(server?: VCORemoteServer, alsoFolders?: boolean): void;
		executeAsynchronousProxies(workflowId?: String, params?: java.util.Map): VCORemoteWorkflowToken[];
		executeAsynchronousProxy(connectionId?: String, workflowId?: String, parameters?: java.util.Map): VCORemoteWorkflowToken;
		executeSynchronousProxy(connectionId?: String, workflowId?: String, parameters?: java.util.Map): Properties;
		processStaleProxyWorkflowExecutions(remoteServer?: VCORemoteServer): void;
	}

	declare const VCOProxyWorkflowManager: VCOProxyWorkflowManager;

	interface VCORemoteAction
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteActionConstructor {
		new(value?:any): VCORemoteAction;
		readonly prototype: VCORemoteAction;
	}

	declare const VCORemoteAction: VCORemoteActionConstructor;

	interface VCORemoteActionCategory
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteActionCategoryConstructor {
		new(value?:any): VCORemoteActionCategory;
		readonly prototype: VCORemoteActionCategory;
	}

	declare const VCORemoteActionCategory: VCORemoteActionCategoryConstructor;

	interface VCORemoteActionsFolder
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteActionsFolderConstructor {
		new(value?:any): VCORemoteActionsFolder;
		readonly prototype: VCORemoteActionsFolder;
	}

	declare const VCORemoteActionsFolder: VCORemoteActionsFolderConstructor;

	interface VCORemoteAny
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteAnyConstructor {
		new(value?:any): VCORemoteAny;
		readonly prototype: VCORemoteAny;
	}

	declare const VCORemoteAny: VCORemoteAnyConstructor;

	interface VCORemoteConfigurationElement
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteConfigurationElementConstructor {
		new(value?:any): VCORemoteConfigurationElement;
		readonly prototype: VCORemoteConfigurationElement;
	}

	declare const VCORemoteConfigurationElement: VCORemoteConfigurationElementConstructor;

	interface VCORemoteConfigurationElementCategory
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteConfigurationElementCategoryConstructor {
		new(value?:any): VCORemoteConfigurationElementCategory;
		readonly prototype: VCORemoteConfigurationElementCategory;
	}

	declare const VCORemoteConfigurationElementCategory: VCORemoteConfigurationElementCategoryConstructor;

	interface VCORemoteConfigurationsFolder
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteConfigurationsFolderConstructor {
		new(value?:any): VCORemoteConfigurationsFolder;
		readonly prototype: VCORemoteConfigurationsFolder;
	}

	declare const VCORemoteConfigurationsFolder: VCORemoteConfigurationsFolderConstructor;

	interface VCORemotePackage
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemotePackageConstructor {
		new(value?:any): VCORemotePackage;
		readonly prototype: VCORemotePackage;
	}

	declare const VCORemotePackage: VCORemotePackageConstructor;

	interface VCORemotePackagesFolder
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemotePackagesFolderConstructor {
		new(value?:any): VCORemotePackagesFolder;
		readonly prototype: VCORemotePackagesFolder;
	}

	declare const VCORemotePackagesFolder: VCORemotePackagesFolderConstructor;

	interface VCORemotePlugin
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemotePluginConstructor {
		new(value?:any): VCORemotePlugin;
		readonly prototype: VCORemotePlugin;
	}

	declare const VCORemotePlugin: VCORemotePluginConstructor;

	interface VCORemotePluginObject
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemotePluginObjectConstructor {
		new(value?:any): VCORemotePluginObject;
		readonly prototype: VCORemotePluginObject;
	}

	declare const VCORemotePluginObject: VCORemotePluginObjectConstructor;

	interface VCORemoteResourceElement
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteResourceElementConstructor {
		new(value?:any): VCORemoteResourceElement;
		readonly prototype: VCORemoteResourceElement;
	}

	declare const VCORemoteResourceElement: VCORemoteResourceElementConstructor;

	interface VCORemoteResourceElementCategory
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteResourceElementCategoryConstructor {
		new(value?:any): VCORemoteResourceElementCategory;
		readonly prototype: VCORemoteResourceElementCategory;
	}

	declare const VCORemoteResourceElementCategory: VCORemoteResourceElementCategoryConstructor;

	interface VCORemoteResourcesFolder
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteResourcesFolderConstructor {
		new(value?:any): VCORemoteResourcesFolder;
		readonly prototype: VCORemoteResourcesFolder;
	}

	declare const VCORemoteResourcesFolder: VCORemoteResourcesFolderConstructor;

	interface VCORemoteServer
	{
		readonly connectionId: String;
		readonly connectionTimeout: int;
		readonly host: String;
		readonly id: String;
		readonly name: String;
		readonly port: int;
		readonly retryTimeout: String;
		readonly scheme: String;
		readonly shared: boolean;
		readonly simpleName: String;
		readonly socketTimeout: String;
		readonly ssoEnabled: boolean;
		readonly ssoHost: String;
		readonly ssoPort: int;
		readonly ssoScheme: String;
		readonly status: String;

		findAllPackages(): VCORemotePackage[];
		findAllWorkflows(): VCORemoteWorkflow[];
	}

	interface VCORemoteServerConstructor {
		new(value?:any): VCORemoteServer;
		readonly prototype: VCORemoteServer;
	}

	declare const VCORemoteServer: VCORemoteServerConstructor;

	interface VCORemoteSystem
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteSystemConstructor {
		new(value?:any): VCORemoteSystem;
		readonly prototype: VCORemoteSystem;
	}

	declare const VCORemoteSystem: VCORemoteSystemConstructor;

	interface VCORemoteTask
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteTaskConstructor {
		new(value?:any): VCORemoteTask;
		readonly prototype: VCORemoteTask;
	}

	declare const VCORemoteTask: VCORemoteTaskConstructor;

	interface VCORemoteWorkflow
	{
		readonly description: String;
		readonly id: String;
		readonly inParameters: String;
		readonly name: String;
		readonly outParameters: String;

		deleteCompletedWorkflowTokens(): void;
	}

	interface VCORemoteWorkflowConstructor {
		new(value?:any): VCORemoteWorkflow;
		readonly prototype: VCORemoteWorkflow;
	}

	declare const VCORemoteWorkflow: VCORemoteWorkflowConstructor;

	interface VCORemoteWorkflowCategory
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteWorkflowCategoryConstructor {
		new(value?:any): VCORemoteWorkflowCategory;
		readonly prototype: VCORemoteWorkflowCategory;
	}

	declare const VCORemoteWorkflowCategory: VCORemoteWorkflowCategoryConstructor;

	interface VCORemoteWorkflowsFolder
	{
		readonly id: String;
		readonly name: String;

	}

	interface VCORemoteWorkflowsFolderConstructor {
		new(value?:any): VCORemoteWorkflowsFolder;
		readonly prototype: VCORemoteWorkflowsFolder;
	}

	declare const VCORemoteWorkflowsFolder: VCORemoteWorkflowsFolderConstructor;

	interface VCORemoteWorkflowToken
	{
		readonly id: String;
		readonly name: String;
		readonly state: String;

		cancel(): void;
		getAttributes(): Properties;
		getException(): String;
		getInputParameters(): Properties;
		getOutputParameters(): Properties;
	}

	interface VCORemoteWorkflowTokenConstructor {
		new(value?:any): VCORemoteWorkflowToken;
		readonly prototype: VCORemoteWorkflowToken;
	}

	declare const VCORemoteWorkflowToken: VCORemoteWorkflowTokenConstructor;

	interface VCOServerConfiguration
	{
		connectionTimeout: int;
		host: String;
		password: String;
		port: int;
		retryTimeout: int;
		shared: boolean;
		socketTimeout: int;
		user: String;

	}

	interface VCOServerConfigurationConstructor {
		new(value?:any): VCOServerConfiguration;
		readonly prototype: VCOServerConfiguration;
	}

	declare const VCOServerConfiguration: VCOServerConfigurationConstructor;

	interface VCOServerManager
	{

		addOrchestrator(config?: VCOServerConfiguration): VCORemoteServer;
		addServer(host?: String, port?: int, isShared?: boolean, user?: String, password?: String, connectionTimeout?: int, socketTimeout?: int, retryTimeout?: int, ssoEnabled?: boolean, ssoScheme?: String, ssoHost?: String, ssoPort?: int, ssoSameAsVco?: boolean): VCORemoteServer;
		deleteOrchestrator(srv?: VCORemoteServer): void;
		deleteServer(srv?: VCORemoteServer): void;
		updateOrchestrator(src?: VCORemoteServer, config?: VCOServerConfiguration): VCORemoteServer;
		updateServer(src?: VCORemoteServer, host?: String, port?: int, isShared?: boolean, user?: String, password?: String, connectionTimeout?: int, socketTimeout?: int, retryTimeout?: int, ssoEnabled?: boolean, ssoScheme?: String, ssoHost?: String, ssoPort?: int, ssoSameAsVco?: boolean): VCORemoteServer;
	}

	declare const VCOServerManager: VCOServerManager;

    
    // Finder objects.
declare namespace VCO {
	interface Plugin extends VCOPlugin
	{
		id: any;
		name: any;

		RemoteServers(): RemoteServer;
	}

	interface PluginConstructor {
		new(value?:any): Plugin;
		readonly prototype: Plugin;
	}

	const Plugin: PluginConstructor;

	interface RemoteAction extends VCORemoteAction
	{
		id: any;
		readonly name: any;

	}

	interface RemoteActionConstructor {
		new(value?:any): RemoteAction;
		readonly prototype: RemoteAction;
	}

	const RemoteAction: RemoteActionConstructor;

	interface RemoteActionCategory extends VCORemoteActionCategory
	{
		id: any;
		name: any;

		RemoteActions(): RemoteAction;
	}

	interface RemoteActionCategoryConstructor {
		new(value?:any): RemoteActionCategory;
		readonly prototype: RemoteActionCategory;
	}

	const RemoteActionCategory: RemoteActionCategoryConstructor;

	interface RemoteActionsFolder extends VCORemoteActionsFolder
	{
		id: any;
		name: any;

		RemoteActionCategories(): RemoteActionCategory;
	}

	interface RemoteActionsFolderConstructor {
		new(value?:any): RemoteActionsFolder;
		readonly prototype: RemoteActionsFolder;
	}

	const RemoteActionsFolder: RemoteActionsFolderConstructor;

	interface RemoteConfigurationElement extends VCORemoteConfigurationElement
	{
		id: any;
		readonly name: any;

	}

	interface RemoteConfigurationElementConstructor {
		new(value?:any): RemoteConfigurationElement;
		readonly prototype: RemoteConfigurationElement;
	}

	const RemoteConfigurationElement: RemoteConfigurationElementConstructor;

	interface RemoteConfigurationElementCategory extends VCORemoteConfigurationElementCategory
	{
		id: any;
		name: any;

		RemoteConfigurationElementCategories(): RemoteConfigurationElementCategory;
		RemoteConfigurationElements(): RemoteConfigurationElement;
	}

	interface RemoteConfigurationElementCategoryConstructor {
		new(value?:any): RemoteConfigurationElementCategory;
		readonly prototype: RemoteConfigurationElementCategory;
	}

	const RemoteConfigurationElementCategory: RemoteConfigurationElementCategoryConstructor;

	interface RemoteConfigurationsFolder extends VCORemoteConfigurationsFolder
	{
		id: any;
		name: any;

		RemoteConfigurationElementCategories(): RemoteConfigurationElementCategory;
	}

	interface RemoteConfigurationsFolderConstructor {
		new(value?:any): RemoteConfigurationsFolder;
		readonly prototype: RemoteConfigurationsFolder;
	}

	const RemoteConfigurationsFolder: RemoteConfigurationsFolderConstructor;

	interface RemotePackage extends VCORemotePackage
	{
		id: any;
		readonly name: any;

	}

	interface RemotePackageConstructor {
		new(value?:any): RemotePackage;
		readonly prototype: RemotePackage;
	}

	const RemotePackage: RemotePackageConstructor;

	interface RemotePackagesFolder extends VCORemotePackagesFolder
	{
		id: any;
		name: any;

		RemotePackages(): RemotePackage;
	}

	interface RemotePackagesFolderConstructor {
		new(value?:any): RemotePackagesFolder;
		readonly prototype: RemotePackagesFolder;
	}

	const RemotePackagesFolder: RemotePackagesFolderConstructor;

	interface RemotePlugin extends VCORemotePlugin
	{
		id: any;
		name: any;

		RemotePluginObjects(): RemotePluginObject;
	}

	interface RemotePluginConstructor {
		new(value?:any): RemotePlugin;
		readonly prototype: RemotePlugin;
	}

	const RemotePlugin: RemotePluginConstructor;

	interface RemotePluginObject extends VCORemotePluginObject
	{
		id: any;
		readonly name: any;

		RemotePluginObjects(): RemotePluginObject;
	}

	interface RemotePluginObjectConstructor {
		new(value?:any): RemotePluginObject;
		readonly prototype: RemotePluginObject;
	}

	const RemotePluginObject: RemotePluginObjectConstructor;

	interface RemoteResourceElement extends VCORemoteResourceElement
	{
		id: any;
		readonly name: any;

	}

	interface RemoteResourceElementConstructor {
		new(value?:any): RemoteResourceElement;
		readonly prototype: RemoteResourceElement;
	}

	const RemoteResourceElement: RemoteResourceElementConstructor;

	interface RemoteResourceElementCategory extends VCORemoteResourceElementCategory
	{
		id: any;
		name: any;

		RemoteResourceElementCategories(): RemoteResourceElementCategory;
		RemoteResourceElements(): RemoteResourceElement;
	}

	interface RemoteResourceElementCategoryConstructor {
		new(value?:any): RemoteResourceElementCategory;
		readonly prototype: RemoteResourceElementCategory;
	}

	const RemoteResourceElementCategory: RemoteResourceElementCategoryConstructor;

	interface RemoteResourcesFolder extends VCORemoteResourcesFolder
	{
		id: any;
		name: any;

		RemoteResourceElementCategories(): RemoteResourceElementCategory;
	}

	interface RemoteResourcesFolderConstructor {
		new(value?:any): RemoteResourcesFolder;
		readonly prototype: RemoteResourcesFolder;
	}

	const RemoteResourcesFolder: RemoteResourcesFolderConstructor;

	interface RemoteServer extends VCORemoteServer
	{
		readonly connectionId: any;
		readonly connectionTimeout: any;
		readonly host: any;
		id: any;
		readonly name: any;
		readonly port: any;
		readonly retryTimeout: any;
		readonly scheme: any;
		readonly shared: any;
		readonly simpleName: any;
		readonly socketTimeout: any;
		readonly ssoEnabled: any;
		readonly ssoHost: any;
		readonly ssoPort: any;
		readonly ssoScheme: any;
		readonly status: any;

		RemotePlugins(): RemotePlugin;
		RemoteSystems(): RemoteSystem;
	}

	interface RemoteServerConstructor {
		new(value?:any): RemoteServer;
		readonly prototype: RemoteServer;
	}

	const RemoteServer: RemoteServerConstructor;

	interface RemoteSystem extends VCORemoteSystem
	{
		id: any;
		name: any;

		RemoteActionsFolders(): RemoteActionsFolder;
		RemoteConfigurationsFolders(): RemoteConfigurationsFolder;
		RemotePackagesFolders(): RemotePackagesFolder;
		RemoteResourcesFolders(): RemoteResourcesFolder;
		RemoteWorkflowsFolders(): RemoteWorkflowsFolder;
	}

	interface RemoteSystemConstructor {
		new(value?:any): RemoteSystem;
		readonly prototype: RemoteSystem;
	}

	const RemoteSystem: RemoteSystemConstructor;

	interface RemoteWorkflow extends VCORemoteWorkflow
	{
		readonly description: any;
		id: any;
		readonly inParameters: any;
		readonly name: any;
		readonly outParameters: any;

		RemoteWorkflowTokens(): RemoteWorkflowToken;
	}

	interface RemoteWorkflowConstructor {
		new(value?:any): RemoteWorkflow;
		readonly prototype: RemoteWorkflow;
	}

	const RemoteWorkflow: RemoteWorkflowConstructor;

	interface RemoteWorkflowCategory extends VCORemoteWorkflowCategory
	{
		id: any;
		readonly name: any;

		RemoteWorkflowCategories(): RemoteWorkflowCategory;
		RemoteWorkflows(): RemoteWorkflow;
	}

	interface RemoteWorkflowCategoryConstructor {
		new(value?:any): RemoteWorkflowCategory;
		readonly prototype: RemoteWorkflowCategory;
	}

	const RemoteWorkflowCategory: RemoteWorkflowCategoryConstructor;

	interface RemoteWorkflowsFolder extends VCORemoteWorkflowsFolder
	{
		id: any;
		name: any;

		RemoteWorkflowCategories(): RemoteWorkflowCategory;
	}

	interface RemoteWorkflowsFolderConstructor {
		new(value?:any): RemoteWorkflowsFolder;
		readonly prototype: RemoteWorkflowsFolder;
	}

	const RemoteWorkflowsFolder: RemoteWorkflowsFolderConstructor;

	interface RemoteWorkflowToken extends VCORemoteWorkflowToken
	{
		id: any;
		readonly name: any;
		readonly state: any;

	}

	interface RemoteWorkflowTokenConstructor {
		new(value?:any): RemoteWorkflowToken;
		readonly prototype: RemoteWorkflowToken;
	}

	const RemoteWorkflowToken: RemoteWorkflowTokenConstructor;

    }    
