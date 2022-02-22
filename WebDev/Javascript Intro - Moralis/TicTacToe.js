
//Global Var
let currPlayer;
let gameOver;
let moveCount = 0;

function playGame() {
  
  let gameOver = false;
  clearBoard();
  document.getElementById("playButton").innerHTML = "Reset Game";

  document.getElementById("playerMsg").innerHTML = "Player 1 make your move!";
  
}

function clearBoard() {

  // Reset currPlayer and game status
  currPlayer = 'X';
  gameOver = false;
  moveCount = 0;

  // Setup some user messages
  document.getElementById("playButton").innerHTML = "Reset Game";
  document.getElementById("playerMsg").innerHTML = "Player 1 make your move!";

  // Enabled all buttons
  document.getElementById("Tic1").disabled = false;
  document.getElementById("Tic2").disabled = false;
  document.getElementById("Tic3").disabled = false;
  document.getElementById("Tic4").disabled = false;
  document.getElementById("Tic5").disabled = false;
  document.getElementById("Tic6").disabled = false;
  document.getElementById("Tic7").disabled = false;
  document.getElementById("Tic8").disabled = false;
  document.getElementById("Tic9").disabled = false;

  // Clear moves
  document.getElementById("Tic1").innerHTML = '';
  document.getElementById("Tic2").innerHTML = '';
  document.getElementById("Tic3").innerHTML = '';
  document.getElementById("Tic4").innerHTML = '';
  document.getElementById("Tic5").innerHTML = '';
  document.getElementById("Tic6").innerHTML = '';
  document.getElementById("Tic7").innerHTML = '';
  document.getElementById("Tic8").innerHTML = '';
  document.getElementById("Tic9").innerHTML = '';

  // Clear background
  document.getElementById("Tic1").style.backgroundColor = "white";
  document.getElementById("Tic2").style.backgroundColor = "white";
  document.getElementById("Tic3").style.backgroundColor = "white";
  document.getElementById("Tic4").style.backgroundColor = "white";
  document.getElementById("Tic5").style.backgroundColor = "white";
  document.getElementById("Tic6").style.backgroundColor = "white";
  document.getElementById("Tic7").style.backgroundColor = "white";
  document.getElementById("Tic8").style.backgroundColor = "white";
  document.getElementById("Tic9").style.backgroundColor = "white";

}

function checkBoard(ticPressed) {

  document.getElementById(ticPressed).innerHTML = currPlayer;
  document.getElementById(ticPressed).disabled = true;
  moveCount ++;

  if (currPlayer == 'X') {
    currPlayer = 'O';
    document.getElementById("playerMsg").innerHTML = "Player 2 make your move!";
  } else {
    currPlayer = 'X';
    document.getElementById("playerMsg").innerHTML = "Player 1 make your move!";
  }

  checkGameOver();
  
}

function checkGameOver() {
  
  //Declare win conditions as array
  const winCond1 = [document.getElementById("Tic1").innerHTML, document.getElementById("Tic2").innerHTML, document.getElementById("Tic3").innerHTML];  // Top-left horizontal win
  const winCond2 = [document.getElementById("Tic1").innerHTML, document.getElementById("Tic4").innerHTML, document.getElementById("Tic7").innerHTML];  // Top-left vertical win
  const winCond3 = [document.getElementById("Tic1").innerHTML, document.getElementById("Tic5").innerHTML, document.getElementById("Tic9").innerHTML];  // Top-left diagonal win
  const winCond4 = [document.getElementById("Tic2").innerHTML, document.getElementById("Tic5").innerHTML, document.getElementById("Tic8").innerHTML];  // Top-middle vertical win
  const winCond5 = [document.getElementById("Tic3").innerHTML, document.getElementById("Tic5").innerHTML, document.getElementById("Tic7").innerHTML];  // Top-right diagonal win
  const winCond6 = [document.getElementById("Tic3").innerHTML, document.getElementById("Tic6").innerHTML, document.getElementById("Tic9").innerHTML];  // Top-right vertical win
  const winCond7 = [document.getElementById("Tic4").innerHTML, document.getElementById("Tic5").innerHTML, document.getElementById("Tic6").innerHTML];  // Middle horizontal win
  const winCond8 = [document.getElementById("Tic7").innerHTML, document.getElementById("Tic8").innerHTML, document.getElementById("Tic9").innerHTML];  // Bottom horizontal win

  if ((winCond1[0] != "" && winCond1[0] == winCond1[1]) && (winCond1[1] == winCond1[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic1").style.backgroundColor = "blue";
    document.getElementById("Tic2").style.backgroundColor = "blue";
    document.getElementById("Tic3").style.backgroundColor = "blue";
    disableBoard();
      
  } else if ((winCond2[0] != "" && winCond2[0] == winCond2[1]) && (winCond2[1] == winCond2[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic1").style.backgroundColor = "blue";
    document.getElementById("Tic4").style.backgroundColor = "blue";
    document.getElementById("Tic7").style.backgroundColor = "blue";
    disableBoard();

} else if ((winCond3[0] != "" && winCond3[0] == winCond3[1]) && (winCond3[1] == winCond3[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic1").style.backgroundColor = "blue";
    document.getElementById("Tic5").style.backgroundColor = "blue";
    document.getElementById("Tic9").style.backgroundColor = "blue";
    disableBoard();
      

} else if ((winCond4[0] != "" && winCond4[0] == winCond4[1]) && (winCond4[1] == winCond4[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic2").style.backgroundColor = "blue";
    document.getElementById("Tic5").style.backgroundColor = "blue";
    document.getElementById("Tic8").style.backgroundColor = "blue";
    disableBoard();
      

} else if ((winCond5[0] != "" && winCond5[0] == winCond5[1]) && (winCond5[1] == winCond5[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic3").style.backgroundColor = "blue";
    document.getElementById("Tic5").style.backgroundColor = "blue";
    document.getElementById("Tic7").style.backgroundColor = "blue";
    disableBoard();
    

} else if ((winCond6[0] != "" && winCond6[0] == winCond6[1]) && (winCond6[1] == winCond6[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic3").style.backgroundColor = "blue";
    document.getElementById("Tic6").style.backgroundColor = "blue";
    document.getElementById("Tic9").style.backgroundColor = "blue";
    disableBoard();
      

} else if ((winCond7[0] != "" && winCond7[0] == winCond7[1]) && (winCond7[1] == winCond7[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic4").style.backgroundColor = "blue";
    document.getElementById("Tic5").style.backgroundColor = "blue";
    document.getElementById("Tic6").style.backgroundColor = "blue";
    disableBoard();
      

} else if ((winCond8[0] != "" && winCond8[0] == winCond8[1]) && (winCond8[1] == winCond8[2])) {
    document.getElementById("playerMsg").innerHTML = "You Win!";
    document.getElementById("Tic7").style.backgroundColor = "blue";
    document.getElementById("Tic8").style.backgroundColor = "blue";
    document.getElementById("Tic9").style.backgroundColor = "blue";
    disableBoard();
      

} else if (moveCount == 9) {
    document.getElementById("playerMsg").innerHTML = "The game is a tie!";
}

}


function disableBoard() {

// Disable all buttons
document.getElementById("Tic1").disabled = true;
document.getElementById("Tic2").disabled = true;
document.getElementById("Tic3").disabled = true;
document.getElementById("Tic4").disabled = true;
document.getElementById("Tic5").disabled = true;
document.getElementById("Tic6").disabled = true;
document.getElementById("Tic7").disabled = true;
document.getElementById("Tic8").disabled = true;
document.getElementById("Tic9").disabled = true;


}

