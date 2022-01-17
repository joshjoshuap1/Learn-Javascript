// Array
// One Dimensional
let fruits = ["Apple", "Banana", "Orange"];
console.log(`${fruits[0]} and ${fruits[1]}`);

// Multi Dimensional
let numbers = [
  [1, 2, 3],
  [0.2, 0.5, 0.9],
];

console.log(`Total: ${numbers[0][0] + numbers[1][0]}`);

// Looping One Dimensional Array
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Looping Two Dimensional Array
let numbers = [
  [2, 4, 6, 8, 19],
  [1, 3, 5, 7, 9],
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}

// Push
let numbers = [2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// Pop
let numbers = [2, 3, 4, 5];
numbers.pop();
console.log(numbers);

// Unshift
var num = [1, 2, 3];
num.unshift(0);
console.log(num);

// Shift
var num = [1, 2, 3];
num.shift(0);
console.log(num);

// Slice
let name = ["Joshua", "Juan", "Emilio", "Maria", "Jose"];
let sliceArray = name.slice(3);
let sliceArrayRange = name.slice(1, 4);
let sliceLastArray = name.slice(-1);
let sliceArrayRange2 = name.slice(1, -1);

console.log(sliceArray);
console.log(sliceArrayRange);
console.log(sliceLastArray);
console.log(sliceArrayRange2);

// Splice Adding data in array
let name = ["a", "b", "c", "d"];
name.splice(1, 2); // ['a', 'd']
name.splice(1, 0, "5"); // [ 'a', '5', 'b', 'c', 'd' ]
console.log(name);

// Destructing Array
let subject = ["Math", "Science", "English"];
let [firstSubject, secondSubject, thirdSubject] = subject;
console.log(firstSubject);

// Filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = numbers.filter((nums) => {
  return nums % 2 === 0;
});

let even = numbers.filter((nums) => {
  return nums % 2 === 1;
});

let SixtoTen = numbers.filter((nums) => {
  return nums >= 6;
});

let OnetoFive = numbers.filter((nums) => {
  return nums <= 5;
});

console.log(odd);
console.log(even);
console.log(SixtoTen);
console.log(OnetoFive);

// Map
let movies = [
  { title: "a", score: 10 },
  { title: "b", score: 11 },
];

movies.map(function (movie) {
  console.log(`Movie: ${movie.title} Rate: ${movie.score}`);
});

// Reduce
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumOfArrays = number.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(sumOfArrays);

// Finding Index
let subject = ["Math", "Science", "English"];
console.log(subject.indexOf("Science"));

// Checking if Exist
let subject = ["Math", "Science", "English"];

if (subject.includes("Math")) {
  console.log("Subject Exist");
} else {
  console.log("Not Exist");
}

// Find Max
let numbers = [1, 2, 5, 6, 8, 10];
let findMax = Math.max(...numbers);
console.log(findMax);

// Find Min
let numbers = [1, 2, 5, 6, 8, 10];
let findMin = Math.min(...numbers);
console.log(findMin);

// Concat Array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

// Join Array
let letters = ["a", "b", "c", "d"];
console.log(letters.join("-"));

// Removing Nested Array
let number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let oneArray = number.flat();
console.log(oneArray);

// Spread Operator ...
let number = [3, 4, 5];
console.log(number);

let newNumber = [1, 2, ...number];
console.log(newNumber);

let addNumber = [1, 2, ...number, 6, 7];
console.log(addNumber);

// Multiple Spread Operator
let firstNum = [1, 2, 3, 4, 5];
let secondNum = [6, 7, 8, 9, 10];
let thirdNum = [20, 30, 40];

let combinedNum = [...firstNum, ...secondNum, ...thirdNum];
console.log(combinedNum);

// Sets
let name = new Set(["Joshua", "Jose", "Juan", "Jose", "Jose", "Jose", "Jose"]);
console.log(name);
for (let person of name) {
  console.log(person);
}

// Sorting Array
let numbers = [5, 1, 3, 2, 4];
console.log(numbers.sort());

let negativePositive = [-1, 5, -3, 2, 4, 0, 6, -10]; // sorting with negative numbers
let sorted = negativePositive.sort((prevValue, currValue) => {
  if (prevValue > currValue) return 1;
  if (currValue > prevValue) return -1;
});
console.log(sorted);

// Fill array
let numberArray = new Array(5).fill('a');
console.log(numberArray);