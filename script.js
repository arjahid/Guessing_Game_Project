let totalAttempts = 3;
let attempts = 0;
let totalWin = 0;
let totalLoss = 0;

const cardBody = document.querySelector('.card-body');
const form = document.querySelector('form');
const guessingNumber = document.querySelector('#guessing-number');
const checkButton = document.querySelector('#check');
const resultCheck = document.querySelector('#result-check');
const remaining = document.querySelector('#remaining');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const guessedNumber = parseInt(guessingNumber.value);
    const random = Math.floor(Math.random() * 3) + 1;
    attempts++;
    
    if (guessedNumber === random) {
        resultCheck.innerHTML = `<p class="alert alert-success">Congratulations! You guessed the right number ${random}</p>`;
        totalWin++;
    } else {
        resultCheck.innerHTML = `<p class="alert alert-danger">Wrong guess! The correct number was ${random}</p>`;
        totalLoss++;
    }

    remaining.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`;

    if (attempts >= totalAttempts) {
        checkButton.disabled = true;
        resultCheck.innerHTML += `<p class="alert alert-warning">Game over! You had ${totalWin} wins and ${totalLoss} losses.</p>`;
    }
});
