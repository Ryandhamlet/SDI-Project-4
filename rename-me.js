//Ryan Hamlet
//SDI 1305 
//30 May 2013

//Does a string follow a 123-456-7890 pattern like a phone number?
var	verifyPhone = function(phoneNumber){
	var	digits = "1234567890";
	if (phoneNumber.length != 12){
		return false;
	}
	for(var i = 0; i < 3; i++ ){
		if(digits.indexOf(phoneNumber.charAt(i)) === -1){
			return false;	
		}
	}
		if (phoneNumber.charAt(3) != "-"){
			return false;	
		}
	for (var p = 4; p <7; p++){
		if( digits.indexOf(phoneNumber.charAt(p)) === -1){
			return false;
		}
	}
		if (phoneNumber.charAt(7) != "-"){
			return false;	
		}
	for (var x = 8; x <12; x++){
		if(digits.indexOf( phoneNumber.charAt(x)) === -1){
			return false;
		}
		else{
			return true;
		}
		
	}
 };




