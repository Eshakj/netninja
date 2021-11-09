let hotels = {
  name: "Munch",
  location: "Nyali",
  year: 2021,
  status: "famous",
  partnership: [
    { Msa: "Blueroom" },
    { nai: "Big Knife" },
    { bon: "pizza Inn" },
  ],
  checkin: function () {
    console.log("i checked in!");
  },
  checkout: function () {
    console.log("i checked out 😒");
  },
  finale: function () {
    console.log("the following are connected:");
    this.partnership.forEach((partnership) => {
      console.log(partnership.Msa, partnership.nai, partnership.bon);
    });
  },
};
console.log(hotels.status);
hotels.year = 3030;
console.log(hotels.year);
console.log(hotels.partnership[2]);
hotels.checkout();
hotels.finale();

//example from object oriented js tutorial netninja
var person1 = {
  name: "ashush",
  email: "ashush@gmsil.com",
  age: "20",
  login() {
    console.log(this.name, "has logged in");
  },
  logout() {
    console.log(this.name, "has logged out");
  },
};
person1.login();
