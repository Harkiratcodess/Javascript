// qu1 check number is divisble by 10

let num = 20;
if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

// qu2 alert a message of name and age enter by user
let username = prompt("Enter your name");
let age = prompt("Enter your age");
alert(` name is ${username} and  age is ${age}`);

// que3 divide the year in 4 parts and show 
let quarter = 2;
switch (quarter) {
  case 1:
    console.log("January,feburary,March");
    break;
  case 2:
    console.log("April,May,June");
    break;
  case 3:
    console.log("July,August,September");
    break;
  case 4:
    console.log("October", "November", "December");
    break;
  default:
    console.log("Invalid month");
}
// que4 show string is golden if length more than 5 
let name = "john";
if (name.length > 5) {
  console.log("Golden string");
} else {
  console.log("Not a Golden string");
}

// que5 check if the last digit of the two number is same 
let num1 = "42";
let num2 = "638";
if (num1[num1.length - 1] == num2[num2.length - 1]) {
  console.log("yes");
} else {
  console.log("no");
}
