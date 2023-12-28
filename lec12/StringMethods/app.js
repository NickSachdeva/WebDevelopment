let str = "Hello World";
// tyoeof str = string
// str.length=11
// hello + world -----> concatination
//  str.substring(3)-----> "lo World"
//  str.substr(3)------> "lo World"

// String Template Laterals-------> $

let firstName = "Nikhil";
let lastName = "Sachdeva";

// let fullName = "Mr. "+ lastName + firstName;

let fullName = `Mr. ${lastName} ${firstName}` ;

console.log(fullName);
