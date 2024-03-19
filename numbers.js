//Define numver values
let num1 = 5;
let num2 = -1000000;
let num3 = 1.23484;


//Defining big and small numbers
let num4 = 15600000000000000000;
console.log(num4);
let num5 = -0.00000000000000021;
console.log(num5); 

//creating numbers with e-notation
let num6 = 1.2e+10;
console.log(num6);

//Determining how big and small the number type can be 
console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Interger: ${Number.MIN_SAFE_INTEGER}`);
console.log(`MAximum Value: ${Number.MAX_VALUE}`);
console.log(`Minimum Safe Interger: ${Number.MAX_SAFE_INTEGER}`);

//BigInt
let bigInt1 = 1n;
let bigInt2 = 1_560_000_000_000_000_000_000n;