//for loops
for (let i = 0; i < 5; i++) {
  console.log("in loop;", i);
}

const majina = ["name1", "name2", "name3"];
for (let p = 0; p < majina.length; p++) {
  console.log(majina[p]);
}
//if statements
const myName = "Esha";
if (myName == "ESha") {
  console.log("I am Esha"); //it appears in console,if it were falss it doesnt appear.
}
//or
const myFavNo = 20;

if (myFavNo > 20) {
  console.log("im above 20"); //doesnt appear in console.
}
//or
const jinas = ["mimi", "wewe", "yeye"];

if (jinas.length < 4) {
  //appears
  console.log("less than 4");
}
//or
const password = "mypassword";

if (password.length >= 8) {
  console.log("good job!"); //appears
}
