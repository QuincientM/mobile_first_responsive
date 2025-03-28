let codeOutput = document.getElementById("code-output");

//Assignment operator
let x = 3;
console.log("the assignment operator is the equal sign", x);

// the * is the multiplication operator
let z = x * 3;
console.log("x * 3 = ",z);

// the + sign can be used as an addition operator for numbers
let y = x + 5;
console.log("x + 5 = ",y);

// the + sign can be used to concatenate operator for strings
let a = ""
let b = a + y;
console.log("a + y =",b);

// the % is the modulus operator
// it returns the remainder of a number after division
console.log("y % 3 = ", y % 3);

// the comparison operator compares values
//the comparison operator is a == or ===
// double == tests for equal values
// triple === tests for equal values and equal data types

if(b === y){
    console.log("b == y", b === y);
}
else{
    console.log("b did not equal y", b === y);
}
codeOutput.innerHTML = "check operators in console"