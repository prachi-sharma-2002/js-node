
/*
variables:
let - change value
 const - not changed value
var  - using in old browser  var has no block scope redecleration


naming rule-
1.alphabhate , but it can not start from digit
  name must contain only letters , digits , or symbols $ and _
  keywords can not be used as variable name]
  case sensitive
*/


let message="hey,how r u";
console.log(message);

let aBC = 24;
console.log(aBC);
let my_name$is = "Prachi";
console.log(my_name$is);

// let var = 34;


message = "hey,this side prachi sharma"
console.log(message);


const user = "NewUser";
console.log(user);

//user = "old user";

if (5 > 3 ) {
  console.log("inside block");
  let address = "Delhi";
  console.log(address);
  var city = "Delhi";
  console.log(city);
}

console.log(city);

