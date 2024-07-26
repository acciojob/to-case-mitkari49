function toCase(text) {//Jayesh
	const upperCaseText=text.toUpperCase();
	return text+"-"+upperCaseText;
}

// DO not change the code below

const text = prompt("Enter text:");//"Jayesh"
alert(toCase(text));
