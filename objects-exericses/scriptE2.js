// Exercise 2

// Initial array
const fruits = ["apple", "banana", "cherry", "date"];

// const [fruit1, fruit2] = fruits;
// console.log(fruit1, fruit2);

const [fruit1, , fruit3] = fruits;
console.log(fruit1, fruit3);


// Initial object
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {name, age} = person;
console.log(name, age);

const {address: {city}} = person;
console.log(city);


// Initial function
function displayPerson({name, age}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person);