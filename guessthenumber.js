let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('.submit');
const userinput = document.querySelector('#userinput');
const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remainingguesses');
const LoworHi = document.querySelector('.LoworHi');
const Startover = document.querySelector('.results-parameter');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
        submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            CheckGuess(guess);
        }
    }
}

function CheckGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }
}

function displayGuess(guess) {
    userinput.value = "";
    guessesSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
    LoworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    Startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGamebutton = document.querySelector("#newGame");
    newGamebutton.addEventListener("click", function (e) {
        e.preventDefault();
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessesSlot.innerHTML = "";
        remaining.innerHTML = `${10 - numGuess + 1}`;
        userinput.removeAttribute("disabled");
        Startover.removeChild(p);
        LoworHi.innerHTML = "";
        playGame = true;
    });
}
