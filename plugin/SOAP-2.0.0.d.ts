/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface InterceptorHandler
	{

	}

	declare const InterceptorHandler: InterceptorHandler;

	interface SOAPAuthentication
	{
		rawAuthProperties: String[];
		type: String;

		getRawAuthProperty(index?: Number): String;
	}

	declare const SOAPAuthentication: SOAPAuthentication;

	interface SOAPAuthenticationManager
	{

		createAuthentication(type?: String, params?: String[]): SOAPAuthentication;
		getSessionModes(): String[];
		getSOAPAuthentications(): String[];
	}

	declare const SOAPAuthenticationManager: SOAPAuthenticationManager;

	interface SOAPDynamicInParameter
	{

	}

	interface SOAPDynamicInParameterConstructor {
		new(value?:any): SOAPDynamicInParameter;
		readonly prototype: SOAPDynamicInParameter;
	}

	declare const SOAPDynamicInParameter: SOAPDynamicInParameterConstructor;

	interface SOAPDynamicOutParameter
	{

	}

	declare const SOAPDynamicOutParameter: SOAPDynamicOutParameter;

	interface SOAPHost
	{
		authentication: SOAPAuthentication;
		connectionTimeout: Number;
		id: String;
		keyId: String;
		name: String;
		preferredEndpointURL: String;
		proxyHost: String;
		proxyPort: Number;
		requestTimeout: Number;
		wsdlFileContent: String;
		wsdlLocal: boolean;
		wsdlUri: String;

		createWorkflow(operationName?: String, workflowName?: String, category?: WorkflowCategory, options?: Properties): Workflow;
		getOperation(operationName?: String): SOAPOperation;
		getOperations(): String[];
	}

	interface SOAPHostConstructor {
		new(value?:any): SOAPHost;
		readonly prototype: SOAPHost;
	}

	declare const SOAPHost: SOAPHostConstructor;

	interface SOAPHostManager
	{

		addHost(host?: SOAPHost): SOAPHost;
		getHost(id?: String): SOAPHost;
		getHosts(): String[];
		reloadConfiguration(): void;
		removeHost(id?: String): SOAPHost;
		updateHost(host?: SOAPHost): SOAPHost;
	}

	declare const SOAPHostManager: SOAPHostManager;

	interface SOAPInterceptor
	{

		setRequestBodyInterceptor(requestBodyInterceptor?: InterceptorHandler): void;
		setRequestHeaderInterceptor(requestHeaderInterceptor?: InterceptorHandler): void;
		setResponseBodyInterceptor(responseBodyInterceptor?: InterceptorHandler): void;
		setResponseHeaderInterceptor(responseHeaderInterceptor?: InterceptorHandler): void;
	}

	interface SOAPInterceptorConstructor {
		new(value?:any): SOAPInterceptor;
		readonly prototype: SOAPInterceptor;
	}

	declare const SOAPInterceptor: SOAPInterceptorConstructor;

	interface SOAPOperation
	{
		name: String;

		createSOAPRequest(): SOAPRequest;
		getHost(): SOAPHost;
		getInHeaders(): String[];
		getInParameters(): String[];
		getOutParameters(): String[];
		invoke(request?: SOAPRequest): SOAPResponse;
		invokeWithInterceptor(request?: SOAPRequest, interceptor?: SOAPInterceptor): SOAPResponse;
	}

	declare const SOAPOperation: SOAPOperation;

	interface SOAPRequest
	{

		addInHeaderAttribute(headerName?: String, attributeName?: String, attributeValue?: Object): void;
		addInParameterAttribute(parameterName?: String, attributeName?: String, attributeValue?: Object): void;
		addRawHeader(rawHeader?: String): void;
		setHttpHeader(key?: String, value?: String): void;
		setHttpHeaders(httpHeaders?: Properties): void;
		setInHeader(headerName?: String, headerValue?: Object): void;
		setInParameter(name?: String, value?: Object): void;
	}

	declare const SOAPRequest: SOAPRequest;

	interface SOAPResponse
	{

		getOutHeader(headerName?: String): Object;
		getOutHeaderAttribute(headerName?: String, attributeName?: String): Object;
		getOutHeaderAttributes(headerName?: String): String[];
		getOutHeaders(): String[];
		getOutParameter(parameterName?: String): Object;
		getOutParameterAttribute(parameterName?: String, attributeName?: String): Object;
		getOutParameterAttributes(parameterName?: String): String[];
		getOutParameters(): String[];
	}

	declare const SOAPResponse: SOAPResponse;

    
    // Finder objects.
declare namespace SOAP {
	interface Header
	{
		arrayType: any;
		attributeDescriptions: any;
		name: any;
		type: any;

		ChildrenHeaders(): Header;
	}

	interface HeaderConstructor {
		new(value?:any): Header;
		readonly prototype: Header;
	}

	const Header: HeaderConstructor;

	interface Host extends SOAPHost
	{
		authenticationType: any;
		connectionTimeout: any;
		id: any;
		keyId: any;
		name: any;
		preferredEndpointURL: any;
		proxyHost: any;
		proxyPort: any;
		requestTimeout: any;
		wsdlFileContent: any;
		wsdlLocal: any;
		wsdlUri: any;

		Operations(): Operation;
	}

	interface HostConstructor {
		new(value?:any): Host;
		readonly prototype: Host;
	}

	const Host: HostConstructor;

	interface Input
	{
		attributeDescriptions: any;
		displayName: any;

		ChildrenHeaders(): Header;
		ChildrenParameters(): Parameter;
	}

	interface InputConstructor {
		new(value?:any): Input;
		readonly prototype: Input;
	}

	const Input: InputConstructor;

	interface Operation extends SOAPOperation
	{
		name: any;

		Inputs(): Input;
		Outputs(): Output;
	}

	interface OperationConstructor {
		new(value?:any): Operation;
		readonly prototype: Operation;
	}

	const Operation: OperationConstructor;

	interface Output
	{
		attributeDescriptions: any;
		displayName: any;

		ChildrenHeaders(): Header;
		ChildrenParameters(): Parameter;
	}

	interface OutputConstructor {
		new(value?:any): Output;
		readonly prototype: Output;
	}

	const Output: OutputConstructor;

	interface Parameter
	{
		arrayType: any;
		attributeDescriptions: any;
		name: any;
		type: any;

		ChildrenParameters(): Parameter;
	}

	interface ParameterConstructor {
		new(value?:any): Parameter;
		readonly prototype: Parameter;
	}

	const Parameter: ParameterConstructor;

    }    
