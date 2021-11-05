// Declarations

let randNum;
let wheelValues = document.getElementsByClassName("wheelSlice");
let ballPosition = "";
let bankRoll = 5000;
let randomNumberCount = 0;
let winAmountCount = "0";
let betNumArr = [];
let wheelNumArray = [];

// Sounds

let spinSound = new Audio("media/spin-sound.mp3");
spinSound.volume = 0.5;

// DOM elements

let bankRollDisplay = document.getElementById("bank-roll");
let betsChosen = document.getElementById("bets-chosen");
let numbersChosen = document.getElementById("numbers-chosen");
let chosen = document.getElementById("chosen");
let innerWheel = document.getElementById("innerWheel");
let ball = document.getElementById("ball");
let info = document.getElementById("info");
let betDiv = document.getElementById("bet-buttons");

let spin = document.getElementById("spin");
let betAmount = 0;
let betAmount250 = document.getElementById("bet-amount-250");
let betAmount500 = document.getElementById("bet-amount-500");
let betAmount750 = document.getElementById("bet-amount-750");
let betAmount1000 = document.getElementById("bet-amount-1000");
let addFunds5000 = document.getElementById("add-funds-5000");

let zero = document.getElementById("zero");
let thirtyTwo = document.getElementById("thirty-two");
let fifteen = document.getElementById("fifteen");
let nineteen = document.getElementById("nineteen");
let four = document.getElementById("four");
let twentyOne = document.getElementById("twenty-one");
let two = document.getElementById("two");
let twentyFive = document.getElementById("twenty-five");
let seventeen = document.getElementById("seventeen");
let thirtyFour = document.getElementById("thirty-four");
let six = document.getElementById("six");
let twentySeven = document.getElementById("twenty-seven");
let thirteen = document.getElementById("thirteen");
let thirtySix = document.getElementById("thirty-six");
let eleven = document.getElementById("eleven");
let thirty = document.getElementById("thirty");
let eight = document.getElementById("eight");
let twentyThree = document.getElementById("twenty-three");
let ten = document.getElementById("ten");
let five = document.getElementById("five");
let twentyFour = document.getElementById("twenty-four");
let sixteen = document.getElementById("sixteen");
let thirtyThree = document.getElementById("thirty-three");
let one = document.getElementById("one");
let twenty = document.getElementById("twenty");
let fourteen = document.getElementById("fourteen");
let thirtyOne = document.getElementById("thirty-one");
let nine = document.getElementById("nine");
let twentyTwo = document.getElementById("twenty-two");
let eighteen = document.getElementById("eighteen");
let twentyNine = document.getElementById("twenty-nine");
let seven = document.getElementById("seven");
let twentyEight = document.getElementById("twenty-eight");
let twelve = document.getElementById("twelve");
let thirtyFive = document.getElementById("thirty-five");
let three = document.getElementById("three");
let twentySix = document.getElementById("twenty-six");

// Event Listeners

betAmount250.addEventListener("click", () => {
  betAmount = 250
})

betAmount500.addEventListener("click", () => {
  betAmount = 500
})

betAmount750.addEventListener("click", () => {
  betAmount = 750
})

betAmount1000.addEventListener("click", () => {
  betAmount = 1000
})

addFunds5000.addEventListener("click", () => {
  bankRoll += 5000;
  console.log(bankRoll)
  bankRollDisplay.innerHTML = `$${bankRoll}`
})

spin.addEventListener("click", () => {
  init(zero);
  init(one);
  init(two);
  init(three);
  init(four);
  init(five);
  init(six);
  init(seven);
  init(eight);
  init(nine);
  init(ten);
  init(eleven);
  init(twelve);
  init(thirteen);
  init(fourteen);
  init(fifteen);
  init(sixteen);
  init(seventeen);
  init(eighteen);
  init(nineteen);
  init(twenty);
  init(twentyOne);
  init(twentyTwo);
  init(twentyThree);
  init(twentyFour);
  init(twentyFive);
  init(twentySix);
  init(twentySeven);
  init(twentyEight);
  init(twentyNine);
  init(thirty);
  init(thirtyOne);
  init(thirtyTwo);
  init(thirtyThree);
  init(thirtyFour);
  init(thirtyFive);
  init(thirtySix);

  info.innerHTML = "";
  winAmountCount = 0;

  innerWheel.classList.add("ballRotate");
  ball.classList.add("ballRotateOpacity");

  getRandomNumber();

  spinSound.play()
});

// Functions

function resetTurn() {
  randomNumberCount = 0;
  wheelNumArray = [];
  betNumArr = [];
  disableBet("auto");
}

function getRandomNumber() {
  if (randomNumberCount === 5) {
    rouletteMatch();
    return resetTurn();
  } else {
    randNum = Math.floor(Math.random() * (36 - 0));
    ballPosition = randNum;
    matchNum();
    randomNumberCount += 1;
    updateNumChosen(ballPosition);
    setTimeout(getRandomNumber, 1000);
    
  }
}

function rouletteMatch() {
  for (i = 0; i < betNumArr.length; i++) {
    if (betNumArr[i] == wheelNumArray[0]) {
      bankRoll += betAmount * 35;
      winAmountCount += betAmount * 35;
      updateBankRoll();
    } else if (betNumArr[i] == wheelNumArray[1]) {
      bankRoll += betAmount * 35;
      winAmountCount += betAmount * 35;
      updateBankRoll();
    } else if (betNumArr[i] == wheelNumArray[2]) {
      bankRoll += betAmount * 35;
      winAmountCount += betAmount * 35;
      updateBankRoll();
    } else if (betNumArr[i] == wheelNumArray[3]) {
      bankRoll += betAmount * 35;
      winAmountCount += betAmount * 35;
      updateBankRoll();
    } else if (betNumArr[i] == wheelNumArray[4]) {
      bankRoll += betAmount * 35;
      winAmountCount += betAmount * 35;
      updateBankRoll();
    } else {
      updateBankRoll();
    }
  }
}

function updateNumChosen(chosen) {
  wheelNumArray.push(chosen);
  numbersChosen.innerHTML = wheelNumArray;
}

function placeBall(arg) {
  arg.style.backgroundColor = "yellow";
  arg.style.color = "black";
}

function init(arg) {
  arg.style.backgroundColor = null;
  arg.style.color = "white";
}

function matchNum() {
  if (ballPosition == zero.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(zero);
  } else if (ballPosition == thirtyTwo.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirtyTwo);
  } else if (ballPosition == fifteen.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(fifteen);
  } else if (ballPosition == nineteen.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(nineteen);
  } else if (ballPosition == four.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(four);
  } else if (ballPosition == twentyOne.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentyOne);
  } else if (ballPosition == two.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(two);
  } else if (ballPosition == twentyFive.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentyFive);
  } else if (ballPosition == seventeen.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(seventeen);
  } else if (ballPosition == thirtyFour.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirtyFour);
  } else if (ballPosition == six.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(six);
  } else if (ballPosition == twentySeven.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentySeven);
  } else if (ballPosition == thirteen.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirteen);
  } else if (ballPosition == thirtySix.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirtySix);
  } else if (ballPosition == eleven.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(eleven);
  } else if (ballPosition == thirty.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirty);
  } else if (ballPosition == eight.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(eight);
  } else if (ballPosition == twentyThree.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentyThree);
  } else if (ballPosition == ten.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(ten);
  } else if (ballPosition == five.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(five);
  } else if (ballPosition == twentyFour.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentyFour);
  } else if (ballPosition == sixteen.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(sixteen);
  } else if (ballPosition == thirtyThree.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirtyThree);
  } else if (ballPosition == one.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(one);
  } else if (ballPosition == twenty.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twenty);
  } else if (ballPosition == fourteen.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(fourteen);
  } else if (ballPosition == thirtyOne.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirtyOne);
  } else if (ballPosition == nine.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(nine);
  } else if (ballPosition == twentyTwo.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentyTwo);
  } else if (ballPosition == eighteen.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(eighteen);
  } else if (ballPosition == twentyNine.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentyNine);
  } else if (ballPosition == seven.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(seven);
  } else if (ballPosition == twentyEight.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentyEight);
  } else if (ballPosition == twelve.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twelve);
  } else if (ballPosition == thirtyFive.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(thirtyFive);
  } else if (ballPosition == three.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(three);
  } else if (ballPosition == twentySix.innerHTML) {
    chosen.innerHTML = ballPosition;
    placeBall(twentySix);
  }
}

// Betting System

function disableBet(arg) {
  betDiv.style.pointerEvents = arg;
}

function updateBankRollArr() {
  bankRollDisplay.innerHTML = "$" + bankRoll;
  betsChosen.innerHTML = betNumArr;
  if (betNumArr.length == 5) {
    info.innerHTML = "Max bet reached! Click Spin!";
    disableBet("none");
  }
}

function updateBankRoll() {
  if (winAmountCount >= "1") {
    bankRollDisplay.innerHTML = "$" + bankRoll;
    info.innerHTML =
      "You Won $" + winAmountCount + "! Bet up to 5 numbers and spin again!";
  } else {
    info.innerHTML = "No Win! Bet up to 5 numbers and spin again!";
  }
}

function updateBankRollBet() {
  bankRoll -= betAmount;
}

document.getElementById("zero-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("0");
  updateBankRollArr();
});
document.getElementById("thirty-two-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("32");
    updateBankRollArr();
  });
document.getElementById("fifteen-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("15");
  updateBankRollArr();
});
document.getElementById("nineteen-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("19");
  updateBankRollArr();
});
document.getElementById("four-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("4");
  updateBankRollArr();
});
document.getElementById("twenty-one-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("21");
    updateBankRollArr();
  });
document.getElementById("two-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("2");
  updateBankRollArr();
});
document.getElementById("twenty-five-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("25");
    updateBankRollArr();
  });
document.getElementById("seventeen-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("17");
  updateBankRollArr();
});
document.getElementById("thirty-four-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("34");
    updateBankRollArr();
  });
document.getElementById("six-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("6");
  updateBankRollArr();
});
document.getElementById("twenty-seven-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("27");
    updateBankRollArr();
  });
document.getElementById("thirteen-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("13");
  updateBankRollArr();
});
document.getElementById("thirty-six-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("36");
    updateBankRollArr();
  });
document.getElementById("eleven-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("11");
  updateBankRollArr();
});
document.getElementById("thirty-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("30");
  updateBankRollArr();
});
document.getElementById("eight-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("8");
  updateBankRollArr();
});
document.getElementById("twenty-three-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("23");
    updateBankRollArr();
  });
document.getElementById("ten-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("10");
  updateBankRollArr();
});
document.getElementById("five-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("5");
  updateBankRollArr();
});
document.getElementById("twenty-four-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("24");
    updateBankRollArr();
  });
document.getElementById("sixteen-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("16");
  updateBankRollArr();
});
document.getElementById("thirty-three-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("33");
    updateBankRollArr();
  });
document.getElementById("one-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("1");
  updateBankRollArr();
});
document.getElementById("twenty-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("20");
  updateBankRollArr();
});
document.getElementById("fourteen-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("14");
  updateBankRollArr();
});
document.getElementById("thirty-one-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("31");
    updateBankRollArr();
  });
document.getElementById("nine-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("9");
  updateBankRollArr();
});
document.getElementById("twenty-two-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("22");
    updateBankRollArr();
  });
document.getElementById("eighteen-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("18");
  updateBankRollArr();
});
document.getElementById("twenty-nine-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("29");
    updateBankRollArr();
  });
document.getElementById("seven-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("7");
  updateBankRollArr();
});
document.getElementById("twenty-eight-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("28");
    updateBankRollArr();
  });
document.getElementById("twelve-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("12");
  updateBankRollArr();
});
document.getElementById("thirty-five-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("35");
    updateBankRollArr();
  });
document.getElementById("three-bet").addEventListener("click", function () {
  updateBankRollBet()
  betNumArr.push("3");
  updateBankRollArr();
});
document.getElementById("twenty-six-bet").addEventListener("click", function () {
    updateBankRollBet()
    betNumArr.push("26");
    updateBankRollArr();
  });
