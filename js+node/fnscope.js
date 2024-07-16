// variables are defined in the global scope


const num1 = 20;
const num2 = 3;
const name = "Prachi";

//  function is defined in the global scope

function multiply() {
  return num1 * num2;
}
console.log(multiply());


//  nested function example
 function getScore() {
  const num1 = 2;
  const num2 = 5;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
 }

console.log(getScore());


function addTwoNumbers(number1 , number2){
  let result = number1 + number2
  return result
  return number1 + number2
}
 const result = addTwoNumbers(5 , 5)
console.log("Result: " ,result);


function loginUserMessage(username = "Prachi"){
  if(username === undefined){   //!username
    console.log("please enter a username");
     return 
  }
  return `${username} just logged in` 
}
 console.log(loginUserMessage("Shiv"));



