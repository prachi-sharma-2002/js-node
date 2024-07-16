// for each

const coding = ["js","ruby","java","puthon","cpp","c"]

const values = coding.forEach((item) => {
  //console.log(item);
  return item
})

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num)
  }
})

console.log(newNums);


//forEach 

const a = [-4, -1, 5, 6, -4, -7, 3, -9, -5];

a.forEach((num) => {
  console.log("array num", num);
});


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  console.log(number);
});