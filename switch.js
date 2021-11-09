let planet = "venus";
switch (planet) {
  case "pluto":
    console.log("i would like to visit pluto!");
    break;
  case "mars":
    console.log("i would like to visit mars!");
    break;
  case "Saturn":
    console.log("i would like to visit Saturn!");
    break;

  default:
    console.log("i hate earth");
}
//switch statements   uses strict equals therefore numbers cant be mixed with strings unless its "50"
const grade = "D";

switch (grade) {
  case "A":
    console.log("Aferin!A");
  case "B":
    console.log("Aferin!B");
  case "D":
    console.log("Aferin!C");
  case "C": //results of D,C and default will show
    console.log("Aferin!D");
  default:
    console.log("invalid grade");
}

switch (grade) {
  case "A":
    console.log("Aferin!A");
    break;
  case "B":
    console.log("Aferin!B");
    break;
  case "D": //results of D only
    console.log("Aferin!C");
    break;
  case "C":
    console.log("Aferin!D");
    break;
  default:
    console.log("invalid grade");
}
