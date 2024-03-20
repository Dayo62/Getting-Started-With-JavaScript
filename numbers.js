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

//Rounding number to an integer
let num7 = 5.618345;
console.log(`Round: ${Math.round(num7)}`);
console.log(`Round: ${Math.ceil(num7)}`);
console.log(`Round: ${Math.floor(num7)}`);

//Fixed
let fixed = num7.toFixed(3); // returns 3 decimal point
console.log(`Fixed Type: ${typeof(fixed)} Fixed Value: ${fixed} `);

//Display in locale-specific format
let num8 = 1_000_000;
console.log(`USA: ${num8.toLocaleString('en-US')}`);
console.log(`Greece: ${num8.toLocaleString('el-EL')}`);
console.log(`Bangladesh: ${num8.toLocaleString('bg-BG')}`);
console.log(`Punjab: ${num8.toLocaleString('pa-PA')}`);

//Intl Format Currency
let salary = 100000;
let monthlySalary = salary /12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);

let formatter1 = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
console.log(`US Dollars:: ${formatter1.format(monthlySalary)}`);

let formatter2 = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'});
console.log(`Euros: ${formatter2.format(monthlySalary)}`);

let formatter3 = new Intl.NumberFormat('ja-JA', {style: 'currency', currency: 'JPY'});
console.log(`Yen: ${formatter3.format(monthlySalary)}`);

let formatter4 = new Intl.NumberFormat('zh-HK', {style: 'currency', currency: 'HKD'});
console.log(`Hong Kong Dollars: ${formatter4.format(monthlySalary)}`);

