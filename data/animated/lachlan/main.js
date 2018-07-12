var person = prompt("Test", "Harry Potter");
var red = [0, 100, 63]; // Declaring individual color with variables such as red, green etc. 
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

letterColors = [red, orange, green, blue, purple]; // I have stored different colors in variables before. Here i am combining all of them with one variable.
if(10 > 3) {
    bubbleShape = "circle"; // I have used logic so for instance, if 10 is greater than 3 then bubbleShape will be circle otherwise square.
}
else {
    bubbleShape = "square";
}

var lettersOnly = /^[a-zA-Z]+ [a-zA-Z]+$/; // Regular expression matches both first name and last name; letters only.
var allLetter = /^[a-zA-Z]+$/; // Regular expression matches all letters.

if (person.match(lettersOnly))
{
		drawName(person, letterColors); 
		bounceBubbles();  // Here I am invoking the function by calling it name with parenthesis bounceBubbles.	
}
else if(person.match(allLetter)) {
	alert("Please enter your first name and last name!");
}
else {
	 alert("Name must contain letters only!");
}
