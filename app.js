const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerImg = document.querySelector(".content-player img");
const cpuImg = document.querySelector(".content-cpu img");

const imageMap = {
    Rock:"piedra.png",
    Paper:"Paper.png",
    Scissors:"Scissors.png",
    Lizard:"Lizard.png",
    Spock:"Spock.png"
}
function _randomChoice (){
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}



function _getPlayerChoice (){
    choices.forEach( (choice) => {
    const button = document.getElementById(choice);
    button.addEventListener("click", () => {
        const playerChoice = choice;
        console.log("Jugador eligio:", playerChoice);
        playerImg.src = `https://rasnerdev.github.io/piedrapapeltijeraslagartospock/img/ ${imageMap[playerChoice]}`

        const cpuChoice = _randomChoice()
        console.log("CPU eligio:", cpuChoice);

        console.log(_getWinner(playerChoice,cpuChoice));

    })
    })
}

function _getWinner (playerChoice,cpuChoice){
if(playerChoice == cpuChoice){
    return "This is a Draw!!!"
}

const rules = {
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"]
};

if(rules[playerChoice].includes(cpuChoice)){
return "WINNER!!!!"
}
else{
    return "Losing like always...?"
}

}

_getPlayerChoice();