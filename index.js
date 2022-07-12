// Black jack Node
// 1. start game and deal out a value to yourself then deal out to computer
//2. create a hit and stand function
//3. Create a bust function along with win
// node args start at 2 we skip 1.
// inquirer is not working need to figure that out
import inquirer from "inquirer";

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

function homePage() {
  console.log("-----------------------------");
  console.log("      Welcome To BlackJack    ");
  console.log("-----------------------------");
  let number = arr[0];
  console.log(arr[0]);
  newTop.push(number);
}

var Game = function () {
  inquirer
    .prompt([
      {
        name: "turn",
        message: "Hit?",
        type: "confirm",
      },
    ])
    // got the new shuffled number to display need to add to first number to get total still
    .then(function (answer) {
      shuffle(arr);
      console.log("Next card", arr[0]);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
      }
    });
};

//addCards();
homePage();
Game();
