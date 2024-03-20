//javaScript Object
let employee = {
    firstName: "Dayo",
    lastName: "Ekundayo",
    birthdate: new Date("March 20, 2024"),
    numYearsEmployment: 7,
    department: "Engineering",
    title: "software Intern",
    isActive: true,
    salary: 23000
};

//convert to JSON string 
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

//COnvert value Back to object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

//Writing JSON Directly
let jsonString = `{
    "firstName": "Gabriella",
    "lastName" : "Fernades"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

//improperly formatted JSON
let notJSON = "hello!";
let newObj = JSON.parse(notJSON); //results in syntaxError