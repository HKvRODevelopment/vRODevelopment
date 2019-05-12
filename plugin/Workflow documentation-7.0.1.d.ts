/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface WorkflowDocumentationService
	{

		getWorkflowCategoryDocumentation(workflow?: Workflow): MimeAttachment;
		getWorkflowDocumentation(workflow?: Workflow): MimeAttachment;
	}

	declare const WorkflowDocumentationService: WorkflowDocumentationService;

    
            
