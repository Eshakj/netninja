//else statements
const passwor = "mypass";

if (passwor.length >= 8) {
  console.log("good job!");
} else if (passwor.length >= 12) {
  console.log("excellent!");
} else {
  console.log("password should be 8 characters long"); //appears
}

//logical operators OR,&&,||
const planet = "pluto";

if (planet.length <= 5 && planet.includes("u")) {
  console.log("I am 5 letters long and contain u"); ///both conditions shld be met to b true
} else if (planet.length <= 2) {
  console, log("i dont fit");
} else {
  console.log("none of the above");
}
//or

/*  const planet = "plutos";

      if (planet.length <= 5 && planet.includes("u")) {
        console.log("I am 5 letters long and contain u"); 
      } else if (planet.length <= 2 || planet.includes("o") && planet.length==6) {
        console, log("i dont fit");
      } else {
        console.log("none of the above");
      }
*/
