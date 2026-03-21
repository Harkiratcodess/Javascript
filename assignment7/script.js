// map mehtod (mainly it make a new array with some changes or used to display the elemnts or extract data)
let arr = [1, 2, 3, 4];
let square = arr.map((el) => {
  return el * el;
});
console.log(square);
// filter(used to search element)
let numbers = [10, 25, 15, 20, 38, 41, 50, 23];
let result = numbers.filter((el) => {
  return el % 10 == 0;
});
console.log(result);

// every and some
let a = [1, 2, 3, 4];
let even = a.some((el) => {
  return el % 2 == 0;
});
console.log(even);
let b = a.every((el) => {
  return el % 2 == 0;
});
console.log(b);

// que to understand reduce method(printing the lowest number in a array)
let minimum = [5, 4, 2, 7, 10, 9, 25, 29];
let minimumnum = minimum.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
console.log(minimumnum);

// spread
let name = [..."hello"];
console.log(name);

let oddd = [1, 3, 5, 7, 9, 11];
let evenn = [2, 4, 6, 8, 10];

let nums = [...oddd, ...evenn];
console.log(nums);

const details = {
  name: "Harkirat",
  age: 18,
};
let copydetails = {
  ...details,
  addres: "sri ganganagar",
  course: "BCA",
  college: "RIET",
};
console.log(copydetails);

// rest (it allows a function to to take an indefinte number of arguments and bundle them in a array)
function sum(...args) {
  return args.reduce((add, el) => {
    return (add += el);
  });
}
console.log(sum(1, 5, 7, 8, 10, 25));

// Destructuring
let multiples = [10, 20, 30, 40, 50, 60];
let [x, y, z, ...others] = multiples;

console.log(...others);
console.log(x);

let student = {
  namee: "Harkirat",
  age: 18,
};
let { namee, age } = student;
console.log(namee);
let { namee: username } = student;
console.log(username);
let { address = "Sri ganganagar" } = student;
console.log(address);

function printUser({ name, age }) {
  console.log(name, age);
}

printUser({ name: "Harki", age: 18 });
