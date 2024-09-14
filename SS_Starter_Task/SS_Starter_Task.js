let red = 0;

function redPlus(){
    let redCount = document.getElementById("red_count");
    redCount.innerHTML = ++red;
    document.body.style.backgroundColor = '#EF476F';

}

let yellow = 0;
function yellowPlus(){
    let yellowCount = document.getElementById("yellow_count");
    yellowCount.innerHTML = ++yellow;
    document.body.style.backgroundColor = '#FFD166';
}

let green = 0;
function greenPlus(){
    let greenCount = document.getElementById("green_count");
    greenCount.innerHTML = ++green;
    document.body.style.backgroundColor = '#06D6A0';
}

let blue = 0;
function bluePlus(){
    let blueCount = document.getElementById("blue_count");
    blueCount.innerHTML = ++blue;
    document.body.style.backgroundColor = '#118AB2';
}

let reset = 0;
function clearBoard(){
    red = 0;
    yellow = 0;
    green = 0;
    blue = 0;
    document.getElementById("red_count").innerHTML = "0";
    document.getElementById("yellow_count").innerHTML = "0";
    document.getElementById("green_count").innerHTML = "0";
    document.getElementById("blue_count").innerHTML = "0";
    document.body.style.backgroundColor = '#CECDCB';
}