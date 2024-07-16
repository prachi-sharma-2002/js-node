const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 //const newNums = myNums.filter( (num) => num > 4)

 const newNums = myNums.filter((num) => {
  return num > 4
 })
 console.log(newNums);

const employee = [
  { title: 'se' , branch: 'it' , salary: '1500' , location: 'delhi'},
  { title: 'aa' , branch: 'nonit' , salary: '3500' , location: 'delhi'},
  { title: 'aa' , branch: 'nonit' , salary: '5500' , location: 'mrt'},
  { title: 'se' , branch: 'it' , salary: '1500' , location: 'mrt'},
  { title: 'hr' , branch: 'cp' , salary: '3500' , location: 'mzn'},
  { title: 'hr' , branch: 'cp' , salary: '5500' , location: 'mzn'},
  { title: 'ma' , branch: 'p' , salary: '7500' , location: 'uk'},
  { title: 'ma' , branch: 'p' , salary: '2500' , location: 'uk'},
];


let empInfo = employee.filter( (emp) => emp.branch === 'it');

empInfo = employee.filter( (emp) => { return emp.salary >= 2500 && emp.location === "delhi"
});

console.log(empInfo);




const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

