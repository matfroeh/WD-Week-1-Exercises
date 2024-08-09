// E1
// Objective:

// Initialize an Array:

// Create an array called myArray containing the following values in 
// order: 42, "Hello, world!", true, 3.14, "JavaScript".
// Print the Array:
// Use console.log to print the array to the console.
let myArray = [42, 'Hello, world!', true, 2.14, 'JavaScript'];
console.log(myArray);

// Access Array Elements:
// Access and print each element of the array individually using its index.
// Bonus points if you use a for loop!
for (i in myArray) {
    console.log(myArray[i]);
}

for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.forEach(element => console.log(element));

// Modify an Array Element:
// Change the value of the second element (index 1) to "Changed value", and print the array again to see the change.
myArray[1] = 'Changed Value';
console.log(myArray);

// E2
// Objective:

// Learn how to use the .push, .pop, .shift, and .unshift methods to manipulate arrays in JavaScript.

// Instructions:

// Initialize an Array:

// Create an array called myArray containing the following values in order: 1, 2, 3, 4, 5.
// Add Elements to the End of the Array:

// Use the .push method to add the values 6 and 7 to the end of the array.
// Print the array to the console.
let mySecondArray = [1, 2, 3, 4, 5];
mySecondArray.push(6, 7);
console.log(mySecondArray);

// Remove the Last Element from the Array:
// Use the .pop method to remove the last element of the array.
// Print the array to the console.
mySecondArray.pop();
console.log(mySecondArray);

// Remove the First Element from the Array:
// Use the .shift method to remove the first element of the array.
// Print the array to the console.
mySecondArray.shift();
console.log(mySecondArray);

// Add Elements to the Beginning of the Array:
// Use the .unshift method to add the values 0 and -1 to the beginning of the array.
// Print the array to the console.
mySecondArray.unshift(0, -1);
console.log(mySecondArray);

// E3
// Learn how to use the reverse and toReversed methods in JavaScript to manipulate arrays.

// Instructions:
// Reverse the First Array in Place:
// The reverse method reverses the array in place, which means the original array is modified.
// For example, array1.reverse() will change array1 from [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1].
const array1 = [1, 2, 3, 4, 5];
array1.reverse();

// Create a Reversed Copy of the Second Array:
// The toReversed method creates a new array that is the reversed version of the original array.
// This method does not modify the original array.
// For example, array2.toReversed() will return ['e', 'd', 'c', 'b', 'a'] while array2 remains ['a', 'b', 'c', 'd', 'e'].
const array2 = ['a', 'b', 'c', 'd', 'e'];
const reversedArray2 = array2.toReversed();


// Print the Results:
// Use console.log to print both the original and modified arrays to verify the results.
console.log(array1);
console.log(array2);
console.log(reversedArray2);

// E4

const arrayForSplice = [10, 20, 30, 40, 50];

// 1.
arrayForSplice.splice(2, 1, 35, 36);
console.log(arrayForSplice);

const arrayForToSplice = ['x', 'y', 'z'];

// 2.
const copiedArrayForToSplice = arrayForToSplice.toSpliced(1, 1, 'b', 'c');
console.log(arrayForToSplice);
console.log(copiedArrayForToSplice);

// E5
const arraySlicing = [2, 4, 6, 8, 10, 12, 14, 16];

const slicedPartOne = arraySlicing.slice(0, 1);
const slicedPartTwo = arraySlicing.slice(5, arraySlicing.length);

console.log(arraySlicing);
console.log(slicedPartOne);
console.log(slicedPartTwo);
console.log(arraySlicing);

// E6
const arrayForJoining = ['apple', 'banana', 'cherry', 'date'];

// Create different strings by joining the array elements with various delimiters
// Default delimiter (comma)

const commaSeperated = arrayForJoining.join(',');
console.log(commaSeperated);

// Using dash as delimiter
const dashSeperated = arrayForJoining.join('-');
console.log(dashSeperated);

// Using space as delimiter;
const spaceSeperated = arrayForJoining.join(' ');
console.log(spaceSeperated);

// Using ' and ' as delimiter
const apostropheSeperated = arrayForJoining.join('');
console.log(apostropheSeperated);

// Without any delimiter
const noSeperatorSeperated = arrayForJoining.join();
console.log(noSeperatorSeperated);

// E7
// Create an array called numberArray containing the following values
//  in order: 10, 20, 30, 40, 50.

const exerciseSevenNumberArray = [10, 20, 30, 40, 50];

for (i in exerciseSevenNumberArray) {
    console.log(exerciseSevenNumberArray[i]);
}

for (i of exerciseSevenNumberArray) {
    console.log(i);
}