/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.configuration {
export function validateOrchestratorServerConfiguration(host?: vCACCAFE.VCACHost, useDefault?: boolean, name?: string, description?: string, orchestratorHost?: string, port?: string, useSSO?: boolean, username?: string, password?: SecureString): boolean {var configurationService = host.createAdvancedDesignerClient().getAdvancedDesignerConfigurationService();
var status;

if(useDefault == true) {
	System.log("Validating XaaS server configuration...");
	status = configurationService.testDefaultConfiguration(host.tenant);
	System.log("XaaS server configuration status: " + status.value());
} else {
	var configuration = new vCACCAFEConfiguration();
	configuration.setTenantId(host.tenant);
	configuration.setSystemDefault(false);
	configuration.setName(name);
	configuration.setDescription(description);
	configuration.setHost(orchestratorHost);
	configuration.setPort(port);

	if(useSSO == false) {
		configuration.setSsoMode(false);
		configuration.setUsername(username);
		configuration.setPassword(password);
	} else {
		configuration.setSsoMode(true);
	}
	System.log("Validating XaaS server configuration...");
	status = configurationService.testConfiguration(host.tenant, configuration);
	System.log("XaaS server configuration status: " + status.value());
}
return (status == vCACCAFEConfigurationStatus.SUCCESS)

}
}
