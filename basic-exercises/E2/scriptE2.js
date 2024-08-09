// Exercise 2
let number = 5;
let numberAsString = "3";

let result = number + numberAsString;
 console.log(result); // handles number as 'String'

let subtractionResult = number - numberAsString;
console.log(subtractionResult);

let toPrintE2 = `${result}, <br> ${subtractionResult}`; 

document.getElementById("e2").innerHTML = toPrintE2;
