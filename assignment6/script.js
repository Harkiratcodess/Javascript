// try and catch method  - this method is basically use to catch the easily 
let num=5;
try{
    console.log(num);
}
catch(err){
    console.log("error ");
    console.log(err)
}
console.log("hello");
console.log("Riet");
console.log(num);
console.log("Jai hind"); 

// question using try and catch  ( throw is used to manually create an error when something is wrong)
function add(num1, num2) {
    try {
        if (num1<=0 || num2<=0) {
            throw "number cant be negative";
        }
        console.log(num1 + num2);

    } catch (err) {
        console.log(err);
    }
}

add(5, 3);
add(-2, 4);

// made a arrow function which tells the number is odd or even
const number =(n)=>{
    if(n%2==0){
        return "even";

    }
    else{
        return "odd";
    }
};

console.log(number(5))

// set time out function
console.log("Hello there ");

setTimeout(()=>{
    console.log("My JavaScript Repo");
}
,2000);

    console.log("Welcome to ");

// set time interval function
setInterval(()=>{
    console.log("This is My JavaScript Repo");
}
,2000);