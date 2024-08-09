// Exercise 01
const numbers = [1, 2, 3, 4, 5];

// 1.2
numbers.forEach((item) => console.log(item));

// 1.3
let sum = 0;
numbers.forEach((item) => (sum += item)); // check if item is ofType number (typeof item === "number")? (sum += item) : (sum += 0)))
console.log(sum);

// 1.4
const squaredNumbers = [];
numbers.forEach((item, index) => (squaredNumbers[index] = item * item));
console.log(squaredNumbers);

// Exercise 02
// 2.2
const doubleNumbers = numbers.map((item) => item * 2);
console.log(doubleNumbers);

// 2.3
const stringNumbers = numbers.map((item) => `Number: ${item}`);
console.log(stringNumbers);

// 2.4
const numberObjects = numbers.map(
  (item) => [{Original: item, Squared: item * item }]
);
console.log(numberObjects);

// Exercise 03
// 3.1
const numbersTwo = [10, 20, 30, 40, 50];

// 3.2
const foundNumber = numbersTwo.find((item) => item > 25);
console.log(foundNumber);

// 3.3
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

// 3.4
const foundPeople = people.find((item) => item.name === 'Charlie');
console.log(foundPeople);

// Exercise 04
// 4.1
const numbersThree = [5, 10, 15, 20, 25, 30];

// 4.2
const numbersGreaterThan15 = numbersThree.filter((item) => item > 15);
console.log(numbersGreaterThan15);

// 4.3
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

// 4.4
const studentsAbove80 = students.filter((item) => item.grade > 80);
console.log(studentsAbove80);

// Exercise 5
// 5.1
const numbersFour = [4, 8, 15, 16, 23, 42];

// 5.2
const checkGreater20 = numbersFour.some((item) => item > 20);
console.log(checkGreater20);

// 5.3
const lessThan50 = numbersFour.every((item) => item < 50);
console.log(lessThan50);

// 5.4
const studentsTwo = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

// 5.5
const hasFailed = studentsTwo.some((item) => item.passed == false);
console.log(hasFailed);

// 5.6
const olderThan18 = studentsTwo.every((item) => item.age > 18);
console.log(olderThan18);