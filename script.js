function toCase(text) {//Jayesh
	//handling the empty string
	if(text===""){
		return "-";
	}
	//converted the string and returnwd with hyphen delimeter
	return text.toLowerCase()+"-"+text.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");//"Jayesh"
alert(toCase(text));
