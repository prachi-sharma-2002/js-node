const calculate = (a, b, operation) => {
  return operation(a, b);
};

// ,method 1
const addition = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});
console.log(addition);


//method 2
const substraction = (a, b) => a - b;

const subResult = calculate(8, 3, substraction);

console.log(subResult);

//method 3
function multiply(a, b) {
  return a*b;
}

const mulResult = calculate(3, 9, multiply);
console.log(mulResult);


// array callback function
//find()
//findIndex

/*const a = [-4, -1, 5, 6, -4, -7, 3, -9, -5];

const firstNeg = (num) => {
  return num < 0;
}
const result = a.find(firstNeg);

console.log(result);*/


//findIndex

const a = [-4, -1, 5, 6, -4, -7, 3, -9, -5];

const firstNeg = (num) => {
  return num < 0;
}
const result = a.find(firstNeg);

console.log(result);




function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Prachi', sayGoodbye);