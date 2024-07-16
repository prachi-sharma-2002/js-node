const person = {
  name: 'Prachi',
  age: 21,
  city: 'Muzaffarnagar'
};

const numbers = [1, 2, 3, 4, 5];

const { name, age, city } = person;
const [first, second, ...rest] = numbers;

console.log(name); 
console.log(age); 
console.log(city); 
console.log(first); 
console.log(second); 
console.log(rest); 






