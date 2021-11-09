const perimeter = (length, width) => length * 2 + width * 2;
let x = perimeter(10, 20);
console.log(x);

const gettingNumberOfPoles = (spaces) => {
  const val = x / spaces;
  console.log(typeof val);
  return val;
};
const result = gettingNumberOfPoles(9);
console.log("the number of poles is:", Math.ceil(result));

const rio = () => "birds singing";
console.log(rio());

#4
//function declaration gets hoisted unlike expressions
function jay(){
  console.log("hey!");
}
jay();   //hey!
 
  //func expressions
const pin = function(){
  console.log("i am an expression");
};
//template literals in funcs
const gabe = function(name,surname){
  console.log(`i have a ${name} ${surname}`);
};
gabe("kinsey" , "cho");

//returning values with functions
const asus = function(){
  return 3.14*radius**2;
}
#or
const asus = ()=>  3.14*radius**2;
 

const pro = asus(5);
console.log("area is: pro");

const ashush = (firstName, lastName) =>
  console.log(`my name is ${firstName} ${lastName}`);

ashush("esha", "juma");

