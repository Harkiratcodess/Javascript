let randomnum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let btn = document.querySelector("button");
let message = document.getElementById("message");
let input = document.getElementById("guessInput"); 



btn.addEventListener("click", checkGuess);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkGuess();
    }
});
function checkGuess() {
    let guessednum = Number(document.getElementById("guessInput").value);
    attempts++;

    if (guessednum === randomnum) {
        message.innerText = ` you guessed Correct. It took  ${attempts} attempts`;
    } 
    else if (guessednum < randomnum) {
        message.innerText = "Guess higher!";
        input.value = "";   
        input.focus();
    } 
    else {
        message.innerText = "Guess lower!";
        input.value = "";   
        input.focus();
    }
    
}
