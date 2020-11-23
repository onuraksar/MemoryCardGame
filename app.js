// Coded by ONUR AKŞAR

document.addEventListener('DOMContentLoaded', function() {


  const gameBoard = document.querySelector(".game-board");
  const button = document.querySelector(".btn-create");

  button.addEventListener("click", createBoard);

  const colors = ["red", "blue", "green"];

  let pickedColors = [];
  let tempPickedColors = []; // will be used inside the function below.
  for (i = 0; i < colors.length; i++) {
    tempPickedColors.push(colors[i]);
    tempPickedColors.push(colors[i]); // duplicate the elements inside the array.
    // ["red", "red", "blue", "blue", "green", "green"]
  }
  pickedColors = tempPickedColors; // Equalize the arrays.


  let firstCard;
  let secondCard;

  let firstCardColor;
  let secondCardColor;

// Shuffle the cards so that the order of the color will be different.
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function createBoard() {

    shuffle(pickedColors); // shuffle the cards.
    // First, check if a set of cards already exist. IF they do, delete them all and replace with new ones.

    if (gameBoard.children.length === 0) {
      // If no cards exist in the board, create them:

      for (let i = 0; i < pickedColors.length; i++) {
        let colorContainer = document.createElement("div");
        colorContainer.setAttribute("id", i);
        colorContainer.setAttribute("class", "card");
        colorContainer.style.backgroundColor = pickedColors[i];
        colorContainer.classList.toggle("flipped-over");
        gameBoard.appendChild(colorContainer);
      }

      document.querySelectorAll(".card").forEach(item => {
        item.addEventListener("click", handleClick);  // add event listener for all the cards on the board.
      });


      function handleClick(event) {
        // First,to avoid a logical error, check if the clicked card has already been matched before:
        if (this.classList.contains("matched")) {
          console.log("do nothing.");
        } else {

          // check if any card has been clicked and is up already.
          console.log(this);
          const numberOfOnCards = CardsOn(); // returns true if all the cards are off.

          // if a card is already flipped:
          if (numberOfOnCards === 0) {
            this.classList.toggle("flipped-over"); // if none or one card is already on, you can flip over another card.
            console.log(this);
            firstCardColor = this.style.backgroundColor; // keep the first card's color in a variable.
            firstCard = this;
            console.log(firstCardColor);

          } else if (numberOfOnCards === 1) {
            this.classList.toggle("flipped-over"); // if none or one card is already on, you can flip over another card.
            secondCardColor = this.style.backgroundColor;
            secondCard = this;
            console.log(secondCardColor);
            setTimeout(checkSameCards, 1000); // if they are equal change their color ( by adding a css class.)
          } else {
            console.log("enough of with the cards!!");

          }

        }


      }

    } else {
      // If some cards exist in the board, clear the contents and replace them with new cards by re-calling the createBoard function.
      gameBoard.innerHTML = "";
      createBoard();
    }


  }





  function CardsOn() {

    const gameBoardElementsArray = Array.from(gameBoard.children); // turn children object into an array.

    let counter = 0;

    for (let i = 0; i < gameBoardElementsArray.length; i++) {
      if (!gameBoardElementsArray[i].classList.contains("flipped-over") && !gameBoardElementsArray[i].classList.contains("matched")) {
        counter++; // if the selected card is not a member of matched cards and it is on, increment the counter.
      } else {
        continue; // if otherwise, continue with the next card.
      }

    }

    return counter;
  }



  function checkSameCards() {
    if (firstCard !== secondCard && firstCardColor === secondCardColor) {
      console.log("they are equal!!");
      // firstCard.classList.remove("flipped-over");
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      // secondCard.classList.remove("flipped-over");

    } else {
      console.log("they are not the same!");
      // if they are not the same cards. Flip them back off
      firstCard.classList.toggle("flipped-over");
      secondCard.classList.toggle("flipped-over");
      hasMatchedCards = false;
    }
  }


  setTimeout(function() {
    console.log()
  }, 6000);


});

// Coded by ONUR AKŞAR
