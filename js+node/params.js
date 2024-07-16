
//rest parameters

const sum = (a, b, c, d, ...e) => {
  console.log(e);
  var total = 0;
  for (i of e) {
    console.log(i);
    total += i;
  }
  console.log(total);
};

sum(1, 2, 3, 4, 5, 6);


function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Prachi"));