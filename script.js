



let scoreCard = JSON.parse(localStorage.getItem('scoreCard')); 
if(!scoreCard){

    scoreCard = {
        win : 0,
        loss : 0,
        tie : 0
    }
}



ScoreDisplay();

//console.log(score)
//console.log(scoreCard);
function computerMove(){
    let randomMoves = Math.random()
    if(randomMoves >= 0 && randomMoves < 1/3){
        return  'rock';

    }
    else if(randomMoves >=1/3 && randomMoves < 2/3){
        return  'paper'
    }
    else if(randomMoves >= 2/3 && randomMoves < 1){
        return  'scissor'
    }
}

function gameResult(playerMove){
    let result = '';
    let computerMoves = computerMove();
    if(playerMove === 'rock'){
         if(computerMoves === 'rock'){
            result = 'tieup!'
            scoreCard.tie++;


        }
        else if(computerMoves === 'paper'){
            result = 'computerWins!'
            scoreCard.loss++;
        }
        else if(computerMoves === 'scissors'){
            result = 'youWin!'
            scoreCard.win++;
        }

    }
    else if(playerMove === 'paper'){
        if(computerMoves === 'rock'){
           result = 'youWin!'
           scoreCard.win++


       }
       else if(computerMoves === 'paper'){
           result = 'tieUp!'
           scoreCard.tie++
       }
       else if(computerMoves === 'scissors'){
           result = 'ComputerWins!'
           scoreCard.loss++
       }

   }
   else if(playerMove === 'scissors'){
    if(computerMoves === 'rock'){
       result = 'ComputerWins!'
       scoreCard.loss++;


   }
   else if(computerMoves === 'paper'){
       result = 'YouWin!'
       scoreCard.win++
   }
   else if(computerMoves === 'scissors'){
       result = 'tieUp!'
       scoreCard.tie++
   }
   

}
document.querySelector('.js-result-display').innerHTML = `${result}`
   const movesButton =document.querySelector('.js-move-display');
   movesButton.innerHTML = `You <img class="img-emoji" src="icons/${playerMove}-emoji.png" alt="">
   <img class="img-emoji" src="icons/${computerMoves}-emoji.png" alt=""> ComputerMoves`;

   ScoreDisplay()
   localStorage.setItem('scoreCard', JSON.stringify(scoreCard))
   
}
function ScoreDisplay(){
    let score = document.querySelector('.js-score-display');
    score.innerHTML = `wins ${scoreCard.win} loss ${scoreCard.loss} tie ${scoreCard.tie}`
}
function resetScore() {
    scoreCard = { win: 0, loss: 0, tie: 0 };
    localStorage.removeItem('scoreCard');
    ScoreDisplay();
}