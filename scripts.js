let randNum;
let wheelValues = document.getElementsByClassName("wheelSlice") 
let ballPosition = ""
let bankRoll = 5000

let bankRollDisplay = document.getElementById("bank-roll")
let betsChosen = document.getElementById("bets-chosen")
let chosen = document.getElementById("chosen")

let spin = document.getElementById("spin")

let zero = document.getElementById("zero")
let thirtyTwo = document.getElementById("thirty-two")
let fifteen = document.getElementById("fifteen")
let nineteen = document.getElementById("nineteen")
let four = document.getElementById("four")
let twentyOne = document.getElementById("twenty-one")
let two = document.getElementById("two")
let twentyFive = document.getElementById("twenty-five")
let seventeen = document.getElementById("seventeen")
let thirtyFour = document.getElementById("thirty-four")
let six = document.getElementById("six")
let twentySeven = document.getElementById("twenty-seven")
let thirteen = document.getElementById("thirteen")
let thirtySix = document.getElementById("thirty-six")
let eleven = document.getElementById("eleven")
let thirty = document.getElementById("thirty")
let eight = document.getElementById("eight")
let twentyThree = document.getElementById("twenty-three")
let ten = document.getElementById("ten")
let five = document.getElementById("five")
let twentyFour = document.getElementById("twenty-four")
let sixteen = document.getElementById("sixteen")
let thirtyThree = document.getElementById("thirty-three")
let one = document.getElementById("one")
let twenty = document.getElementById("twenty")
let fourteen = document.getElementById("fourteen")
let thirtyOne = document.getElementById("thirty-one")
let nine = document.getElementById("nine")
let twentyTwo = document.getElementById("twenty-two")
let eighteen = document.getElementById("eighteen")
let twentyNine = document.getElementById("twenty-nine")
let seven = document.getElementById("seven")
let twentyEight = document.getElementById("twenty-eight")
let twelve = document.getElementById("twelve")
let thirtyFive = document.getElementById("thirty-five")
let three = document.getElementById("three")
let twentySix = document.getElementById("twenty-six")

spin.addEventListener("click", () => {
    init(zero)
    init(one)
    init(two)
    init(three)
    init(four)
    init(five)
    init(six)
    init(seven)
    init(eight)
    init(nine)
    init(ten)
    init(eleven)
    init(twelve)
    init(thirteen)
    init(fourteen)
    init(fifteen)
    init(sixteen)
    init(seventeen)
    init(eighteen)
    init(nineteen)
    init(twenty)
    init(twentyOne)
    init(twentyTwo)
    init(twentyThree)
    init(twentyFour)
    init(twentyFive)
    init(twentySix)
    init(twentySeven)
    init(twentyEight)
    init(twentyNine)
    init(thirty)
    init(thirtyOne)
    init(thirtyTwo)
    init(thirtyThree)
    init(thirtyFour)
    init(thirtyFive)
    init(thirtySix)

    getRand()
})

function getRand() {

    randNum = Math.floor(Math.random() * (36 - 0));
    ballPosition = randNum
    matchNum()
    clear = setTimeout(getRand, 1000);
    if (clear == 5) {
        clearTimeout(clear)
    }
    console.log(clear)
}

function placeBall(arg) {
    arg.style.backgroundColor = "yellow"
    arg.style.color = "black"
}

function init(arg) {
    arg.style.backgroundColor = null
    arg.style.color = "white"
}

function matchNum() {
    if (ballPosition == zero.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(zero)
    } else if (ballPosition == thirtyTwo.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirtyTwo)
    } else if (ballPosition == fifteen.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(fifteen)
    } else if (ballPosition == nineteen.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(nineteen)
    } else if (ballPosition == four.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(four)
    } else if (ballPosition == twentyOne.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentyOne)
    } else if (ballPosition == two.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(two)
    } else if (ballPosition == twentyFive.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentyFive)
    } else if (ballPosition == seventeen.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(seventeen)
    } else if (ballPosition == thirtyFour.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirtyFour)
    } else if (ballPosition == six.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(six)
    } else if (ballPosition == twentySeven.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentySeven)
    } else if (ballPosition == thirteen.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirteen)
    } else if (ballPosition == thirtySix.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirtySix)
    } else if (ballPosition == eleven.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(eleven)
    } else if (ballPosition == thirty.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirty)
    } else if (ballPosition == eight.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(eight)
    } else if (ballPosition == twentyThree.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentyThree)
    } else if (ballPosition == ten.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(ten)
    } else if (ballPosition == five.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(five)
    } else if (ballPosition == twentyFour.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentyFour)
    } else if (ballPosition == sixteen.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(sixteen)
    } else if (ballPosition == thirtyThree.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirtyThree)
    } else if (ballPosition == one.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(one)
    } else if (ballPosition == twenty.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twenty)
    } else if (ballPosition == fourteen.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(fourteen)
    } else if (ballPosition == thirtyOne.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirtyOne)
    } else if (ballPosition == nine.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(nine)
    } else if (ballPosition == twentyTwo.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentyTwo)
    } else if (ballPosition == eighteen.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(eighteen)
    } else if (ballPosition == twentyNine.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentyNine)
    } else if (ballPosition == seven.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(seven)
    } else if (ballPosition == twentyEight.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentyEight)
    } else if (ballPosition == twelve.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twelve)
    } else if (ballPosition == thirtyFive.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(thirtyFive)
    } else if (ballPosition == three.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(three)
    } else if (ballPosition == twentySix.innerHTML) {
        chosen.innerHTML = ballPosition
        placeBall(twentySix)
    }
}

// Betting System

function updateBankRoll() {
    bankRollDisplay.innerHTML = "$" + bankRoll
    betsChosen.innerHTML = betNumArr
    if (betNumArr.length == 5) {
        alert("max bet")
    }
}

betNumArr = []

document.getElementById("zero-bet").addEventListener("click", function() {
    bankRoll -= 250
    
    betNumArr.push("0")
    updateBankRoll()
}) 
document.getElementById("thirty-two-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("32")
    updateBankRoll()
})
document.getElementById("fifteen-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("15")
    updateBankRoll()
})
document.getElementById("nineteen-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("19")
    updateBankRoll()
})
document.getElementById("four-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("4")
    updateBankRoll()

})
document.getElementById("twenty-one-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("21")
    updateBankRoll()

})
document.getElementById("two-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("2")
    updateBankRoll()

})
document.getElementById("twenty-five-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("25")
    updateBankRoll()
})
document.getElementById("seventeen-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("17")
    updateBankRoll()
})
document.getElementById("thirty-four-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("34")
    updateBankRoll()
})
document.getElementById("six-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("6")
    updateBankRoll()
})
document.getElementById("twenty-seven-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("27")
    updateBankRoll()
})
document.getElementById("thirteen-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("13")
    updateBankRoll()
})
document.getElementById("thirty-six-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("36")
    updateBankRoll()
})
document.getElementById("eleven-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("11")
    updateBankRoll()
})
document.getElementById("thirty-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("30")
    updateBankRoll()
})
document.getElementById("eight-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("8")
    updateBankRoll()
})
document.getElementById("twenty-three-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("23")
    updateBankRoll()
})
document.getElementById("ten-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("10")
    updateBankRoll()
})
document.getElementById("five-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("5")
    updateBankRoll()
})
document.getElementById("twenty-four-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("24")
    updateBankRoll()
})
document.getElementById("sixteen-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("16")
    updateBankRoll()
})
document.getElementById("thirty-three-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("33")
    updateBankRoll()
})
document.getElementById("one-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("1")
    updateBankRoll()
})
document.getElementById("twenty-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("20")
    updateBankRoll()
})
document.getElementById("fourteen-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("14")
    updateBankRoll()
})
document.getElementById("thirty-one-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("31")
    updateBankRoll()
})
document.getElementById("nine-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("9")
    updateBankRoll()
})
document.getElementById("twenty-two-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("22")
    updateBankRoll()
})
document.getElementById("eighteen-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("18")
    updateBankRoll()
})
document.getElementById("twenty-nine-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("29")
    updateBankRoll()
})
document.getElementById("seven-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("7")
    updateBankRoll()
})
document.getElementById("twenty-eight-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("28")
    updateBankRoll()
})
document.getElementById("twelve-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("12")
    updateBankRoll()
})
document.getElementById("thirty-five-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("35")
    updateBankRoll()
})
document.getElementById("three-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("3")
    updateBankRoll()
})
document.getElementById("twenty-six-bet").addEventListener("click", function() {
    bankRoll -= 250
    betNumArr.push("26")
    updateBankRoll()
})

// console.log(bankRoll)

// zeroBet.addEventListener("click", bet)

// function bet() {

// }

//use find in array to compare numbers with bets to chosen number