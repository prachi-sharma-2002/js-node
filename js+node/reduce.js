const myNums = [1, 2, 3, 4, 5];

/*const myTotal = myNums.reduce(function (acc , crntval) {
  console.log(`acc: ${acc} and crntval: ${crntval}`);
  return acc + crntval
},0);*/

const myTotal = myNums.reduce((acc , crntval) => acc+crntval, 0);

console.log(myTotal);


const shoppingCart = [
  {
    itemName: "js course", price: 999
  },
  {
    itemName: "web dev course", price: 1999
  },
  {
    itemName: "py course", price: 2999
  },

  {
    itemName: "ds course", price: 11999
  },
] 

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price ,0)

console.log(priceToPay);




const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum)