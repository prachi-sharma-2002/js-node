// function Declaration
console.log(sum(2 , 3));

function  sum(a,b) {
  return a+ b;
} 


/*function expression
let sum = function (a , b) {
  return a + b;
};

console.log(sum(2 , 3));*/

// Global Scope
let globalVar = "I am global";

function scopeExample() {
  // Local Scope
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

console.log(globalVar); // Accessible
