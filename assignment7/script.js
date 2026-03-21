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

// every and some
let a=[1,2,3,4];
let even=a.some((el)=>{
   return el%2==0;
});
console.log(even);
let b=a.every((el)=>{
   return el%2==0;
});
console.log(b);

// que to understand reduce method(printing the lowest number in a array)
let minimum=[5,4,2,7,10,9,25,29];
let minimumnum=minimum.reduce((min,el)=>{
    if(min<el){
        return min
    }
    else{
        return el;
    }
});
console.log(minimumnum);

