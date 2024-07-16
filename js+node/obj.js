// singleton 

// object literals

const mySym = Symbol("key1")

const jsUser = {

   name: "Prachi",
   "full name": "Prachi Sharma",
   [mySym]: "mykey1",
   age: 21,
   location: "Meerut",
   email: "psgautam@gmail.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"]

}

console.log(jsUser.email);
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "pssharma@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "prachi@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
  console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

//singleten

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shiv"
tinderUser.isLoggedIn = "false"

//console.log(tinderUser);

const regularUser = {
  email: "shiv@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Shiv",
      lastname: "Sharma"
    }
  }

}

//console.log(regularUser.fullname.userfullname);

  const obj1 = {1: "a", 2: "b"}
  const obj2 = {3: "a", 4: "b"}
  const obj4 = {5: "a", 6: "b"}

  //const obj3 = { obj1, obj2}
  //const obj3 = Object.assign({}, obj1, obj2, obj4)

  const obj3 = {...obj1, ...obj2}
  console.log(obj3);



const users = [
  {
    id: 1,
    email: "p@gmail.com"
  },
  {
    id: 1,
    email: "p@gmail.com"
  },
  {
    id: 1,
    email: "p@gmail.com"
  },
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('islogged'));





const person = {
  name: 'Abhi',
  age: 30,
  city: 'Meerut'
};
console.log(person.name); 
console.log(person['age']); 
console.log(person.city);

//adding properties
person.email = 'global@logic.com';
console.log(person.email); 

//delete properties
delete person.city;
console.log(person.city); 

//Iterating over properties:
for (let key in person) {
  console.log(key + ': ' + person[key]);
}



