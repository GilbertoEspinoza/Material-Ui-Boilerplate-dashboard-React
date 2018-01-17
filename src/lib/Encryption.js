
import axios from 'axios';

exports.encode =  function (s, k) {
   if(s===null) {
		  return null;
	 }

		var enc = "";
  		for (var i = 0; i < s.length; i++) {
			// create block
			var a = s.charCodeAt(i);
			// bitwise XOR
			var b = a ^ k;
			enc = enc + String.fromCharCode(b);
		}
		return enc;
	}
