console.log("hello");
var img = document.getElementById("image");
var text = document.getElementById("text");
var leftBound = 0;
var rightBound = 80;
var topBound = 0;
var bottomBound = 75;
var leftPos = leftBound;
var topPos = topBound;
img.style.left = leftPos + "vw";
img.style.top = topPos + "vh";
var leftSpeed = 1;
var topSpeed = 1;
var invisList = document.getElementsByClassName("invis");
var wolfie;

function test() {
    console.log("test");
    console.log(img);
    for (let i = 0; i < invisList.length; i++) {
        invisList[i].style.display = "block";
    }
    confetti.start();
    
    wolfie = document.createElement("img");
}

function makeWolfieAlive(wolfie) {
    wolfie.img = "https://news.stonybrook.edu/wp-content/uploads/2018/07/Wolfie-Feature-3.jpg";
    wolfie.classList.add("wolfie");
}

function print(msg) {
    console.log(msg);
}

function moveWolfie() {
    leftPos += leftSpeed;
    topPos += topSpeed;
    if (leftPos > rightBound)
        leftSpeed = -Math.abs(leftSpeed);
    if (leftPos < leftBound)
        leftSpeed = Math.abs(leftSpeed);
    if (topPos > bottomBound)
        topSpeed = -Math.abs(topSpeed);
    if (topPos < topBound)
        topSpeed = Math.abs(topSpeed);
    img.style.top = topPos + "vh";
    img.style.left = leftPos + "vw";
}