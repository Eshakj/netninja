// // //creating objects using classes
// class directions {
//   constructor(left, right) {
//     this.left = left;
//     this.right = right;
//   }
// }
// const myCompass = new directions("up", "down");
// document.getElementById(
//   "zoro"
// ).innerHTML = `my head is ${left} and my feet are ${right}`;
// //class by netninja
// class Cats {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// var cat1 = new Cats("Simba", 7);
// var cat2 = new Cats("Zoro", 3);
// console.log(cat1);
// console.log(cat2);
// //example 2

// class Teeth {
//   constructor(length1, color) {
//     this.length1 = length1;
//     this.color = color;
//     this.grade = 0;
//   }
//   login() {
//     console.log(this.color, "logged in");
//   }
//   logout() {
//     console.log(this.color, "logged out");
//   }
//   updateGrade() {
//     this.grade++;
//     console.log(this.color, "has a grade of", this.grade);
//   }
// }
// var myCanine = new Teeth("short", "white");
// var myMolar = new Teeth("long", "blue");
// console.log(myCanine, myMolar);
// myCanine.login().updateGrade().logout();
// //*problem above
// //method inheritance
class Players {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  login() {
    console.log(this.name, "logged in first!");
  }
  logout() {
    console.log(this.name, "logged out");
  }
}
var player1 = new Players("zainab", 25, 156);
var player2 = new Players("fatma", 30, 152);
player1.age;
