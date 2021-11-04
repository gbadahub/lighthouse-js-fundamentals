// While loop
/*const chorus = "Let's dance!";
let repeat = 0; // start
while (repeat < 5) { //stop
  console.log(chorus);
  repeat++;// same as repeat = repeat + 1 
}
console.log("Until the sun comes up!");*/

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

