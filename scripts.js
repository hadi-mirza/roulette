let wheel = document.getElementById("wheel");
let spin = document.getElementById("spin");
let container = document.getElementById("container")

spin.addEventListener("click", spinWheel)

function spinWheel() {
    // container.classList.add("spin")
    container.style.transform = "rotate(1080deg)"
    container.style.transition = "4s"
    setTimeout(function() {
        container.style.transform = "none"
        container.style.transition = "none"
    }, 4000);
}

function colors() {
    
}

function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("circTxt")[classIndex];
  
    var deg = 360 / txt.length,
      origin = 0;
  
    txt.forEach((ea) => {
      ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }

  circularText(" 0 32 15 19 4 21 2 25 17 34 6 27 13 36 11 30 8 23 10 5 24 16 33 1 20 14 31 9 22 18 29 7 28 12 35 3 26", 360, 0);