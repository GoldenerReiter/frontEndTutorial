var name = "John"; // this is a string datatype. a string is text, you can save to it even numbers, but JS will se text
var age = 47; // this is an int datatype. int are numbers.
var salute = "Hello, "; // this is also a string datatype

console.log(salute, name, "Your age is: ", age) // console is a javascript class. log is a method of the console class
                                                // console.log means that you want to represent some info of that var.
                                                // methods and functions use () for initializing and adding to it some
                                                // parameters. like when you say "console.log(name);" you're giving
                                                // to the machine the variable "name" for it to be represented in the
                                                // console.

let magic = document.querySelector("h1");
function magicalAct() {
magic.innerHTML = "Check the js code of this lesson!";
}
magicalAct();