/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.ssh {
export function registerVSOonHost(host?: string, username?: string, password?: SecureString, localPath?: Path, remotePath?: string): void {try {
	// New SSH session
	var session = new SSHSession(host, username) ;
	
	// Connect with password
	session.connectWithPassword(password);
	
	// upload pub key file
	var errorCode = session.putFile(localPath+".pub",remotePath);

	if ( errorCode != 0 )  {
		session.disconnect();
		throw "Registration of VS-O public key on '"+host+"' for user '"+username+"' failed (file transfer):"  + session.getError();
	}

	// Register the public key for this user
	var fullRemoteFile = remotePath+"/"+com.vmware.basic.getFileName(localPath)+".pub";
	var cmd = "cd ; mkdir -p .ssh ; cat "+ fullRemoteFile + " >> ~/.ssh/authorized_keys ; rm -f "+fullRemoteFile;
	System.log("Executing: '"+cmd+"'");
	session.executeCommand( cmd, true );
	var error = session.getError();	
	session.disconnect();

	if ( error != null  &&  error.equals("") == false )  {
		throw "Registration of VS-O public key on '"+host+"' for user '"+username+"' failed (cmd):"  + error;
	}
	
	System.log( "Registration of VS-O public key completed on '"+host+"' for user '"+username+"'" );
	Server.log( "Registration of VS-O public key completed on '"+host+"' for user '"+username+"'" );
} catch (ex) {
	throw "Registration of VS-O public key on '"+host+"' for user '"+username+"' failed."  + ex;
}	
}
}
