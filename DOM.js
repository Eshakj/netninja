const aya = document.querySelector("p");
console.log(aya);
const divi = document.querySelector("p.lol");
console.log(divi);

const ayas = document.querySelectorAll("p");
console.log(ayas);
console.log(ayas[1]);

ayas.forEach((aya) => {
  console.log(aya);
});

const sem = document.querySelectorAll(".lal");
console.log(sem);

//get element by Id
const yh = document.getElementById("yeah");
console.log(yh);
//get elements by Class Name
const grab = document.getElementsByClassName("lal");
console.log(grab);
console.log(grab[0]);

//tagname
const akh = document.getElementsByTagName("p");
console.log(akh);
console.log(akh[2]);
//innerText
const store = document.querySelector(".lal");
console.log(store.innerText);
store.innerText = "hi hellow you";
console.log(store.innerText);
store.innerText += " hi hellow you";
//changing HTML
const a = document.querySelector(".right");
console.log(a.innerHTML);
a.innerHTML = "<p>im new !</p>";
console.log(a.innerHTML);
//adding content to html  ***problem min 27 #6 DOM
const colors = ["orange", "blue", "green"];
colors.forEach((color) => {
  a.innerHTML += `<p>${color}</p>`;
  console.log(a.innerHTML);
});
//setting and getting attributes
let imge = document.querySelector("img");
console.log(imge.getAttribute("src"));
imge.setAttribute("src", "image2.png");
imge.innerText = "i got changed btw";
//adding attributes
imge.setAttribute("alt", "screenshot");

const addi = document.querySelector(".lol");
console.log(addi.style);
addi.style.cssFloat = "right";
addi.style.backgroundColor = "blue";
// addi.style.cssFloat = "";

//adding and removing classes
const nutu = document.querySelector("p");
console.log(nutu.classList);
nutu.classList.add("right", "left");
nutu.classList.remove("right", "left");
nutu.classList.add("lal");
//test by netninja
const test = document.querySelectorAll("p");
test.forEach((p) => {
  if (p.innerText.includes("lal")) {
    p.classList.add("lal");
  } else if (p.innerText.includes("peep")) {
    p.classList.add("peep");
  }
});
//use of toggle    PROBLEM!!!!!!
const tog = document.querySelector(".rude");
tog.classList.toggle("rude");
