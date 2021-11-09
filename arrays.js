// // arrays
// let myCat = ["simba", "zoro", "fluffy"];
// let result2 = myCat.join(",");
// console.log(result2);
// //concatenation of arrays
// let result3 = myCat.concat(["blacky", "snowy"]); //or   ["blacky","snowy"].concat(myCat)
// //push   adds new string to array
// let result4 = result3.push("leo");
// //
// //
// //Array methods
// //forEach
// const nums = [1, 2, 3, 4, 5];
// let sum = 0;
// nums.forEach(number, (index) => {
//   sum = +number;
//   //   console.log("index:", index, number);
// });
// //tostring
// const fruits = ["apple", "orange", "pears"];
// document.getElementById("").innerHTML = fruits.toString();
// //join
// const fruits = ["apple", "orange", "pears"];
// document.getElementById("").innerHTML = fruits.join("_");
// //pop
// const fruits = ["apple", "orange", "pears"];
// document.getElementById("").innerHTML = fruits;
// fruits.pop(); //apple,orange
// const fruits = ["apple", "orange", "pears"];
// document.getElementById("").innerHTML = fruits.pop; //pears
// //push
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// document.getElementById("demo1").innerHTML = fruits.push("Kiwi"); //5
// document.getElementById("demo2").innerHTML = fruits;
// //shift
// document.getElementById("demo1").innerHTML = fruits.shift(""); //banana
// document.getElementById("demo2").innerHTML = fruits; //orange,apple,mango
// //unshift
// document.getElementById("demo1").innerHTML = fruits;
// fruits.unshift("lemon");
// document.getElementById("demo2").innerHTML = fruits; //lemon,banana,orange,mango
// //appending[]
// document.getElementById("demo1").innerHTML = fruits;
// fruits[1] = lime;
// document.getElementById("demo2").innerHTML = fruits; //banana,lime,apple
//splice()
// const fruits = ["banana", "lemon", "kiwi"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits.splice(2, 0, "nutmeg", "lime");
// document.getElementById("demo2").innerHTML = fruits;
// console.log(fruits);
//concat()
const cars = ["subaru", "cresta", "vitz"];
const names = ["aisha", "issra", "zainab"];
const carNames = cars.concat(names);
console.log(carNames);
