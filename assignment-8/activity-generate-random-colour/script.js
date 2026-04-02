let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("colour generated");
    let randomcolour=changecolor();
    let h1=document.querySelector("h1");
    h1.innerText=randomcolour;
    console.log("colour updated");
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolour;
    
});
function changecolor(){
    let red=Math.floor(Math.random() *256);
    let green=Math.floor(Math.random() *256);
    let blue=Math.floor(Math.random () *256);
    let colour = `rgb(${red}, ${green}, ${blue})`;
    return colour;
}