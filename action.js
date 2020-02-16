let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function wordFormat(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}
function wins(playerChoice, computerChoice) {
    const smallPlayword = "player".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = wordFormat(playerChoice) + smallPlayword + " beats " + wordFormat(computerChoice) + smallCompword + ". You win !!!"//You can also use formatted strings jinka format ` ` aisa hota hai along with variables denoted by $variable_name
    playerChoice_div.classList.add("green-glow");
    setTimeout(function () { playerChoice_div.classList.remove('green-glow') }, 300);
}
function loses(playerChoice, computerChoice) {
    const smallPlayword = "player".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = wordFormat(playerChoice) + smallPlayword + " loses to " + wordFormat(computerChoice) + smallCompword + ". You lose !!!"
    playerChoice_div.classList.add("red-glow");
    setTimeout(function () { playerChoice_div.classList.remove('red-glow') }, 300);//can use anonymous functions too but abhi rehne do jaisa hai
}
function tie(playerChoice, computerChoice) {
    const smallPlayword = "player".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const playerChoice_div = document.getElementById(playerChoice);
    result_p.innerHTML = wordFormat(playerChoice) + smallPlayword + " equals " + wordFormat(computerChoice) + smallCompword + ". That's a tie !!!"
    playerChoice_div.classList.add("grey-glow");
    setTimeout(function () { playerChoice_div.classList.remove('grey-glow') }, 300);
}
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(playerChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            loses(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(playerChoice, computerChoice);
            break;
    }
}
function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();