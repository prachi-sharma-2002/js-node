//map

// Define a function that doubles a number
function double(x) {
  return x * 2;
}

// Use map to apply the double function to each element in the array
const number = [1, 2, 3, 4, 5];
const doubledNumbers = number.map(double);

console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// filter

// Define a function that checks if a number is even
function isEven(x) {
  return x % 2 === 0;
}

// Use filter to get only the even numbers from the array
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);  // Output: [2, 4]


//reduce
// Define a reducer function that adds two numbers
function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

// Use reduce to compute the sum of the array
const num = [1, 2, 3, 4, 5];
const sumOfNumbers = num.reduce(sum, 0);

console.log(sumOfNumbers);  



