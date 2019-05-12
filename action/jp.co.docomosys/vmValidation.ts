/// <reference path="./../../includes.d.ts"/>

namespace jp.co.docomosys {
export function vmValidation(inputdata?: string, maxhostLength?: number, storageRevname?: string, maxCore?: number, maxMemory?: number, maxDisk?: number, revName?: string): string {json = JSON.parse(inputdata);

var loopcount = 1;
var warningMsg = new Array;
for (var vmdata of json){

	//必須入力チェック
	if(vmdata['vm_name'] == ""){
			warningMsg += loopcount + "行目の仮想マシン名が設定されていません。\n";
	}
	
	if(vmdata['catalog_obj'] == ""){
			warningMsg += loopcount + "行目のカタログオブジェクトが設定されていません。\n";
	}
	
	if(vmdata['cpu_socket'] == ""){
		warningMsg += loopcount + "行目のCPUソケット数が設定されていません。\n";
	}

	if(vmdata['cpu_core'] == ""){
		warningMsg += loopcount + "行目のCPUコア数が設定されていません。\n";
	}
	
	if(vmdata['vm_memory'] == ""){
		warningMsg += loopcount + "行目のメモリ量が設定されていません。\n";
	}
	
	if(vmdata['deploy_datastore01'] == ""){
		warningMsg += loopcount + "行目のdisk01データストア予約ポリシーが設定されていません。\n";
	}
	
	if(vmdata['disk01_capacity'] == ""){
		warningMsg += loopcount + "行目のdisk01容量が設定されていません。\n";
	}
	
	if(vmdata['vnic0_address'] == ""){
		warningMsg += loopcount + "行目のvnic0にアドレスが設定されていません。\n";
	}
	
	if(vmdata['vnic0_subnetmask'] == ""){
		warningMsg += loopcount + "行目のvnic0にサブネットマスクが設定されていません。\n";
	}
	
	if(vmdata['vnic0_gateway']== ""){
		warningMsg += loopcount + "行目のvnic0にデフォルトゲートウェイが設定されていません。\n";
	}
	
	if(vmdata['vnic0_gateway']== ""){
		warningMsg += loopcount + "行目のvnic0にデフォルトゲートウェイが設定されていません。\n";
	}

	if(vmdata['businessgroup_name'] == ""){
		warningMsg += loopcount + "行目のビジネスグループ名が設定されていません。\n";
	}
	
	if(vmdata['vc_vmusername'] == ""){
		warningMsg += loopcount + "行目のOSユーザ名が設定されていません。\n";
	}
	
	if(vmdata['vc_vmpassword'] == ""){
		warningMsg += loopcount + "行目のOSパスワードが設定されていません。\n";
	}
	
	if(vmdata['password'] == ""){
		warningMsg += loopcount + "行目のvRAパスワードが設定されていません。\n";
	}
	

	//制約チェック
	if(vmdata['cpu_core'] > maxCore){
		warningMsg += loopcount + "行目のコア数が" + vmdata['cpu_core'] + "に設定されています。最大値設定は" + maxCore + "です。\n";
	}
	
	if(vmdata['vm_memory'] > maxMemory){
		warningMsg += loopcount + "行目のメモリ量が" + vmdata['vm_memory'] + "に設定されています。最大値設定は" + maxMemory + "です。\n";
	}
	
	if(vmdata['reservation_policy'].match(revName) == null && vmdata['reservation_policy'] != ""){
			warningMsg += loopcount + "行目の予約ポリシーが" + vmdata['reservation_policy'] + "に設定されています。" + revName + "が含まれていません。\n";
	}
	
	if(vmdata['disk01_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk01容量設定が" + vmdata['disk01_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore01'].match(storageRevname) == null && vmdata['deploy_datastore01'] != ""){
		warningMsg += loopcount + "行目のdisk01データストア予約ポリシー名が" + vmdata['deploy_datastore01'] + "に設定されています。" +  storageRevname + "が含まれていません。\n";
	}
	
	if(vmdata['disk02_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk02容量設定が" + vmdata['disk02_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore02'].match(storageRevname) == null && vmdata['deploy_datastore02'] != ""){
		warningMsg += loopcount + "行目のdisk02データストア予約ポリシー名が" + vmdata['deploy_datastore02'] + "に設定されています。" +  storageRevname + "が含まれていません。\n";
	}
	
	if(vmdata['disk03_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk03容量が" + vmdata['disk03_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore03'].match(storageRevname) == null && vmdata['deploy_datastore03'] != ""){
		warningMsg += loopcount + "行目のdisk03データストア予約ポリシー名が" + vmdata['deploy_datastore03'] + "に設定されています。" +  storageRevname+ "が含まれていません。\n";
	}
	
	if(vmdata['disk04_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk04容量が" + vmdata['disk04_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore04'].match(storageRevname) == null && vmdata['deploy_datastore04'] != ""){
		warningMsg += loopcount + "行目のdisk04データストア予約ポリシー名が" + vmdata['deploy_datastore04'] + "に設定されています。" +  storageRevname+ "が含まれていません。\n";
	}
	
	if(vmdata['disk05_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk05容量が" + vmdata['disk05_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore05'].match(storageRevname) == null && vmdata['deploy_datastore05'] != ""){
		warningMsg += loopcount + "行目のdisk05データストア予約ポリシー名が" + vmdata['deploy_datastore05'] + "に設定されています。" +  storageRevname + "が含まれていません。\n";
	}
	
	if(vmdata['disk06_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk06容量が" + vmdata['disk06_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore06'].match(storageRevname) == null && vmdata['deploy_datastore06'] != ""){
		warningMsg += loopcount + "行目のdisk06データストア予約ポリシー名が" + vmdata['deploy_datastore06'] + "に設定されています。" +  storageRevname + "が含まれていません。\n";
	}
	
	if(vmdata['disk07_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk07容量が" + vmdata['disk07_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore07'].match(storageRevname) == null && vmdata['deploy_datastore07'] != ""){
		warningMsg += loopcount + "行目のdisk07データストア予約ポリシー名が" + vmdata['deploy_datastore07'] + "に設定されています。" +  storageRevname+ "が含まれていません。\n";
	}
	
	if(vmdata['disk08_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk08容量が" + vmdata['disk08_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore08'].match(storageRevname) == null && vmdata['deploy_datastore08'] != ""){
		warningMsg += loopcount + "行目のdisk01データストア予約ポリシー名が" + vmdata['deploy_datastore08'] + "に設定されています。" +  storageRevname + "が含まれていません。\n";
	}
	
	if(vmdata['disk09_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk09容量が" + vmdata['disk09_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore09'].match(storageRevname) == null && vmdata['deploy_datastore09'] != ""){
		warningMsg += loopcount + "行目のdisk01データストア予約ポリシー名が" + vmdata['deploy_datastore09'] + "に設定されています。" +  storageRevname + "が含まれていません。\n";
	}
	
	if(vmdata['disk10_capacity'] > maxDisk){
		warningMsg += loopcount + "行目のdisk10容量が" + vmdata['disk10_capacity'] + "に設定されています。 最大値設定は" + maxDisk + "です。\n";
	}
	
	if(vmdata['deploy_datastore10'].match(storageRevname) == null && vmdata['deploy_datastore10'] != ""){
		warningMsg += loopcount + "行目のdisk10データストア予約ポリシー名が" + vmdata['deploy_datastore10'] + "に設定されています。" +  storageRevname + "が含まれていません。\n";
	}

	if(vmdata['deploy_host'].length != maxhostLength){
		warningMsg += loopcount + "行目のデプロイホスト文字数が" + vmdata['deploy_host']  + "に設定されています。 設定値は" + maxhostLength + "です。\n";
	}

	loopcount++;
}

if (warningMsg[0] == null){
	warningMsg += "Check OK"
}

return warningMsg;
}
}
