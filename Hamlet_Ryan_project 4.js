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

// Is the string a URL (Does it start with http:// or https://) ?
var verifyURL = function(URL){
		var prefix1 = "http://";
		var prefix2 = "https://";
		var prefix3 = "www.";
	
		if (URL.indexOf(prefix1)===0){
			return true;
		}
		if (URL.indexOf(prefix2)===0){
			return true;
		}
		if (URL.indexOf(prefix3)===0){
			return true;
		}
		else{
			return false;
		}
 
	};
//Number Questions
var library2 = function () {
	
	var fDeci = function (num,afterDeci) {
        return Number(num.toFixed(afterDeci));
    };
    

	var fuzzyNum = function (number,cNumber,perc) {
		var percentage = (number/cNumber) * 100;
		if ((number >= cNumber && percentage >= perc) || (number < cNumber && percentage < perc)) {
			return false;
		} else {
			return true;
		}
	};
	
    var strNum = function (number) {
		return Number(number);
    
};
	return {
		"fDeci" : fDeci,
		"fuzzyNum" : fuzzyNum,
		"strNum" : strNum

	};
};

// Array Questions
var library3 = function () {
	
	var smallestNum = function (element,number) {
		element.sort(function(a,b){return a-b;});
		if (number >= element[0] && number < element[element.length-1]) {
			element.push(number);
			element.sort(function(a,b){return a-b;});
			var result = element[element.lastIndexOf(number) + 1];
			return result;
		} else {
			return null;
		}
	};
        var total = function (element) {
		var total = 0;
		for (var i = 0, j = element.length; i < j; i++) {
		if (element[i]/1 === element[i]) {
		total += element[i];
			}
		}
		return total;
	};


	return {
		"smallestNum" : smallestNum,
		"total" : total

	};
};


console.log("String Verification");
console.log(verifyPhone("663-255-2238"));
console.log(verifyURL("http://fullsail.edu"));



console.log("Number");
var lib2 = library2();
console.log(lib2.fDeci(2.116,2));
console.log(lib2.fuzzyNum(10,5,50));
console.log(lib2.fuzzyNum(5,10,50));
console.log(lib2.strNum("7790"));

console.log("Array");
var arrayLib = library3();
var numberList = [1,4,7,9,10,14,15];
console.log(arrayLib.smallestNum(numberList,12));
var randomList = [1,"pickles",3,"onions",5,"10",6,"SDI"];
console.log(arrayLib.total(randomList));







