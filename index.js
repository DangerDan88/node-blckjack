// Black jack Node
// 1. start game and deal out a value to yourself then deal out to computer
//2. create a hit and stand function
//3. Create a bust function along with win
// node args start at 2 we skip 1.
// inquirer is not working need to figure that out
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

var prompt = function (question) {
  return (
    inquirer
      .prompt([
        {
          name: "turn",
          message: "Hit?",
          type: "confirm",
        },
      ])
      // need to figure out bust logic and win logic
      .then(function (answer1) {
        if (answer1.turn === true) {
          shuffle(arr);
          console.log("Next card", arr[0]);
          newTop.push(arr[0]);
          addCards();
          return prompt(question);
        } else {
          console.log("No hit stay at", arr[0]);
        }
      })
  );
};
// maybe try not a loop since it console both numbers before sending sum
// fix node version and see if lodash sum method works better for changing turns
function addCards() {
  let sum = lodash.sum(newTop);
  console.log("Total", sum);
  if (sum > 21) {
    console.log("bust");
    newGame();
    // need to reset game here
  } else if (sum === 21) {
    console.log("blackjack");
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
