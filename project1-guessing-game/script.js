let num =prompt("Enter a value");
let randomnum= Math.floor(Math.random()*num )+1;
let guessednum=prompt("Guess a number :");

while(true){
if(guessednum==randomnum){
    console.log("Your gussed the number");
    break;
}
else if(guessednum<randomnum){
    guessednum = prompt("Guess higher:");
}

else if(guessednum>randomnum){
    guessednum = prompt(" Guess lower:");
}
}

