//  make a function who print greater num from a array from a number entered by user 

let arr=[5,8,3,10,2,18];
let element=Number(prompt("enter a value"));

function greaternum(arr, element)
{
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>element){
            console.log(arr[i]);
        }
    }
};

greaternum(arr,element);


//  que 2 print the uniqur element from a string
let str="meownsddifsdsjdsm";

function printunique(str){
    let empty="";
    for(let i =0;i<str.length;i++){
        let current=str[i];
        if(empty.indexOf(current)==-1){
            empty+=current
        }
    }
    return empty;
}

console.log(printunique(str));