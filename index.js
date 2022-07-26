// Black jack Node

import inquirer from "inquirer";
import lodash from "lodash";
// this function will shuffle the deck or numbers for black jack
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// numbers show card values and the console is for first card dealt
let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10,
];

/// dealer array
let dealArr = [14, 15, 16, 17, 18, 19, 20, 21];
shuffle(arr);
let newTop = [];
let nextTurn = [];

function homePage() {
  console.log("-----------------------------");
  console.log("      Welcome To BlackJack    ");
  console.log("-----------------------------");
  let number = arr[0];
  console.log("First card", arr[0]);
  newTop.push(number);
}

function dealer() {
  shuffle(dealArr);
  console.log("Dealer number", dealArr[0]);
  if (dealArr[0] === 21) {
    console.log("Dealer blackjack hit or bust", dealArr[0]);
  } else if (dealArr[0] > 21) {
    console.log("bust");
  }
}

var prompt = function (question) {
  return inquirer
    .prompt([
      {
        name: "turn",
        message: "Hit?",
        type: "confirm",
      },
    ])
    .then(function (answer1) {
      if (answer1.turn === true) {
        shuffle(arr);
        console.log("Next card", arr[0]);
        newTop.push(arr[0]);
        addCards();
        return prompt(question);
      } else {
        console.log("No hit stay at", lodash.sum(newTop));
        dealer();
        if (dealArr[0] > lodash.sum(newTop)) {
          console.log("-----------------------------");
          console.log("You lose");
          console.log("-----------------------------");
        } else if (dealArr[0] < lodash.sum(newTop)) {
          console.log("-----------------------------");
          console.log("You win");
          console.log("-----------------------------");
        } else if (dealArr[0] === lodash.sum(newTop)) {
          console.log("Tie");
        }
      }
    });
};

function addCards() {
  let sum = lodash.sum(newTop);
  console.log("Total", sum);
  if (sum > 21) {
    console.log("-----------------------------");
    console.log("Bust");
    console.log("New Game starts now");
    newGame();
  } else if (sum === 21) {
    console.log("-----------------------------");
    console.log("Blackjack");
    console.log("New Game starts now");

    newGame();
  }
}

function newGame() {
  newTop.length = 0;
  homePage();
}

addCards();
homePage();
prompt();
