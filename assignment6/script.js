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

const number =(n)=>{
    if(n%2==0){
        return "even";

    }
    else{
        return "odd";
    }
};

console.log(number(5))