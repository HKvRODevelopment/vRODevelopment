/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface VAPIClient
	{

		close(): void;
	}

	interface VAPIClientConstructor {
		new(value?:any): VAPIClient;
		readonly prototype: VAPIClient;
	}

	declare const VAPIClient: VAPIClientConstructor;

	interface VAPIEndpoint
	{
		readonly endpointUrl: String;
		readonly name: String;
		readonly username: String;
		readonly useSecureConnection: boolean;

		client(username?: String, password?: String): VAPIClient;
	}

	interface VAPIEndpointConstructor {
		new(value?:any): VAPIEndpoint;
		readonly prototype: VAPIEndpoint;
	}

	declare const VAPIEndpoint: VAPIEndpointConstructor;

	interface VAPIManager
	{

		addEndpoint(endpointUrl?: String, useSecureConnection?: boolean, username?: String, password?: String): VAPIEndpoint;
		findEndpoint(endpointUrl?: String): VAPIEndpoint;
		findMetamodel(endpointUrl?: String): VAPIMetamodel;
		getAllEndpoints(): VAPIEndpoint[];
		getAllMetamodels(): VAPIMetamodel[];
		importMetamodel(endpointUrl?: String, useSecureConnection?: boolean, username?: String, password?: String): void;
		removeEndpoint(endpointUrl?: String): void;
		removeMetamodel(endpointUrl?: String): void;
		stringifyDataValue(data?: Object): String;
	}

	declare const VAPIManager: VAPIManager;

	interface VAPIMetamodel
	{
		readonly endpointUrl: String;
		readonly name: String;
		readonly username: String;
		readonly useSecureConnection: boolean;

		checkForModifications(): String[];
	}

	interface VAPIMetamodelConstructor {
		new(value?:any): VAPIMetamodel;
		readonly prototype: VAPIMetamodel;
	}

	declare const VAPIMetamodel: VAPIMetamodelConstructor;

    
    // Finder objects.
declare namespace VAPI {
	interface Endpoints
	{

		endpoints(): VAPIEndpoint;
	}

	interface EndpointsConstructor {
		new(value?:any): Endpoints;
		readonly prototype: Endpoints;
	}

	const Endpoints: EndpointsConstructor;

	interface Metamodels
	{

		metamodels(): VAPIMetamodel;
	}

	interface MetamodelsConstructor {
		new(value?:any): Metamodels;
		readonly prototype: Metamodels;
	}

	const Metamodels: MetamodelsConstructor;

	interface RootElemFinder
	{

		endpoints(): Endpoints;
		metamodels(): Metamodels;
	}

	interface RootElemFinderConstructor {
		new(value?:any): RootElemFinder;
		readonly prototype: RootElemFinder;
	}

	const RootElemFinder: RootElemFinderConstructor;

    }    
