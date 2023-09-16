//inicio do jogo
let board = ["", "", "", "", "", "", "", "", "",];
let symbl = ['o', 'x'];
playerTime = 0;
let gameOver = false;



function handleMove(posit) {
    if (gameOver) {
      return;
    }
    if (board[posit] == '') {
      board[posit] = symbl[playerTime]

      gameOver = checkWinner();
    
       if(gameOver == false){
      if (playerTime == 0) {
        playerTime = 1;
      } else {
        playerTime = 0
      }
    }

      return gameOver;
    }

}
function checkWinner() {
  let winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < winState.length; i++) {
    let sequence = winState[i];
    let column1 = sequence[0];
    let column2 = sequence[1];
    let column3 = sequence[2];
    if (board[column1] == board[column2] &&
      board[column1] == board[column3] && board[column1] != '') {
      return true;
    }

  }
  return false;
} 
