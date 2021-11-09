let user = {
  name: "aisha",
  age: 20,
  email: "eshakibwanajuma@gmail.com",
  blogs: ["my book", "my book2"],
};
console.log(user);
console.log(user.name);
console.log(user["name"]);
user.age = 35;
console.log(user.age);
user.email = "iamemail@gmail.com";
console.log(user["email"]);
console.log(typeof user);

// const reads = [
//   { tittle: "Chozi la kheri", pages: 356 },
//   { tittle: "Tumbo lisiloshiba", pages: 500 },
//   { tittle: "A doll house", pages: 709 },
// ];
// console.log(reads);
let person = {
  name: "lisa",
  age: 20,
  height: "126cm",
  favColor: "blue",
  ethnicity: "Habesha",
  reads: [
    { tittle: "Chozi la kheri", pages: 356 },
    { tittle: "Tumbo lisiloshiba", pages: 500 },
    { tittle: "A doll house", pages: 709 },
  ],
  login: function () {
    console.log("i am a girl");
  },
  logout: function () {
    console.log("i got logged out");
  },
  outreads: function () {
    console.log("she read the following:");
    this.reads.forEach((read) => {
      console.log(read.tittle, read.pages);
    });
  },
};
console.log(person);
console.log(person.reads[1]);
person.favColor = "pink";
console.log(person["favColor"]);
person.age = 10 / 2;
console.log(person.age);
person.login();
console.log(person);
person.logout();
person.outreads();

//math objects
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const length = 30.9;
console.log("the answer is:", Math.floor(length));
console.log("the answer is:", Math.ceil(length));
console.log("the answer is:", Math.round(length));
console.log("the answer is:", Math.trunc(length));
//random
const numb = Math.random();
console.log(numb);
console.log(Math.round(numb * 100));

const long = Math.random();
console.log(long);
console.log(Math.round(long * 100));
