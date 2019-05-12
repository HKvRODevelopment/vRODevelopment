/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.generated {
export function getComputerOrganization(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject {var psScript = ''
psScript +='param ([string] $ComputerName = \'.\')\n';
psScript +='function Get-OSType {\n';
psScript +='	$Report = "" | Select-Object -property Computer,OSType\n';
psScript +='	$Report.Computer = $ComputerName\n';
psScript +='	$Report.OSType = (Get-WmiObject -Class Win32_OperatingSystem -ComputerName $ComputerName).OSType\n';
psScript +='	$Report\n';
psScript +='}\n';
psScript +='$ComputerName = [System.Net.Dns]::GetHostName()\n';
psScript +='if ($ComputerName -is [array]) {\n';
psScript +='	$ComputerNames = $ComputerName\n';
psScript +='	foreach ($ComputerName in $ComputerNames) {\n';
psScript +='		Get-OSType -ComputerName $ComputerName\n';
psScript +='	}\n';
psScript +='} else {\n';
psScript +='	Get-OSType -ComputerName $ComputerName\n';
psScript +='}\n';
return com.vmware.library.powershell.invokeScript( host,psScript,sessionId) ;
}
}
