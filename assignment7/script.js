// map mehtod (mainly it make a new array with some changes or used to display the elemnts or extract data)
let arr=[1,2,3,4];
let square=arr.map((el)=>
{
    return el*el;
}

);
console.log(square);
// filter(used to search element)
let numbers=[10,25,15,20,38,41,50,23];
let result =numbers.filter((el)=>{
    return el%10==0;
}
);
console.log(result);