const againBtn = document.getElementById("btnAgain");
const checkBtn = document.getElementById("btnCheck");
const highScoreElem = document.getElementById("highScore");
const scoreElem = document.getElementById("score");
const inputNumber = document.getElementById("inputNumber");
const message = document.getElementById("message");
let hasWon = false;
let secretNumber;
let guesses = []




function check() {
    let guess = inputNumber.value
    let highScore = Number(highScoreElem.innerHTML);
    let score = Number(scoreElem.innerHTML);
    if (hasWon) {
        return
    }
    if (guesses.includes(guess)) {
        return
    }
    guesses.push(guess)

    if (guess == secretNumber) {
        let isHighscore =  score > highScore
        highScoreElem.innerText = isHighscore ? score : highScore;
        message.innerText = isHighscore ? "You've guessed Correctly, And set a new highscore!" : "You've guessed correctly!";
        hasWon = true;
    } else {
        scoreElem.innerText = score-1
        message.innerText = "Wrong!"
    }
}




function reset() {
    generateRandomNumber()
    score.innerText = 20
    guesses = []
    hasWon = false;
    message.innerText = "Start guessing a number between 1 and 20 !"
    console.log("secret number: ", secretNumber);
}


function generateRandomNumber() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
}



checkBtn.addEventListener("click", check);
againBtn.addEventListener("click", reset);












function stressTest() {
    let result = Array(21).fill(0)
    for (let i = 0; i < 10000000; i++) {
        let roll = Math.floor(Math.random() * 20)+1
        result[roll] += 1
    }
    console.log(result)
    analyze(result)
}

function analyze(result) {
    let lowest = 999999999
    let highest = -1000000
    let lowIndex;
    let highIndex;
    for (let i = 1; i < result.length; i++) {
        let roll = result[i]
        if (roll < lowest) {
            lowest = roll
            lowIndex = i
        }
        if (roll > highest) {
            highest = roll
            highIndex = i
        }
    }
    console.log("highest", highIndex)
    console.log("count: ", highIndex)
    console.log("lowest: ", lowIndex)
    console.log("count: ", lowest)
    console.log("variance: ", highest-lowest)
    console.log("variance: ", (highest-lowest)/10000000 * 100 + "%")
}
reset()