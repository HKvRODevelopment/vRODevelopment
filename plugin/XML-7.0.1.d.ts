/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface XMLDocument
	{

		appendChild(child?: XMLNode): void;
		cloneNode(deep?: boolean): void;
		createCDATASection(name?: Object): XMLNode;
		createComment(name?: String): XMLNode;
		createElement(name?: String): XMLElement;
		createProcessingInstruction(target?: String, data?: String): XMLNode;
		createTextNode(name?: String): XMLNode;
		getChildNodes(): void;
		getDocumentElement(): XMLElement;
		getElementsByTagName(name?: String): void;
		insertBefore(newNode?: XMLNode, refNode?: XMLNode): void;
		normalize(): void;
		removeChild(oldChild?: XMLNode): void;
		replaceChild(newNode?: XMLNode, oldNode?: XMLNode): void;
	}

	declare const XMLDocument: XMLDocument;

	interface XMLElement
	{
		tagName: String;
		textContent: String;

		appendChild(child?: XMLNode): void;
		cloneNode(deep?: boolean): void;
		getAttributes(): void;
		getChildNodes(): XMLNodeList;
		getElementsByTagName(name?: String): void;
		hasAttribute(name?: String): void;
		insertBefore(newNode?: XMLNode, refNode?: XMLNode): void;
		normalize(): void;
		removeAttribute(name?: String): void;
		removeChild(oldChild?: XMLNode): void;
		replaceChild(newNode?: XMLNode, oldNode?: XMLNode): void;
		setAttribute(name?: String, value?: String): void;
	}

	declare const XMLElement: XMLElement;

	interface XMLManager
	{

	}

	interface XMLManagerConstructor {
		new(value?:any): XMLManager;
		readonly prototype: XMLManager;
		fromString(stringContext?: String): XMLDocument;
		getDocumentContent(document?: XMLDocument): void;
		loadDocument(path?: String, validate?: boolean): XMLDocument;
		loadDocumentWithEncoding(path?: String, encoding?: String, validate?: boolean): XMLDocument;
		newDocument(): XMLDocument;
		saveDocument(document?: XMLDocument, path?: String, systemDtD?: String, publicDtD?: String): void;
		saveDocumentWithEncoding(document?: XMLDocument, path?: String, encoding?: String, systemDtD?: String, publicDtD?: String): void;
		validateDocument(document?: XMLDocument, systemDtD?: String, publicDtD?: String): void;
	}

	declare const XMLManager: XMLManagerConstructor;

	interface XMLNamedNodeMap
	{
		length: String;

		getNamedItem(name?: String): XMLNode;
		item(index?: Number): XMLNode;
	}

	declare const XMLNamedNodeMap: XMLNamedNodeMap;

	interface XMLNode
	{
		nodeName: String;
		nodeValue: String;
		parentNode: String;

		appendChild(child?: XMLNode): void;
		cloneNode(deep?: boolean): void;
		getChildNodes(): XMLNodeList;
		insertBefore(newNode?: XMLNode, refNode?: XMLNode): void;
		normalize(): void;
		removeChild(oldChild?: XMLNode): void;
		replaceChild(newNode?: XMLNode, oldNode?: XMLNode): void;
	}

	declare const XMLNode: XMLNode;

	interface XMLNodeList
	{
		length: String;

		item(index?: Number): void;
	}

	declare const XMLNodeList: XMLNodeList;

    
            
