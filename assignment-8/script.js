//  que 1
let btn= document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("colour changed");
    this.style.backgroundColor="green";
});

// que 2
let box = document.querySelector("div");

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "red";
});
// que 3
let input = document.querySelector("#nameInput");
let heading = document.querySelector("#heading");

input.addEventListener("input", function () {

    let cleanValue = input.value.replace(/[^a-zA-Z ]/g, "");

    input.value = cleanValue;

    heading.innerText = cleanValue;
});