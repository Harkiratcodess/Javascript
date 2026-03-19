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