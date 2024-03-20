let date1 = new Date("2023-02-02");
console.log(date1);
let date2 = new Date("2023-02-02");
console.log(date2);
let date3 = new Date();
console.log(date3);
let date4 = new Date("2023-01-23T14:30:04.32-05:00");
console.log(date4);
let date5 = new Date(2023, 0, 1, 2, 30, 34);
console.log(date5);

console.log(`Full Year: ${date5.getFullYear()}`);
console.log(`Month (zero-indexed): ${date5.getMonth()}`);
console.log(`Day of the month: ${date5.getDate()}`);
console.log(`Hours: ${date5.getHours()}`);

//Milliseconds
console.log(`Time: ${date5.getTime}`);
let date6 =new Date(0);
console.log(date6.toUTCString());

//Display just teh calender date
console.log(`Calendar Date: ${date4.toDateString()}`);

//Display a locale-specifice date string 
console.log(`locale en-US: ${date4.toLocaleDateString('en-US')}`);
console.log(`locale en-GB: ${date4.toLocaleDateString('en-GB')}`);
console.log(`locale ja-JP: ${date4.toLocaleDateString('ja-JP')}`);

//Display just the time 
console.log(`Date Time: ${date4.toTimeString()}`);

//Display a locale-specific time string 
console.log(`locale en-US: ${date4.toLocaleTimeString('en-US')}`);
console.log(`locale en-GB: ${date4.toLocaleTimeString('en-GB')}`);
console.log(`locale ja-JP: ${date4.toLocaleTimeString('ja-JP')}`);


//Custome date string 
let options = {
    dateStyle: "short",
    timeStyle: "short"
};
console.log(`Custom Date: ${date4.toLocaleString('en-US', options)}`);
console.log(`Custom Date: ${date4.toLocaleString('ar-KW', options)}`);
