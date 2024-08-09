// Exercise 1
let age = 25;
const birthYear = 1999;
let name = "John Doe";
const isStudent = true;

name = "Jane Doe";
// birthYear = 2000;
// isStudent= false;

console.log(age, birthYear, name, isStudent);

let toPrintE1 = `${age}, ${birthYear}, "..."`; 

document.getElementById("e1").innerHTML = toPrintE1;