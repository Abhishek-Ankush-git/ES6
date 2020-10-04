// creating a constant variable
const MINIMUM = 10;
// creating a variable in block scope
let value = 5;
// you can't change the value of a constant
MINIMUM = 5;
// this change is allowed for `let` variables
value = 10;
// creating a constant object
const obj = {};
// You can only change object's attribute
obj.a = 10;
// but you can't reassign new data here
obj = 100;
