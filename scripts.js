let randNum;
let wheelValues = document.getElementsByClassName("wheelSlice") 
let ballPosition = ""

let spin = document.getElementById("spin")

spin.addEventListener("click", getRand)

// function play() {
//     getRand()
// }

function getRand() {
    randNum = Math.floor(Math.random() * (36 - 0));
    alert(randNum)
}

function matchNum() {

}