/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.configuration {
export function updateOrchestratorServerConfiguration(host?: vCACCAFE.VCACHost, useDefault?: boolean, name?: string, description?: string, orchestratorHost?: string, port?: string, useSSO?: boolean, username?: string, password?: SecureString): void {var configurationService = host.createAdvancedDesignerClient().getAdvancedDesignerConfigurationService();
var configurations = configurationService.getConfigurations(host.tenant);
var configuration = new vCACCAFEConfiguration();

if(configurations[0].getId() != null) {
	configuration.setId(configurations[0].getId());
}

if(useDefault == true) {
	System.log("Updating XaaS server configuration...");
	configurationService.useDefaultConfiguration(host.tenant);
	System.log("XaaS server configuration updated.");
} else {
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
	System.log("Updating XaaS server configuration...");
	configurationService.createOrUpdateConfiguration(host.tenant, configuration);
	System.log("XaaS server configuration updated.");
}
}
}
