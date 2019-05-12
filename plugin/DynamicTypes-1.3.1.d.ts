/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module ch.dunes.model.dunes
{
	export interface ScriptModule
	{

	}


}
	interface DynamicTypesDynamicNamespaceDefinition
	{
		readonly id: String;
		name: String;
		readonly type: String;

	}

	interface DynamicTypesDynamicNamespaceDefinitionConstructor {
		new(value?:any): DynamicTypesDynamicNamespaceDefinition;
		readonly prototype: DynamicTypesDynamicNamespaceDefinition;
	}

	declare const DynamicTypesDynamicNamespaceDefinition: DynamicTypesDynamicNamespaceDefinitionConstructor;

	interface DynamicTypesDynamicObject
	{
		readonly cachedProperties: java.util.HashMap;
		id: String;
		readonly name: String;
		readonly namespace: String;
		properties: java.util.HashMap;
		readonly type: String;

		getOrderedPropertyNames(): String[];
		getOrderedPropertyNamesInCache(): String[];
		getProperty(property?: String): Object;
		getPropertyInCache(property?: String): Object;
		setProperty(property?: String, value?: Object): void;
		setPropertyInCache(property?: String, value?: Object, seconds?: Long): void;
	}

	interface DynamicTypesDynamicObjectConstructor {
		new(value?:any): DynamicTypesDynamicObject;
		readonly prototype: DynamicTypesDynamicObject;
	}

	declare const DynamicTypesDynamicObject: DynamicTypesDynamicObjectConstructor;

	interface DynamicTypesDynamicObjectProxy
	{
		id: String;
		readonly name: String;
		readonly namespace: String;
		readonly properties: java.util.Map;
		type: String;

		exists(): boolean;
		getOrderedPropertyNames(): String[];
		getProperty(property?: String): Object;
		setProperty(property?: String, value?: Object): void;
	}

	interface DynamicTypesDynamicObjectProxyConstructor {
		new(value?:any): DynamicTypesDynamicObjectProxy;
		readonly prototype: DynamicTypesDynamicObjectProxy;
	}

	declare const DynamicTypesDynamicObjectProxy: DynamicTypesDynamicObjectProxyConstructor;

	interface DynamicTypesDynamicTypeDefinition
	{
		readonly findAllBinding: String;
		readonly findByIdBinding: String;
		readonly findRelationBinding: String;
		readonly hasChildrenInRelationBinding: String;
		iconResource: String;
		readonly id: String;
		name: String;
		namespace: String;
		properties: String[];
		readonly type: String;

	}

	interface DynamicTypesDynamicTypeDefinitionConstructor {
		new(value?:any): DynamicTypesDynamicTypeDefinition;
		readonly prototype: DynamicTypesDynamicTypeDefinition;
	}

	declare const DynamicTypesDynamicTypeDefinition: DynamicTypesDynamicTypeDefinitionConstructor;

	interface DynamicTypesManager
	{

		bindTypeFinderMethods(namespace?: String, type?: String, findByIdBinding?: String, findAllBinding?: String, hasChildrenInRelationBinding?: String, findRelationBinding?: String): void;
		defineNamespace(namespace?: String): DynamicTypesDynamicNamespaceDefinition;
		defineRelation(parentType?: String, childType?: String, relationName?: String): void;
		defineType(namespace?: String, type?: String, icon?: String, properties?: String[], actions?: ch.dunes.model.dunes.ScriptModule[]): DynamicTypesDynamicTypeDefinition;
		exportConfigurationAsPackage(namespacesToExport?: DynamicTypesDynamicNamespaceDefinition[]): Package;
		generateTypeFinderMethods(namespace?: String, type?: String, category?: WorkflowCategory): String[];
		getAllNamespaces(): DynamicTypesDynamicNamespaceDefinition[];
		getAllNamespacesByPackage(packageContent?: MimeAttachment): String[];
		getAllRelations(): DynamicTypesRelationDefinition[];
		getAllTypes(): DynamicTypesDynamicTypeDefinition[];
		getCacheKeys(): String[];
		getFromCache(key?: String): Object;
		getNamespace(namespace?: String): DynamicTypesDynamicNamespaceDefinition;
		getObject(namespace?: String, type?: String, id?: String): DynamicTypesDynamicObjectProxy;
		getType(namespace?: String, type?: String): DynamicTypesDynamicTypeDefinition;
		getTypeCustomProperty(namespace?: String, type?: String, key?: String): Object;
		importConfigurationFromPackage(namespacesToImport?: String[], packageContent?: MimeAttachment): boolean;
		importTypesFromXSD(xsdUri?: String, namespace?: String, category?: WorkflowCategory): void;
		invalidate(namespace?: String, type?: String, id?: String): void;
		makeObject(namespace?: String, type?: String, id?: String, name?: String, props?: String[]): DynamicTypesDynamicObject;
		putInCache(key?: String, value?: Object): void;
		removeAll(): void;
		removeFromCache(key?: String): Object;
		removeNamespace(namespace?: String): void;
		removeRelation(parentType?: String, childType?: String): void;
		removeType(namespace?: String, type?: String): void;
		removeTypeCustomProperty(namespace?: String, type?: String, key?: String): void;
		setTypeCustomProperty(namespace?: String, type?: String, key?: String, value?: Object): void;
		updateNamespace(name?: String, newName?: String): DynamicTypesDynamicNamespaceDefinition;
		updateType(namespace?: String, type?: String, newNamespace?: String, newType?: String, newIcon?: String, newProperties?: String[]): DynamicTypesDynamicTypeDefinition;
		validateConfigurationPackage(packageContent?: MimeAttachment): boolean;
	}

	declare const DynamicTypesManager: DynamicTypesManager;

	interface DynamicTypesRelationDefinition
	{
		readonly childType: String;
		readonly id: String;
		readonly name: String;
		readonly parentType: String;

	}

	interface DynamicTypesRelationDefinitionConstructor {
		new(value?:any): DynamicTypesRelationDefinition;
		readonly prototype: DynamicTypesRelationDefinition;
	}

	declare const DynamicTypesRelationDefinition: DynamicTypesRelationDefinitionConstructor;

	interface DynamicTypesTypeHierarchyRootFolder
	{

	}

	interface DynamicTypesTypeHierarchyRootFolderConstructor {
		new(value?:any): DynamicTypesTypeHierarchyRootFolder;
		readonly prototype: DynamicTypesTypeHierarchyRootFolder;
	}

	declare const DynamicTypesTypeHierarchyRootFolder: DynamicTypesTypeHierarchyRootFolderConstructor;

declare module java.util
{
	export interface HashMap
	{

	}


}
declare module java.util
{
	export interface Map
	{

	}


}
	interface Long
	{

	}

	declare const Long: Long;

    
    // Finder objects.
declare namespace DynamicTypes {
	interface _Finders
	{

	}

	interface _FindersConstructor {
		new(value?:any): _Finders;
		readonly prototype: _Finders;
	}

	const _Finders: _FindersConstructor;

	interface DynamicNamespaceDefinition extends DynamicTypesDynamicNamespaceDefinition
	{
		readonly id: any;
		name: any;
		readonly type: any;

	}

	interface DynamicNamespaceDefinitionConstructor {
		new(value?:any): DynamicNamespaceDefinition;
		readonly prototype: DynamicNamespaceDefinition;
	}

	const DynamicNamespaceDefinition: DynamicNamespaceDefinitionConstructor;

	interface DynamicObject extends DynamicTypesDynamicObject
	{
		readonly cachedProperties: any;
		id: any;
		readonly name: any;
		readonly namespace: any;
		properties: any;
		readonly type: any;

	}

	interface DynamicObjectConstructor {
		new(value?:any): DynamicObject;
		readonly prototype: DynamicObject;
	}

	const DynamicObject: DynamicObjectConstructor;

	interface DynamicTypeDefinition extends DynamicTypesDynamicTypeDefinition
	{
		readonly findAllBinding: any;
		readonly findByIdBinding: any;
		readonly findRelationBinding: any;
		readonly hasChildrenInRelationBinding: any;
		iconResource: any;
		readonly id: any;
		name: any;
		namespace: any;
		properties: any;
		readonly type: any;

		dynamictypes(): DynamicTypeDefinition;
	}

	interface DynamicTypeDefinitionConstructor {
		new(value?:any): DynamicTypeDefinition;
		readonly prototype: DynamicTypeDefinition;
	}

	const DynamicTypeDefinition: DynamicTypeDefinitionConstructor;

	interface TypeHierarchyRootFolder extends DynamicTypesTypeHierarchyRootFolder
	{

		dynamictypes(): DynamicTypeDefinition;
	}

	interface TypeHierarchyRootFolderConstructor {
		new(value?:any): TypeHierarchyRootFolder;
		readonly prototype: TypeHierarchyRootFolder;
	}

	const TypeHierarchyRootFolder: TypeHierarchyRootFolderConstructor;

    }    
