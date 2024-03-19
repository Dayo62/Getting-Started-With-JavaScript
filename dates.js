let date1 = new Date("2023-02-02");
console.log(date1);
let date2 = new Date("2023-02-02");
console.log(date2);
let date3 = new Date();
console.log(date3);
let date4 = new Date("2023-01-01To2:30:04.312-05:00");
console.log(date4);
let date5 = new Date(2023, 0, 1, 2, 30, 34)
console.log(date5);

Console.log(`Full Year: ${date5.getFullYear()}`);
Console.log(`Month (zero-indexed): ${date5.getMonth()}`);
Console.log(`Day of the month: ${date5.getDate()}`);
Console.log(`Hours: ${date5.getHours()}`);

//Milliseconds
console.log(`Time: ${date5.getTime}`);
let date6 =new Date(0);
console.log(date6.toUTCString());