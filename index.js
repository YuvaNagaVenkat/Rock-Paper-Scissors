let score=JSON.parse(localStorage.getItem('score'))||{
  Wins:0,
  Loses:0,
  Ties:0
};
updateScore();
function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  }
  else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='scissors';
  }

  return computerMove;
}

function playGame(playerMove){
  let computerMove=pickComputerMove();
  let result;
  if(computerMove === 'rock' && playerMove==='paper' || computerMove==='paper' && playerMove==='scissors' || computerMove==='scissors' && playerMove==='rock'){
    result='You Win';
  }
  else if(computerMove === 'paper' && playerMove=='rock' || computerMove==='rock' && playerMove==='scissors' || computerMove==='scissors' && playerMove==='paper'){
    result='You Lose'
  }
  else if(computerMove===playerMove){
    result='Tie';
  }
  document.querySelector('.js-result').innerHTML=`${result}`;
  
  document.querySelector('.js-moves').innerHTML=` You
<img src="RPS-Images/${playerMove}-emoji.png" class="css-move-icon">
<img src="RPS-Images/${computerMove}-emoji.png" class="css-move-icon">
Computer`;
  if(result=='You Win'){
    score.Wins++;
  }
  else if(result=='You Lose'){
    score.Loses++;
  }
  else if(result=='Tie'){
    score.Ties++;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScore();

  }

  function updateScore(){
    document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.Wins},Losses: ${score.Loses},Ties: ${score.Ties}`;
  }