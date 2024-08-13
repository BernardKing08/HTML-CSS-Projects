//retrieving the 'score' variable stored in the localStorage
var score = JSON.parse(localStorage.getItem('score')) 
    || { wins: 0,
        loses: 0,
        ties: 0
    };


function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
        } 
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } 
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

let isAutoPlaying = false;
let intervalId;
function autoPlay(){

    if(!isAutoPlaying){
        //running the function when the autoplay button is called
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        isAutoPlaying = true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying  =false;
    }

    
}


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } 
        else if (computerMove === 'paper') {
            result = 'You win.';
        } 
        else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    } 

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.'
        } 
    else if (computerMove === 'paper') {
        result = 'Tie.';
    }
    else if (computerMove === 'scissors') {
        result = 'You lose.';
        }
    } 

    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }    
        else if (computerMove === 'paper') {
            result = 'You lose.';
        } 
        else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if(result === 'You win.'){
        score.wins += 1;
        }
    else if(result === 'You lose.'){
        score.loses += 1;
    }
    else if(result === 'Tie.'){
        score.ties += 1;
    }

    //saving the score to localStorage
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result

    document.querySelector(".js-moves").innerHTML = `You 
        <img src="images/${playerMove}.jfif" alt="" class="move-icon"> 
        <img src="images/${computerMove}.jfif" alt="" class="move-icon">
        Computer`

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Loses: ${score.loses}
    Ties: ${score.ties}`
    );
}

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses},
    Ties: ${score.ties}`
}