// que1 remove the given number from a array

let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr)

// que 2 count the numbers 
let number=5584582;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10)
}
console.log(count);

// que3 find the sum of number
let Number =6166;
let Copy=Number;
let sum=0;


while(Copy>0){
    let digit=Copy%10;
    sum+=digit;
    Copy=Math.floor(Copy/10);
}
console.log(sum);

//  que4 find factorial
let n=5;
let factorial=1;
for(let i=1;i<=n;i++){
    factorial*=i;
}
console.log(factorial)

// que 5  find largest number
let arrr=[5,9,12,3,25,10,35,18];
let largest=0;

for(let i=0;i<=arrr.length;i++){
    if(largest<arrr[i]){
        largest=arrr[i];
    }
}

console.log(largest);