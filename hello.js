const sayHello  = function (name) {
  console.log("Hello, " + name);
}


sayHello("Georgina");

// console .log Vs return

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 


const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');


