// que 1  Square and sum the array elements using the arrow function and then find the average of the array
let arr =[1,2,3,4];

let square=arr.map((el)=>{
    return el*el;
});
let total=square.reduce((sum,el)=>{
    return sum+=el;
})
let average=total/square.length;
console.log(average);

// que 2 Create a new array using the map function whose each element is equal to the original element plus 5
let a=[1,5,8,9,15];
let result=a.map((el)=>{
    return el+5;
});
console.log(result);

// que 3 Create a new array whose elements are in uppercase of words present in the original array
let str=["harkirat","tarun",'ansh'];
let uppercase=str.map((el)=>{
    return el.toUpperCase();
});
console.log(uppercase);

// que 4  Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

function doubleAndReturnArgs(arrr,...number){
            let finalresult=number.map((el)=>{
                return el*2;
            });
            return [...arrr,...finalresult]
            
}
console.log(doubleAndReturnArgs([1,2,3,4],5,6,7));

// que 5 Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
function mergeobject(){
    return {...tarun,...ansh};
};
let tarun={
    courses:"Bca",
    ages:19
};
let ansh={
    course:"Btech",
    age:18
};

console.log(mergeobject(tarun,ansh));