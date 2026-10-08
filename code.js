
const rockBtn = document.getElementById("rockButton");
const scissorBtn = document.getElementById("scissorButton");
const paperBtn = document.getElementById("paperButton");

const gameMessage = document.getElementById("winningMessage");
const botScore = document.getElementById("botScore");
const userScore = document.getElementById("userScore");

const botOuput = document.getElementById("computerChoiceEmoji");
const userOutput = document.getElementById("humanChoiceEmoji");

let userChoice = -1;
let bScore = 0;
let uScore = 0;
// 0 -> rock
// 1 -> paper
// 2 -> scissor

gameMessage.style.backgroundColor = "#6366F1";

function fillColor(rock , paper, scissor ){
    rockBtn.style.backgroundColor = rock;   
    paperBtn.style.backgroundColor = paper;
    scissorBtn.style.backgroundColor = scissor;
}

rockBtn.addEventListener("click" , () => {
    userChoice = 0;
    fillColor("lightgreen" , "" , "");
    gameMessage.textContent = "PLAY";
    gameMessage.style.color = "black";
})

paperBtn.addEventListener("click" , () =>{
    userChoice = 1;
    fillColor("" , "lightgreen" , "");
    gameMessage.textContent = "PLAY";
    gameMessage.style.color = "black";

})

scissorBtn.addEventListener("click" , () =>{
    userChoice = 2;
    fillColor("" , "" , "lightgreen");
    gameMessage.textContent = "PLAY";   
    gameMessage.style.color = "black";

})


gameMessage.textContent = "PLAY"

function getbotInput(){
    let input = Math.floor(Math.random()  * 3);
    return input;
}

function findWinner(bot, user){
    let result = ((bot- user + 3) % 3) ;

    let answer = "";

    if( result == 0){
        answer =  "DRAW";
        gameMessage.style.color = "black";
    } else if( result == 2){
        uScore++;
        answer =  "YOU WON!"
        gameMessage.style.color = "#5bde4a";
    } else {
        bScore++;
        answer =  "YOU LOST"
        gameMessage.style.color = "pink";
    }

    return answer;

}

function printResult(bot, user){

    botOuput.textContent  = (bot == 0) ? '🪨' : (bot == 1) ? '📄' : '✂️';
    userOutput.textContent  = (user == 0) ? '🪨' : (user == 1) ? '📄' : '✂️';

}

function determineScore(){

}

gameMessage.addEventListener("click" , () => {

    if(userChoice === -1){
        gameMessage.textContent = "Select Something"

    } else {

        botInput = getbotInput();

        console.log("bot : " ,botInput);
        console.log("user : ", userChoice);

        printResult(botInput , userChoice);
        gameMessage.textContent = findWinner(botInput , userChoice);

        userChoice = -1;
        fillColor("" , "" , "");

        botScore.textContent = bScore;
        userScore.textContent = uScore;
    }

})