// declare variables-------------------------

let attempts = 0;

let randomNum = Math.floor(Math.random() * 50 + 1);
console.log(randomNum);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event listeners------------------------------

submit.addEventListener("click", checkGuess )

function checkGuess  (){
   const userValue = Number(guess.value);   
    attempts++;
    // conditions -------------------------
    if (userValue == randomNum){
        console.log("Congratulations! You've guessed it.");
        hint.textContent = "Congratulations! You've guessed it.";
    }
    else if (userValue < randomNum){
        console.log("too low, try again")
        hint.textContent = "too low, try a higher number!";
    }
    else {
        console.log("too high, try again")
        hint.textContent = "too high, try a lower number!";
    }
    attemptsText.textContent = "Number of attempts : " +attempts;

}
