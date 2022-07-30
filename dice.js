
let player1Score = 0
let player2Score = 0
let player1Turn
let randomNumber = 0
let n1
let n2


const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")


function showResetButton() {
    rollBtn.style.display = "none"
    doubleDice.style.display = "none"
    resetBtn.style.display = "block"
}


 rollBtn.addEventListener("click", function() {
        randomNumber = Math.floor(Math.random() * 6) + 1
        rollingDice()
    
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = turn()
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Start The Game again!"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    doubleDice.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}


function rollingDice(){
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
}


// updating 
// 1:- double btn
const doubleDice = document.getElementById("double") 

doubleDice.addEventListener("click", function(){
    const dice = Math.floor(Math.random()*2) +1
    randomNumber = Math.floor(Math.random() * 6) + 1

       if(dice === 1){
           randomNumber *= 0
           rollingDice()
        }
       
       else if(dice === 2){
           randomNumber *= 2
           rollingDice()
        }
        
       
})
// fair game

function displayBtn(){
    rollBtn.style.display = "block"
    doubleDice.style.display = "block"
    startGame.style.display ="none"
}
const startGame = document.getElementById("startgame")
startGame.addEventListener("click",function(){
    displayBtn()
     n1 = Math.floor(Math.random()*3) +1
     n2 = Math.floor(Math.random()*3) +1
    turn()
})
function turn(){
    if(n1 === n2){
        player1Turn = true
        message.textContent = "Player 1 Turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
    }
    else
    {
        player1Turn = false
        message.textContent = "Player 2 Turn"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")

    }
    return player1Turn
   }