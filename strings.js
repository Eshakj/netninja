//strings-syntax has  quotes but when logged to console no quotes
//1
console.log("hi hi hi hi!");
//2
let email = "eshakibwanajuma@gmail.com";
//string concatenation
let myFirstName = "Esha";
let mySecondName = "Juma";
let myThirdName = "kibwana";
let result = myFirstName + " " + mySecondName;
//template literal
let result2 = `my first name is ${myFirstName} second is ${mySecondName} third is ${myThirdName}.`;
//HTML template literal
let result2 = `<p>my first name is ${myFirstName}</p>
   <h2>second is ${mySecondName}</h2>`;
//getting characters-
//third letter of myFirstName
console.log(myFirstName[2]);
//string length
console.log(mySecondName.length);
//string methods has empty brackets as syntax
console.log(mySecondName.toUpperCase()); //JUMA
//or
let result = mySecondName.toLowerCase(); //juma
console.log(result);
//indexOf-used to find position
let result = email.indexOf("@"); //15
let result = email.lastIndexOf("a"); //18
//arguments goes according toposition of letters      =esha
let result = email.slice(0, 3);
//10 no's from the 4th position =kibwanajum
let result = email.substr(4, 10);
//replace  first e gets replaced with s
let result = email.replace("e", "s");
console.log(result);
