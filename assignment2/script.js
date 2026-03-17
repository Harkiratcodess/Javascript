// que 1   print n postive numbers
let arr=[7,9,0,-2];
let n=3;
let newarr=arr.slice(0,n);
console.log(newarr);

// que2  print last n numbers 
let rt=[7,9,0,-2];
let k=3;
let newwarr=rt.slice(rt.length-k);
console.log(newwarr);

// que3 check wheteher a string is empty or not

let name=prompt("Enter a name");
if(name.length==0){
    console.log("String is empty");
}
else{
    console.log("String is not empty");
}

// que4 check if the number in the given idex number is lower case or not 

let str="bca";
idx=1;
if(str[idx]==str[idx].toLowerCase()){
    console.log("it is lowercase");

}
else{
    console.log("it is not lowercase");
}

// que5 trim the space
let hero="  superman  ";
console.log(hero.trim());

// que 6  check if the element is already exist in the array

let fruits=["mango","banana","grapes","apple"];
let fruit="lo";

    if(fruits.indexOf(fruit) != -1){
        console.log("already");
    }
    else{
        console.log("doesnt exist");
    }
