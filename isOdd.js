function isOdd(value){
  if(value % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
