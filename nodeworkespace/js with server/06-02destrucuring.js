let {print, plus} = require('./06-01_module');

print('Hello');
// console.log(plus(1,2));

let testObj = require('./06-01_module');

testObj.print('Hello');
// console.log(plus(1,2));

//1) object
let person = {
  firstName : "John",
  lastName : "Doe",
  age : 37,
  email : "john@gmai.com",
  conutry : "USA"
};

let {lastName, email } = person;
console.log(lastName, email);
console.log(person.lastName);


let scores = [100, 80, 90];

let [a, b, c] = scores;
console.log('a=' + a);
console.log('b=' + b);
console.log('c=' + c);