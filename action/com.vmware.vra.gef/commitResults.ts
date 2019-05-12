/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function commitResults(host?: vCAC.VCACHost, module?: Module, operationContextArgument?: string, executionStatusArgument?: any, additionalArguments?: Properties, endpointName?: string, workflowOperationName?: string): void {// 'host' and 'module' are treated as a global variable for clarity

// sleep and retries, also treated as globals (default both to 5)
var intervalBetweenRetriesInSeconds = getConfigValue("intervalBetweenRetriesInSeconds", 5);
var configuredRetries = getConfigValue("retryAttempts", 5);

// for array results, default slice size is 1000 records per workflowoperation argument
var configuredSliceSize = getConfigValue("argumentOutputArraySize", 1000);

var workflowOperation = createWorkflowOperationWithRetries(endpointName, workflowOperationName);

System.debug("committing WorkflowOperationArguments...");
commitArgumentWithRetries(workflowOperation, "OperationContext", operationContextArgument);
commitExecutionStatus(workflowOperation, executionStatusArgument);
commitArguments(workflowOperation, additionalArguments);

renameWorkflowOperationWithRetries(workflowOperation, workflowOperationName);

///////////////////////////
function createWorkflowOperationWithRetries(endpointName, workflowOperationName) {
	var purpose = "creating temporary WorkflowOperation";
	System.debug(purpose + "...");
	return withRetries(purpose, createWorkflowOperation, endpointName, workflowOperationName);
}

function createWorkflowOperation(args) {
	return module.createTempWorkflowOperation(host, arguments[0], arguments[1]);
}

function commitExecutionStatus(workflowOperation, executionStatusArgument) {
	var argumentName = "ExecutionStatus";
	var serialiedValue = serializeArgumentValue(executionStatusArgument);
	commitArgumentWithRetries(workflowOperation, argumentName, serialiedValue);
}

function commitArgumentWithRetries(workflowOperation, argumentName, argumentValue) {
	var purpose = "creating WorkflowOperationArgument for '" + argumentName + "'";
	System.debug(purpose + "...");
	withRetries(purpose, commitSingleArgument, workflowOperation, argumentName, argumentValue);
}

function commitSingleArgument(args) {
	return module.commitWorkflowOperationArgument(host, arguments[0], arguments[1], arguments[2]);
}

function commitArguments(workflowOperation, additionalArguments) {
	if (additionalArguments == null) {
		return;
	}
	for (var argumentName in additionalArguments) {
		var argumentValue = additionalArguments[argumentName];
		var argumentValueClass = System.getObjectClassName(argumentValue);
		
		if (argumentValueClass === "Array") {
			System.debug("argument '" + argumentName + "' is an array of objects. Slicing...");
			var numberOfSlices = getNumberOfSlices(argumentValue);

			// commit count argument
			var serializedValue = serializeArgumentValue(numberOfSlices);
			commitArgumentWithRetries(workflowOperation, argumentName + "_count", serializedValue);
			
			// commit the individual arguments
			for (var i = 1; i <= numberOfSlices; i++) {
				var slice = getSlice(i, argumentValue);
				var serializedValue = serializeArgumentValue(slice);

				commitArgumentWithRetries(workflowOperation, argumentName + "_" + i, serializedValue);				
			}
		}
		else {
			System.debug("argument '" + argumentName + "' is a single object.  Serializing accordingly...");
			var serializedValue = serializeArgumentValue(argumentValue);
			commitArgumentWithRetries(workflowOperation, argumentName, serializedValue);
		}
	}
}

function getNumberOfSlices(argumentValue) {
	var div = Math.floor(argumentValue.length / configuredSliceSize);
	var rem = argumentValue.length % configuredSliceSize;
	
	if(rem > 0) {
		div = div +1;
	}
	return div;
}

function getSlice(curSlice, argumentValue) {
	var start = (curSlice-1) * configuredSliceSize;
	var end = Math.min(curSlice * configuredSliceSize, argumentValue.length+1);
	
	return argumentValue.slice(start, end);
}

function serializeArgumentValue(argumentValue) {
	var argumentValueClass = System.getObjectClassName(argumentValue);
	
	if (argumentValueClass === "Array") {
		return GEFJsonHelper.serializeArray(argumentValue);
	}
	return GEFJsonHelper.serialize(argumentValue);
}

function renameWorkflowOperation(workflowOperation, workflowOperationName) {
	return module.renameWorkflowOperation(workflowOperation, workflowOperationName);
}

function renameWorkflowOperationWithRetries(workflowOperation, workflowOperationName) {
	var purpose = "renaming WorkflowOperation to the final name - " + workflowOperationName;
	System.debug(purpose + "...");
	withRetries(purpose, renameWorkflowOperation, workflowOperation, workflowOperationName);
}


// Wraps a function with it's arguments with some retries.  Nulls cannot be returned by the called function or else a retry will be attempted.
// Therefore, functions normally 'void' should just return a boolean "true" to indicate they've completed successfully
function withRetries(purpose, func, args) {
	// must be at least '1'.  'configuredRetries' are a global variable retrieved at the beginning to prevent numerous lookups
	var attempts = 1 + configuredRetries;
	var currentTry = 1;
	var failed = false;
	var failureReason;
	
	while (currentTry <= attempts) {
		try {
			if (currentTry > 1) {
				System.debug("Retrying attempt " + (currentTry - 1) + ", of " + configuredRetries + " configured retry attempts...");
			}
			var funcArgs = skipEntries(2, arguments);
			var obj = func.apply(this, funcArgs);
			if (obj != null) {
				System.debug("successfully finished " + purpose);
				failed = false;
				return obj;
			}
			failed = true;
			failureReason = "Method returned an unexpected null.";
		} catch (e) {
			failed = true;
			failureReason = "Exception caught: " + e;
		} finally {
			if (failed) {
				var failureMessage = "Failed " + purpose + ". " + failureReason; 
				// if there's going to be a Retry, just warn about the problem
				if ((currentTry + 1) <= attempts) {
					if (intervalBetweenRetriesInSeconds != 0) {
						System.warn(failureMessage + "  Retrying after " + intervalBetweenRetriesInSeconds + " seconds...");
						System.sleep(intervalBetweenRetriesInSeconds * 1000);
					} else {
						System.warn(failureMessage + "  Retrying immediately...");
					}
				} else {
					System.error(failureMessage);
					throw failureMessage;
				}
			}
		}
		currentTry++;
	} 
}

// Skip the first 2 entries of an Array
// These are the arguments to the "withRetries" function - as they are 'purpose' and 'func' and shouldn't get passed to the other functions
function skipEntries(numToSkip, arr) {
	var result = new Array();
	for (var i = numToSkip; i < arr.length; i++) {
		result.push(arr[i]);
	}
	return result;
}

function getConfigValue(attributeName, defaultValue) {
	var configElement = com.vmware.vra.gef.getEndpointFrameworkConfigElement();
	var workflowMappingsAttribute = configElement.getAttributeWithKey(attributeName);
	
	if (workflowMappingsAttribute == null) {
		System.warn("A Generic Endpoint Framework configuration attribute of '" + attributeName + "' was not found. Using the default value of " + defaultValue);
		return defaultValue;
	} else if (workflowMappingsAttribute.value == null) {
		System.warn("The Generic Endpoint Framework configuration attribute of '" + attributeName + "' does not have a value. Using the default of " + defaultValue);
		return defaultValue;
	}
	return workflowMappingsAttribute.value;
}
}
}
