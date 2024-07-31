document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");
  const playAgain = document.getElementById("play-again");
  const squares = document.querySelectorAll(".square");

  const squareOne = document.getElementById("squareOne");
  const squareTwo = document.getElementById("squareTwo");
  const squareThree = document.getElementById("squareThree");
  const squareFour = document.getElementById("squareFour");
  const squareFive = document.getElementById("squareFive");
  const squareSix = document.getElementById("squareSix");
  const squareSeven = document.getElementById("squareSeven");
  const squareEight = document.getElementById("squareEight");
  const squareNine = document.getElementById("squareNine");

  const player1 = "X";
  const player2 = "0";
  let currentPlayer = player1;

  function allowInputs() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", playerPick);
    }
  }
  allowInputs();

  function preventMoreInputs() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", playerPick);
    }
  }

  playAgain.addEventListener("click", clearBoard);

  function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].innerText = "";
      currentPlayer = player1;
      result.innerText = "";
      allowInputs();
    }
  }

  function playerPick(event) {
    if (event.target.innerText === "" && currentPlayer === player1) {
      event.target.innerText = player1;
      currentPlayer = player2;
      checkWin(player1);
    } else if (event.target.innerText === "" && currentPlayer === player2) {
      event.target.innerText = player2;
      currentPlayer = player1;
      checkWin(player2);
    }
  }

  function checkWin(player) {
    if (
      // rows
      (squareOne.innerText === player &&
        squareTwo.innerText === player &&
        squareThree.innerText === player) ||
      (squareFour.innerText === player &&
        squareFive.innerText === player &&
        squareSix.innerText === player) ||
      (squareSeven.innerText === player &&
        squareEight.innerText === player &&
        squareNine.innerText === player) ||
      // diagonal
      (squareOne.innerText === player &&
        squareFive.innerText === player &&
        squareNine.innerText === player) ||
      (squareThree.innerText === player &&
        squareFive.innerText === player &&
        squareSeven.innerText === player) ||
      // columns
      (squareOne.innerText === player &&
        squareFour.innerText === player &&
        squareSeven.innerText === player) ||
      (squareTwo.innerText === player &&
        squareFive.innerText === player &&
        squareEight.innerText === player) ||
      (squareThree.innerText === player &&
        squareSix.innerText === player &&
        squareNine.innerText === player)
    ) {
      preventMoreInputs();
      return (result.innerText = `Player ${player} is the Winner!`);
    } else if (
      squareOne.innerText !== "" &&
      squareTwo.innerText !== "" &&
      squareThree.innerText !== "" &&
      squareFour.innerText !== "" &&
      squareFive.innerText !== "" &&
      squareSix.innerText !== "" &&
      squareSeven.innerText !== "" &&
      squareEight.innerText !== "" &&
      squareNine.innerText !== ""
    ) {
      result.innerText = "Draw!";
      setTimeout(clearBoard, 3000);
    }
  }
});
