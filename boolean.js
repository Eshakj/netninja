console.log(!true);

const male = true;
if (!male) {
  console.log(!true);
} else {
  console.log("im an old man!");
}

//boolean methods
let email = "eshakibwanajuma@gmail.com";
let result = email.includes("@");
console.log(result); //true
//false
let result = email.includes("1");
//true or false    =true
let age = 20;
console.log(age == 20);
//true
console.log(age >= 15);
//true
let nam = "aisha";
console.log(nam > "Aisha");
//true    small letters are always greater than uppercase letters
console.log(nam > "Sahani"); //true
//type conversion       251
let numStr = "25";
console.log(numStr + 1);
//correct    26
let numStr = "25";
numStr = Number(numStr);
console.log(numStr + 1);
console.log(typeof numStr); //number
//convert to a string     50 string
let result = String(50);
console.log(result, typeof result);

//logical NOT (!)
const me = false;
if (!me) {
  console.log("true!");
}
//or
console.log(!true); //false
console.log(!false); //true
