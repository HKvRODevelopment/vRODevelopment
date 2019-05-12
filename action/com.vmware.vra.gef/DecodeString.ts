/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function DecodeString(encodedString?: string): string {var clearString = null;
if(encodedString == null) 
{
     clearString = null;
}
else
{
    if (encodedString.length == 0) {
      clearString = "";
    }
    else if (encodedString.length < 32) 
   {
       throw("SecureString too short or bad encoding !");
    }
                
    var pos = encodedString.indexOf('A');
    var cnt = encodedString.substring(0, pos);
    var nbChar = parseInt(cnt);
    pos++;

    var result = ""; 
    for (var i = 0; i < nbChar; i++, pos += 3) 
   {
        var val = encodedString.substring(pos + 1, pos + 3);
        var ch = parseInt(val, 16);
        result += String.fromCharCode(ch);
    }

    clearString = result;
}
return clearString;
}
}
